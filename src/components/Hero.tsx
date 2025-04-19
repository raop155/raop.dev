"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import FadeInOnScroll from "./FadeInOnScroll";
import { heroFeatures } from "@/lib/hero";
import { setupParticleAnimation } from "@/lib/animations/particleAnimation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cleanup = setupParticleAnimation(canvas);
    return cleanup;
  }, []);

  const scrollToProjects = () => {
    router.push("#projects");
  };

  return (
    <section className="hero-bg py-24 md:py-24 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary-900"></div>
        <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30"></div>
      </div>

      <FadeInOnScroll className="container px-4 md:px-6 z-10 w-full mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="py-2 px-4 animate-pulse">
              Full Stack Developer & Software Engineer
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">I build for the web</span>
              <span className="gradient-text text-glow animate-gradient"></span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Building transformative solutions with cutting-edge technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="group"
                onClick={scrollToProjects}
                asChild
              >
                <Link
                  href="#projects"
                  className={`text-sm font-medium transition-all duration-300 relative`}
                >
                  View Projects
                  <ArrowRight
                    className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1`}
                  />
                </Link>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 hover:shadow-glow-md transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-base mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30"
          onClick={scrollToProjects}
        >
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">Scroll to projects</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
