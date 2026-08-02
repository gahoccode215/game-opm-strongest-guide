import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FACTION_INDICATOR_CLASSNAME,
  FACTIONS,
  RARITY_BADGE_CLASSNAME,
} from "@/lib/characters";
import { cn } from "@/lib/utils";
import type { Character } from "@/types/character";

export function CharacterCard({ character }: { character: Character }) {
  const factionLabel = FACTIONS.find(
    (faction) => faction.value === character.faction
  )?.label;

  return (
    <Link href={`/characters/${character.slug}`} className="block">
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardContent className="flex justify-center pt-(--card-spacing)">
          <Image
            src={character.image}
            alt={character.name}
            width={96}
            height={96}
            className="size-24 rounded-full"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{character.name}</CardTitle>
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge className={RARITY_BADGE_CLASSNAME[character.rarity]}>
              {character.rarity}
            </Badge>
            <Badge variant="secondary">{character.class}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex items-center gap-1.5 pb-(--card-spacing) text-sm text-muted-foreground">
          <span
            className={cn(
              "size-2 rounded-full",
              FACTION_INDICATOR_CLASSNAME[character.faction]
            )}
          />
          {factionLabel}
        </CardContent>
      </Card>
    </Link>
  );
}
