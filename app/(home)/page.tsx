import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      <section className="relative overflow-hidden py-32 flex-1">
        <div className="container">
          <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
          <div className="mx-auto flex max-w-5xl flex-col items-center">

            <div className="z-5 flex flex-col items-center gap-6 text-center">
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <AnimatedGradientText className="text-sm font-medium">
                  Personal GitBook
                </AnimatedGradientText>
                <ChevronRight
                  className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </div>
              <img
                src="/logo.png"
                alt="PentOpsVault"
                className="h-80"
              />
              <div>
                <p className="text-muted-foreground lg:text-xl">
                  Personal GitBook for Pentesting, Network Security, and System Administration.
                </p>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <Link href="/docs/index/">
                  <ShinyButton>Documentation</ShinyButton>
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
