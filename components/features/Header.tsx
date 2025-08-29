"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../shared/constants/navLinks";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="mt-[3.75rem] flex-wrap flexBetween font-space padding-container">
      <Image src="/logo.png" alt="logo" width={219.54} height={56} />

      <div className="hidden md:flex gap-2.5 lg:gap-10 items-center">
        <ul className="flex gap-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-xl leading-normal font-normal hover:underline"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="font-space btn border-black bg-transparent"
        >
          Request a quote
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="font-space border-black bg-transparent mt-4"
              >
                Request a quote
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
