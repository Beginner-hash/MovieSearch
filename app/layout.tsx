import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

export const metadata = {
  title: "Movie Search App",
  description: "Let's search for a movie!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="acid" lang="en">
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
