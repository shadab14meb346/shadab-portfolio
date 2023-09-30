const dns = require("dns");
const net = require("net");

const verifyDnsMx = (domain) => {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (err, addresses) => {
      if (err) {
        reject(err);
      } else {
        resolve(addresses);
      }
    });
  });
};

const getBestPriority = (addresses) => {
  let bestIndex = 0;
  for (let i = 0; i < addresses.length; i++) {
    if (addresses[i].priority < addresses[bestIndex].priority) {
      bestIndex = i;
    }
  }
  return addresses[bestIndex];
};

const host = "smtp.mandrillapp.com";

const verifyEmailWithSMTP = (email) => {
  const logs = [];
  const [user, domain] = email.split("@");
  return new Promise((resolve, reject) => {
    verifyDnsMx(domain).then((verifiedDomain) => {
      console.log(verifiedDomain);
      const bestAddress = getBestPriority(verifiedDomain);
      const exchange = bestAddress.exchange;
      console.log("Exchange:", exchange);
      logs.push(exchange);
      let i = 0;
      const cmd = [
        `HELO ${host}\r\n`,
        `MAIL FROM: <${"khan.t.29@gmail.com"}>\r\n`,
        `RCPT TO: <${email}>\r\n`,
      ];
      try {
        const client = net.createConnection(25, exchange, () => {
          console.log("Connected to SMTP server");
          logs.push("Connected to SMTP server");
          client.write(cmd[i++]);

          client.on("data", (data) => {
            const response = data.toString();
            console.log("First response", response);
            logs.push("First response", response);

            client.emit("next");

            //   if (response.includes("250-AUTH")) {
            //     client.write("AUTH LOGIN\r\n");
            //     client.once("data", (authData) => {
            //       const authResponse = authData.toString();
            //       console.log("Auth response: ", authResponse);
            //       client.write(
            //         Buffer.from("khan.t.29@gmail.com").toString("base64") + "\r\n"
            //       );
            //       client.once("data", (usernameData) => {
            //         const usernameResponse = usernameData.toString();
            //         console.log("Username response: ", usernameResponse);
            //         client.write(Buffer.from(api).toString("base64") + "\r\n");
            //         client.on("data", (passwordData) => {
            //           const passwordResponse = passwordData.toString();
            //           console.log("Final response: ", passwordResponse);
            //           client.emit("next");
            //         });
            //       });
            //     });
            //   }
          });
        });
        client.setTimeout(10000);

        // Handle errors
        client.on("error", (err) => {
          console.error(err);
          resolve(logs);
        });

        // Handle connection close
        client.on("end", () => {
          console.log("Disconnected from SMTP server");
          logs.push("Disconnected from SMTP server");
        });

        client.on("next", () => {
          if (i >= cmd.length) {
            console.log("Email is valid");
            logs.push("Email is valid");
            if (client.writable && !client.destroyed) {
              client.write(`quit\r\n`);
              client.end();
              client.destroy();
            }
            resolve(logs);
          }
          if (!client.writable) {
            if (!client.destroyed) {
              client.destroy();
              resolve();
            }
          } else {
            console.log("Sending:", cmd[i]);
            logs.push("Sending:", cmd[i]);
            client.write(cmd[i++]);
          }
        });

        client.on("timeout", () => {
          console.error("Error: timeout");
          logs.push("Error: timeout");
          if (client.writable && !client.destroyed) {
            client.write(`quit\r\n`);
            client.end();
            client.destroy();
          }
          resolve(logs);
        });
      } catch (error) {}
    });
  });
};

export default async (req, res) => {
  const { email } = req.query;
  const logs = await verifyEmailWithSMTP(email);
  res.status(200).json({ logs });
};
