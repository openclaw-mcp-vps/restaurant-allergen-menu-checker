import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AllergenCheck — Verify Restaurant Menus for Allergen Compliance",
  description: "Scan restaurant menu PDFs and websites to flag missing allergen warnings and suggest compliant descriptions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="009df81e-4d9c-4fc4-80cd-ff305471264a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
