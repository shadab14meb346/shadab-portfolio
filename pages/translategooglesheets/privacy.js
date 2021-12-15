import React from "react";
import Head from "next/head";

export default function TranslateGoogleSheets() {
	const seoContent = {
		title: "Translate Google Sheets | Privacy Policy",
		imageURL:
			"https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png",
		description: "Privacy policy for using Translate Google Sheets",
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
			<div style={{margin: "100px", color: "#000000"}}>
				<h1 style={{textAlign: "center"}}>Translate Google Sheets</h1>
				<h1>Privacy Policy</h1>
				<p>
					This privacy policy sets out how{" "}
					<a href={googleWorkspacePublishedURL} style={{color: "#2A9DF4"}}>
						Translate Google Sheets
					</a>{" "}
					uses and protects any information that you give when you use this
					application.
					<a href={googleWorkspacePublishedURL} style={{color: "#2A9DF4"}}>
						Translate Google Sheets
					</a>{" "}
					is committed to ensuring that your privacy is protected. Should we ask
					you to provide certain information by which you can be identified when
					using this website, then you can be assured that it will only be used
					in accordance with this privacy statement.
					<a href={googleWorkspacePublishedURL} style={{color: "#2A9DF4"}}>
						Translate Google Sheets
					</a>{" "}
					may change this policy from time to time by updating this page. You
					should check this page from time to time to ensure that you are happy
					with any changes. This policy is effective from December, 9th 2021.
				</p>

				<h4>What we collect</h4>
				<p>We may collect the following information:</p>

				<ul>
					<li>email address</li>
				</ul>

				<h4>What we do with the information we gather</h4>
				<p>
					We require this information to understand your needs and provide you
					with a better service, and in particular for the following reasons:
				</p>
				<ul>
					<li>Internal record keeping</li>
					<li>
						We may use the information to improve our products and services
					</li>
					<li>Define if you reached the quota limitation</li>
					<li style={{color: "red"}}>
						We will never sell or share your information
					</li>
				</ul>

				<h4>Quota limitation</h4>
				<p>
					Each user has a quota limitation: limit number of translation during
					24 rolling hours.
				</p>

				<h4>Security</h4>
				<p>
					We are committed to ensuring that your information is secure. In order
					to prevent unauthorized access or disclosure we have put in place
					suitable physical, electronic and managerial procedures to safeguard
					and secure the information we collect online.
				</p>

				<h4>How don't use cookies</h4>
				<p>
					<a href={googleWorkspacePublishedURL} style={{color: "#2A9DF4"}}>
						Translate Google Sheets
					</a>{" "}
					don't use cookies.
				</p>

				<h4>Links to other websites</h4>
				<p>
					Our website doesn't contain links to enable you to visit other
					websites.
				</p>
				<div style={{width: "30%"}}>
					<p style={{color: "rgba(0,0,0,0.6)", fontSize: "18px"}}>
						Md Shadab Alam
					</p>
					<div
						style={{
							display: "grid",
							gridAutoFlow: "column",
							gridGap: "calc(var(--gutter)/4)",
						}}>
						<a
							style={{
								position: "relative",
								color: "rgba(0,0,0,0.4)",
								textDecoration: "none",
								transition: "color .3s ease",
							}}
							target="_blank"
							href="https://twitter.com/Shadabshs">
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
							href="https://www.linkedin.com/in/md-shadab-alam/">
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
							href="https://github.com/shadab14meb346">
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
							href="mailto:shadab14meb346@gmail.com">
							Email
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
