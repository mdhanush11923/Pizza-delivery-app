'use client'

import React from "react";
import { Link } from "@nextui-org/react";
import { Divider, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { title } from "./primitives";
import PizzaItem from "./PizzaItem";
import TextRevealByWord from "./ui/text-reveal";
import ShimmerButton from "./ui/shimmer-button";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <div
        className={`items-center justify-center h-2/6 flex max-md:flex-wrap px-16 gap-8 lg:px-24`}
      >
        <div className="max-w-lg gap-4">
          <h1 className="scroll-m-20 mb-10 mt-3 font-black tracking-tight text-3xl lg:text-5xl">
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
          <div className="flex flex-col gap-4 mt-10">
            <Button
              fullWidth
              className="h-14 w-72 bg-foreground text-background"
              color="success"
              radius="sm"
              size="lg"
              // href="/pizza-delivery/dashboard/menu"
              // as={Link}
            >
              Explore Menu
            </Button>
            <Button
              fullWidth
              className="h-14 w-72"
              color="warning"
              variant="ghost"
              radius="sm"
              size="lg"
              // href="/pizza-delivery/dashboard/custom"
              // as={Link}
            >
              Custom Pizza
            </Button>
          </div>
        </div>
        <div className={`max-w-[650px]`}>
          <Image isBlurred src="/Images/circlePizza.png" alt="pizza image" />
        </div>
      </div>
      <Divider className="my-16" />

      <TextRevealByWord text="Our Featured Pizzas: Handpicked Favorites You’ll Love" />
      <h1 className="m-8 text-4xl font-poppins font-extrabold tracking-tight text-center lg:text-4xl xl:text-5xl">
        Featured Pizzas
      </h1>
      <div className="flex flex-wrap gap-20 justify-center mb-20 items-center">
        <PizzaItem color="bg-limefrost" id={0} />
        <PizzaItem color="bg-lemonburst" id={4} />
        <PizzaItem color="bg-limefrost" id={5} />
      </div>
    </div>
  );
}
