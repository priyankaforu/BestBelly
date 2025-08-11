import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ModeToggle } from "./dark-mode";
import { BookText, Linkedin, Mail } from "lucide-react";
export default function Header() {
  return (
    <NavigationMenu className="p-10 md:py-10 flex flex-col  md:flex-row space-y-2 items-start md:justify-between max-w-5xl mx-auto">
      <NavigationMenuList className="font-bold text-4xl">
        BestBelly
      </NavigationMenuList>
      <NavigationMenuList className="flex items-center gap-4">
        <NavigationMenuItem className="cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <BookText className="size-7" />
            </TooltipTrigger>
            <TooltipContent>Blog</TooltipContent>
          </Tooltip>
        </NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <Linkedin className="size-7" />
            </TooltipTrigger>
            <TooltipContent>Linkedin</TooltipContent>
          </Tooltip>
        </NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <Mail className="size-7" />
            </TooltipTrigger>
            <TooltipContent>contact</TooltipContent>
          </Tooltip>
        </NavigationMenuItem>

        <NavigationMenuItem className="md:pl-8">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
