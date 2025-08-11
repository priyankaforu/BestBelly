"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useState, useEffect } from "react";

export const description = "A radial chart with a custom shape";

const chartData = [
  { browser: "safari", Harmful: 60, fill: "var(--color-safari)" },
];

const chartConfig = {
  Harmful: {
    label: "Harmful",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function HarmfulChemicals() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Harmful ingredients</CardTitle>
        <CardDescription>scan the ingredients</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[152px] md:max-h-[230px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={220}
            innerRadius={isMobile ? 50 : 80}
            outerRadius={isMobile ? 90 : 140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={isMobile ? [56, 44] : [86, 74]}
            />
            <RadialBar dataKey="Harmful" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl md:text-4xl font-bold"
                        >
                          {chartData[0].Harmful.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Harmful
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pb-4">
        <div className="flex items-center gap-2 leading-none font-medium text-center">
          🙂 Please use moderately
        </div>
        <div className="text-muted-foreground leading-none text-center">
          Consume not more than twice in a month
        </div>
      </CardFooter>
    </Card>
  );
}
