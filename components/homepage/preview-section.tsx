import Link from "next/link";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PREVIEWS = [
  {
    title: "Characters",
    description:
      "Browse Heroes, Outlaws, and Monsters with full stats, class, and skills.",
    href: "/characters",
  },
  {
    title: "Game Features",
    description:
      "Clear explanations of in-game mechanics like Mastery, written for newcomers.",
    href: "#",
  },
  {
    title: "Guides",
    description:
      "Beginner-friendly walkthroughs and topic guides to help you get started and improve.",
    href: "#",
  },
];

export function PreviewSection() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-3">
        {PREVIEWS.map((preview) => (
          <Card key={preview.title}>
            <CardHeader>
              <CardTitle>{preview.title}</CardTitle>
              <CardDescription>{preview.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                href={preview.href}
                className="text-sm font-medium text-primary hover:underline"
              >
                View all
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
