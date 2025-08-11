import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ingredients } from "./ingredients";
import { HarmfulChemicals } from "./stats";

export default function Analysis() {
  return (
    <Card className="w-[100%] md:w-[70%] justify-center mt-0 md:mt-4 border-transparent shadow-none dark:border-transparent">
      <CardHeader className="text-2xl text-center md:text-3xl font-bold pt-6">
        <CardTitle>The Core Features</CardTitle>
        <CardDescription className="text-center">
          Detailed Report on Product
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 pt-0 md:pt-6 justify-center">
        <HarmfulChemicals />
        <Ingredients />
      </CardContent>
    </Card>
  );
}
