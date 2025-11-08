"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggler() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isLight = currentTheme === "light";

  return (
    <Button
      variant="outline"
      size="icon-sm"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="w-10 h-10 rounded-full hover:cursor-pointer flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isLight ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
