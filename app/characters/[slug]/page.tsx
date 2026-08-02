import { notFound } from "next/navigation";

import characters from "@/data/characters.json";
import type { Character } from "@/types/character";

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = (characters as Character[]).find(
    (item) => item.slug === slug
  );

  if (!character) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">{character.name}</h1>
      <p className="mt-2 text-muted-foreground">
        Full character detail page coming soon.
      </p>
    </div>
  );
}
