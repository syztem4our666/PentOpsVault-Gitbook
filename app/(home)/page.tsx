import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      
      <section className="relative overflow-hidden py-32 flex-1">
        <div className="container">
          <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 flex flex-col items-center gap-6 text-center">
              <img
                src="https://icons.iconarchive.com/icons/franksouza183/fs/512/Categories-applications-internet-icon.png"
                alt="logo"
                className="h-16"
              />
              <Badge variant="outline">Personal Gitbook</Badge>
              <div>
                <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                  PentOpsVault
                </h1>
                <p className="text-muted-foreground lg:text-xl">
                  Personal GitBook for Pentesting, Network Security, and System Administration.
                </p>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <Link href="/docs/index/">
                  <Button>Documentation</Button>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-gray-400 text-center mt-auto">
        <div className="container mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} PentOpsVault. Built with Love by @syztem4our666</p>
          <p className="text-xs mt-2">
            Built with <span className="text-blue-400">Next.js</span>.
            Powered by <span className="text-blue-400">Fumadocs</span> & <span className="text-blue-400">Vercel</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
