import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google";
import Image from "next/image"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center px-2">
      <Image
        src="/logo.svg"
        alt="Notion"
        width="40"
        height="40"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Notion"
        width="40"
        height="40"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", poppins.className)}>Notion</p>
    </div>
  )
}