import localFont from "next/font/local";

export const sen = localFont({
  src: [
    {
      path: "../../styles/fonts/Sen-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Sen-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Sen-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sen",
  display: "swap",
});
