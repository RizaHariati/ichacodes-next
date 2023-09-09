import "../style/navbar.css";
import "../style/globals.css";
import type { Metadata } from "next";
import { Oswald, Poppins, Roboto } from "next/font/google";
import LayoutWrapper from "./LayoutWrapper";

import { config } from "@fortawesome/fontawesome-svg-core";
import AppProvider from "../(tools)/context/AppProvider";
import dayjs from "dayjs";
import GoogleAnalytics from "../GoogleAnalytics.jsx";
const oswald = Oswald({ subsets: ["latin"], variable: "--oswald" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "IchaCodes",
    template: `%s | IchaCodes`,
  },
  description:
    "IchaCodes mostly work on Front End Developing, from designing to testing to deployment. Designing apps and websites that are custom-made to the client's need mostly using React.JS and its framework",
  creator: `Riza Hariati for Ichacodes &copy;${dayjs().format("YYYY")}`,
};
config.autoAddCss = false;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${oswald.variable}`}>
        <GoogleAnalytics />
        <AppProvider>
          <LayoutWrapper> {children}</LayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
