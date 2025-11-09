import React from "react";
import { Button } from "./ui/button";
import { ThemeToggler } from "./theme-toggler";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 ">
      <div className="mx-auto max-w-3xl px-4 md:px-5 py-4 md:py-5 bg-background border border-border/80 h-20 ">
        <div className="flex items-center justify-between gap-4">
          <p className="font-serif text-2xl">Bhupen</p>
          <div className="flex gap-3 items-center">
            <Link href="https://cal.com/bhupen/30min" target="_blank">
              <Button
                className="cursor-pointer flex items-center gap-2"
                size="lg"
              >
                <img src="./bhupen-pfp.svg" alt="Profile" className="w-6 h-6" />
                Book a Call
              </Button>
            </Link>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
