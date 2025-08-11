"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { item: "Bromate", contains: 8, fair: 5 },
  { item: "Pot", contains: 5.3, fair: 4.1 },
  { item: "BHA", contains: 4, fair: 2.6 },
  { item: "Sod", contains: 9.9, fair: 6.6 },
  { item: "BVO", contains: 12, fair: 10.3 },
  { item: "Para", contains: 3.8, fair: 3 },
  { item: "Artidyes", contains: 12.4, fair: 12 },
];

const chartConfig = {
  contains: {
    label: "contains",
    color: "var(--chart-1)",
  },
  fair: {
    label: "fair",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function Ingredients() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="items-center pb-0">
        <CardTitle>Ingredient - Analysis</CardTitle>
        <CardDescription>
          Check Excess Quantities of Harmful Ingredients
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="item"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <Bar
              dataKey="contains"
              stackId="a"
              fill="var(--color-contains)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="fair"
              stackId="a"
              fill="var(--color-fair)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                        {value}
                        <span className="text-muted-foreground font-normal">
                          %
                        </span>
                      </div>
                      {/* Add this after the last item */}
                      {index === 1 && (
                        <div className="text-foreground mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium">
                          Excess
                          <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                            {(
                              item.payload.contains - item.payload.fair
                            ).toFixed(2)}
                            <span className="text-muted-foreground font-normal">
                              %
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pb-4">
        <div className="flex items-center gap-2 leading-none font-medium text-center">
          🚫 Contains 7 harmful ingredients
        </div>
        <div className="text-muted-foreground leading-none text-center">
          These ingredients are in excess than prescribed
        </div>
      </CardFooter>
    </Card>
  );
}
