"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Awards } from "@/components/Awards";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
