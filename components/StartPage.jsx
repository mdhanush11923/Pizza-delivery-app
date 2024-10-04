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

export default function StartPage() {
  const router = useRouter();
  return (
    <div>
      <section className="flex flex-wrap items-center justify-center gap-10 px-10 py-8 md:py-20">
        <div className="max-w-lg gap-4">
          <div className="flex gap-10">
            <div className="flex ">
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
            <span className={`${title({ color: "yellow", size: "vs" })}`}>
              🔥Hot&nbsp;
            </span>
            {", "}
            <span className={`${title({ color: "green", size: "vs" })}`}>
              🍃fresh&nbsp;
            </span>
            {" and "}
            <span className={`${title({ color: "blue", size: "vs" })}`}>
              ⚡delivered&nbsp;
            </span>
            fast!
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
            {/* <Button
              className="h-16 w-full sm:w-44"
              color="primary"
              radius="sm"
              size="lg"
              href="/login"
              as={Link}
            >
              Login
            </Button> */}
            <Button
              className="h-16 w-full sm:w-44 relative  font-medium border-foreground text-foreground rounded-lg hover:font-bold"
              color=""
              size="lg"
              href="/login"
              as={Link}
              variant="ghost"
            >
              Login
              <BorderBeam
                borderWidth={2}
                colorFrom="#4379F2"
                colorTo="#C3FF93"
              />
            </Button>
            <RainbowButton onClick={() => router.push("/signup")}>
              <p className=" text-background">Sign up</p>
            </RainbowButton>
          </div>
        </div>
        <div className={`max-md:w-full`}>
          <Image isBlurred src="/Images/circlePizza.png" width={650} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
