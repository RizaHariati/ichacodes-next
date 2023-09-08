import "../style/navbar.css";
import "../style/globals.css";
import type { Metadata } from "next";
import { Oswald, Poppins, Roboto } from "next/font/google";
import LayoutWrapper from "./LayoutWrapper";

import { config } from "@fortawesome/fontawesome-svg-core";
import { faHourglassEmpty } from "@fortawesome/free-regular-svg-icons";

const oswald = Oswald({ subsets: ["latin"], variable: "--oswald" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IchaCodes",
  description: "Portfolio of websites made by Riza Hariati for IchaCodes",
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
        <LayoutWrapper> {children}</LayoutWrapper>
      </body>
    </html>
  );
}
