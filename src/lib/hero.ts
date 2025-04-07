import { Braces, Code, Layers, Terminal } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface HeroFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const heroFeatures: HeroFeature[] = [
  {
    title: "Clean Code",
    description: "Elegant, scalable, and maintainable",
    icon: Braces,
  },
  {
    title: "Performance",
    description: "Lightning-fast and rock-solid",
    icon: Terminal,
  },
  {
    title: "Modern UI",
    description: "Sleek, intuitive, and engaging",
    icon: Layers,
  },
  {
    title: "Innovation",
    description: "Future-ready solutions",
    icon: Code,
  },
]; 