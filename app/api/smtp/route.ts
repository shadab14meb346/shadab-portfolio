import { NextResponse } from "next/server";
import { promises as dns } from "node:dns";
import net from "node:net";

const host = "smtp.mandrillapp.com";

async function verifyEmailWithSMTP(email: string) {
  const logs: string[] = [];
  const [, domain] = email.split("@");
  if (!domain) {
    throw new Error("Invalid email address");
  }

  const exchanges = await dns.resolveMx(domain);
  if (!exchanges.length) {
    logs.push("No MX records found");
    return logs;
  }

  const bestExchange = exchanges.reduce((best, current) =>
    current.priority < best.priority ? current : best,
  );

  logs.push(`Using MX ${bestExchange.exchange}`);

  return await new Promise<string[]>((resolve) => {
    const client = net.createConnection(25, bestExchange.exchange, () => {
      logs.push("Connected to SMTP server");
      const commands = [
        `HELO ${host}\r\n`,
        `MAIL FROM: <khan.t.29@gmail.com>\r\n`,
        `RCPT TO: <${email}>\r\n`,
      ];

      let index = 0;
      const sendNext = () => {
        if (index >= commands.length) {
          logs.push("Email is valid");
          client.write("quit\r\n");
          client.end();
          return resolve(logs);
        }
        const command = commands[index++];
        logs.push(`Sending: ${command.trim()}`);
        client.write(command);
      };

      sendNext();

      client.on("data", (data) => {
        logs.push(data.toString());
        sendNext();
      });
    });

    client.setTimeout(10000);

    client.on("timeout", () => {
      logs.push("Connection timed out");
      if (!client.destroyed) {
        client.end();
        client.destroy();
      }
      resolve(logs);
    });

    client.on("error", (error) => {
      logs.push(`Error: ${error.message}`);
      if (!client.destroyed) {
        client.end();
        client.destroy();
      }
      resolve(logs);
    });

    client.on("end", () => {
      logs.push("Disconnected from SMTP server");
    });
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "Missing email query parameter" },
      { status: 400 },
    );
  }

  try {
    const logs = await verifyEmailWithSMTP(email);
    return NextResponse.json({ logs });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
