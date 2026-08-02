"use client";

import { useState } from "react";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";

const LANGUAGES = ["EN", "VI"] as const;

export function LanguageToggle() {
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("EN");

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Switch language"
      onClick={() =>
        setLanguage((current) => (current === "EN" ? "VI" : "EN"))
      }
    >
      <Languages className="size-4" />
      {language}
    </Button>
  );
}
