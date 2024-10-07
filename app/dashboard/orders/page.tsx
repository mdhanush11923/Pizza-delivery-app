"use client";

import { Grid, Skeleton, Container } from "@mantine/core";
import { Image } from "@nextui-org/image";

const child = <Skeleton className="min-w-80" height={140} radius="md" animate={false} />;

export default function GridAsymmetrical() {
  return (
    <Container mx={90} fluid className="bg-[purple]">
      <Grid grow gutter="xl">
        <Grid.Col span={5}>
          <Container className="bg-[red] h-full">
            <div className="gap-4">
              <div className="flex gap-10"></div>
              <h1 className="scroll-m-20 mb-10 mt-10 font-black tracking-tight text-3xl lg:text-5xl">
                Delicious Pizza Delivered Right to Your Doorstep
              </h1>
              <h2 className="scroll-m-20 pb-2 text-lg tracking-tight mt-6 lg:text-xl">
                Craving pizza? We&apos;ve got you covered!{" "}
              </h2>
            </div>
          </Container>
        </Grid.Col>
        <Grid.Col span={5}>
          <div className="min-w-80">
            <Image isBlurred src="/Images/circlePizza.png" />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
