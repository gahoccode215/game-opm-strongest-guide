"use client";

import { useState } from "react";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";

const LANGUAGES = ["EN", "VI"] as const;

export function LanguageToggle() {
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>(
    LANGUAGES[0]
  );

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Switch language"
      onClick={() =>
        setLanguage(
          (current) =>
            LANGUAGES[(LANGUAGES.indexOf(current) + 1) % LANGUAGES.length]
        )
      }
    >
      <Languages className="size-4" />
      {language}
    </Button>
  );
}
