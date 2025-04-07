"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { socialLinks } from "@/lib/social-links";
import { navLinks } from "@/lib/navigation";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;
      let activeSectionId = "";

      sections.forEach((section) => {
        const sectionEl = section as HTMLElement;
        const sectionTop =
          sectionEl.getBoundingClientRect().top + scrollPosition;
        const sectionId = sectionEl.getAttribute("id") || "";

        if (scrollPosition >= sectionTop - sectionEl.clientHeight * 0.5) {
          activeSectionId = sectionId;
        }
      });

      if (activeSectionId) {
        setActiveSection(activeSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-background/80 backdrop-blur-md py-2 shadow-sm`}
    >
      <div className="container grid grid-cols-3 h-16 items-center px-4 md:px-6 w-full mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <Code className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="text-lg font-bold gradient-text">
            Ricardo Olarte
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 relative ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex md:hidden">{/* Empty space */}</div>

        <div className="hidden md:flex items-center gap-4 justify-end">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden justify-self-end">
            <Button variant="ghost" size="icon" className="group">
              <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-primary/10 bg-background/95 backdrop-blur-md"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-2 pt-10 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
