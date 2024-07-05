import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function translategsheettmTermsOfServices() {
  const seoContent = {
    title: "Translate G Sheet TM | Privacy Policy",
    imageURL:
      "https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png",
    description: "Privacy policy for using Translate G Sheet TM",
    domain: "mohdshadab.com",
    websiteURL: "https://www.mohdshadab.com/",
  };
  const googleWorkspacePublishedURL = "";

  return (
    <div>
      <Head>
        <title>{seoContent.title}</title>
        <link rel="icon" href="/tgs-favicon.ico" />
        <meta name="description" content={seoContent.description} />
        <meta property="og:url" content={seoContent.websiteLink} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoContent.title} />
        <meta property="og:description" content={seoContent.description} />
        <meta property="og:image" content={seoContent.imageURL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={seoContent.domain} />
        <meta property="twitter:url" content={seoContent.websiteURL} />
        <meta name="twitter:title" content={seoContent.title} />
        <meta name="twitter:description" content={seoContent.description} />
        <meta name="twitter:image" content={seoContent.imageURL} />
        <meta
          name="google-site-verification"
          content="K_41ZKqHv564ii78LADX1pwJLVUfL0ozNPKRxu5YHUg"
        />
      </Head>

      <div style={{ margin: "100px", color: "#000000" }}>
        <h1 style={{ textAlign: "center" }}>Translate G Sheet TM</h1>

        <h1>
          What is <a href={googleWorkspacePublishedURL}>Translate G Sheet TM</a>
          ?
        </h1>
        <p>
          <a href={googleWorkspacePublishedURL}>Translate G Sheet TM</a> is (as
          its name implies) an add-on created to translate your google sheets.
          This simple Google Add-on allows you to translate your google sheets
          in more of 100 languages!
        </p>

        <h1>Privacy Policy</h1>
        <p>
          The privacy policy rules{" "}
          <a
            style={{ color: "#2A9DF4" }}
            href="/translategsheettm/privacy"
            target="_blank"
          >
            are accessible here
          </a>
          .
        </p>

        <h1>Screenshot(s)</h1>
        <div>
          <Image
            src="/Demo-Translate-G-Sheet-TM-Google-Sheets.png"
            width={1000}
            height={600}
            alt="screenshot of Translate G Sheet TM App"
          />
        </div>

        <h1>How it works?</h1>
        <p>
          Step 1: After successfully installed the add-on, the add icon will
          appear in the side bar menu.{" "}
        </p>
        <Image
          src="/screely-1639572909567.png"
          width={1000}
          height={600}
          alt="screenshot of Translate G Sheet TM App"
        />

        <p>
          Step 2: Now, just click on the icon and it will open the a right panel
          of the Translate Google Sheet as below.
        </p>
        <Image
          src="/screely-1639572723280.png"
          alt="screenshot of Translate G Sheet TM"
          width={1000}
          height={600}
        />

        <p>
          Step 3: Now first select the columns you want to translate and in this
          right panel you will be able to select the languages in which you want
          it to translate.
        </p>
        <img
          src="/demo translation sheet - Google Sheets (1).gif"
          alt="how to add on"
          width={1000}
          height={600}
        />
        <div style={{ width: "30%" }}>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "18px" }}>
            Md Shadab Alam
          </p>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridGap: "calc(var(--gutter)/4)",
            }}
          >
            <a
              style={{
                position: "relative",
                color: "rgba(0,0,0,0.4)",
                textDecoration: "none",
                transition: "color .3s ease",
              }}
              target="_blank"
              href="https://twitter.com/Shadabshs"
            >
              Twitter
            </a>
            <a
              style={{
                position: "relative",
                color: "rgba(0,0,0,0.4)",
                textDecoration: "none",
                transition: "color .3s ease",
              }}
              target="_blank"
              href="https://www.linkedin.com/in/md-shadab-alam/"
            >
              LinkedIn
            </a>
            <a
              style={{
                position: "relative",
                color: "rgba(0,0,0,0.4)",
                textDecoration: "none",
                transition: "color .3s ease",
              }}
              target="_blank"
              href="https://github.com/shadab14meb346"
            >
              GitHub
            </a>
            <a
              style={{
                position: "relative",
                color: "rgba(0,0,0,0.4)",
                textDecoration: "none",
                transition: "color .3s ease",
              }}
              target="_blank"
              href="mailto:shadab14meb346@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
