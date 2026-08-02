import Link from "next/link";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_LINKS = [
  { label: "Characters", href: "#" },
  { label: "Game Features", href: "#" },
  { label: "Guides", href: "#" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          OPM: <span className="text-opm-red">The Strongest</span> Guide
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  href={link.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
