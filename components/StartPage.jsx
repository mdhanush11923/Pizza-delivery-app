'use client'

import { Button, Image, Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import WordRotate from "@/components/ui/word-rotate";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { BorderBeam } from "@/components/ui/border-beam";
import { useTheme } from "next-themes";


export default function StartPage() {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <div>
      <section className="flex flex-wrap bg-[purple] items-center justify-center gap-10 px-10 py-8 md:py-20 select-none">
        <div className="max-w-lg gap-4 bg-[yellow]">
          <div className="flex gap-10">
            <div className="flex select-none">
              <p className="font-black text-inherit text-2xl">PIZzA</p>
              <p className="font-regular text-inherit">Delivery</p>
            </div>
            <div className="">
              <ThemeSwitch />
            </div>
          </div>
          <h1 className="scroll-m-20 mb-10 mt-10 font-black tracking-tight text-3xl lg:text-5xl">
            Delicious Pizza Delivered Right to Your Doorstep
          </h1>
          <h2 className="scroll-m-20 pb-2 text-lg tracking-tight mt-6 lg:text-xl">
            Craving pizza? We&apos;ve got you covered!{" "}
            <span
              className={`${title({ color: "yellow", size: "vs" })} whitespace-nowrap`}
            >
              🔥Hot
            </span>
            {", "}
            <span
              className={`${title({ color: "blue", size: "vs" })}  whitespace-nowrap`}
            >
              🍃fresh
            </span>{" "}
            <span className={``}>and delivered</span>
            <span
              className={`${title({ color: "green", size: "vs" })} whitespace-nowrap`}
            >
              ⚡fast!
            </span>
          </h2>
          {/* <WordRotate
            className="text-4xl font-bold text-black dark:text-white"
            words={[
              <span
                key={1}
                className={`${title({ color: "yellow", size: "vs" })}`}
              >
                🔥Hot&nbsp;{", "}
              </span>,
              <span
                key={2}
                className={`${title({ color: "green", size: "vs" })}`}
              >
                🍃fresh&nbsp;{" and "}
              </span>,
              <span
                key={3}
                className={`${title({ color: "blue", size: "vs" })}`}
              >
                ⚡delivered&nbsp; fast!
              </span>,
            ]}
          /> */}
          <div className="flex flex-wrap gap-3 mt-14">
            <Button
              className="h-16 w-full sm:w-44 font-bold border-2 border-foreground text-foreground rounded-lg hover:font-extrabold"
              variant="ghost"
              radius="sm"
              size="lg"
              href="/login"
              as={Link}
            >
              Login
              <BorderBeam
                size={400}
                duration={10}
                borderWidth={2}
                colorFrom={theme === "dark" ? "#ffffff" : "#000000"}
                colorTo={theme === "dark" ? "#000000" : "#ffffff"}
              />
            </Button>

            <RainbowButton onClick={() => router.push("/signup")}>
              <p className=" text-background">Sign up</p>
            </RainbowButton>
          </div>
        </div>
        <div className={`max-md:w-full bg-reddanger pointer-events-none`}>
          <Image isBlurred src="/Images/circlePizza.png" width={650} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
