import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Your complete guide to{" "}
        <span className="rounded bg-opm-yellow px-2 text-opm-yellow-foreground">
          OPM: The Strongest
        </span>
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Character stats, in-game mechanics explained, and beginner-friendly
        guides — all in one place, in English and Vietnamese.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a href="#" className={buttonVariants({ size: "lg" })}>
          Explore Characters
        </a>
        <a
          href="#"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Beginner Guide
        </a>
      </div>
    </section>
  );
}
