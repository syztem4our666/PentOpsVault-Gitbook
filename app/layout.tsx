import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Banner } from 'fumadocs-ui/components/banner';

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <Banner variant="rainbow">PentOpsVault @syztem4our666</Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
