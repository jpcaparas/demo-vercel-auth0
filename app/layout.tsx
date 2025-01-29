import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "./providers";
import Navigation from "./components/Navigation";

const checkEnvironmentVariables = () => {
  const requiredEnvVars = [
    'AUTH0_SECRET',
    'AUTH0_BASE_URL',
    'AUTH0_ISSUER_BASE_URL',
    'AUTH0_CLIENT_ID',
    'AUTH0_CLIENT_SECRET'
  ];

  requiredEnvVars.forEach((name) => {
    if (!process.env[name]) {
      console.warn(`⚠️ Warning: ${name} environment variable is not set. Auth0 authentication might not work properly.`);
    }
  });
};

// Run the check during server initialization
checkEnvironmentVariables();

export const metadata: Metadata = {
  title: "Next.js + Auth0 Demo",
  description: "A demo of Auth0 integration with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
