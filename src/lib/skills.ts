import { Braces, Code, Layers, Terminal } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Braces,
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "GraphQL",
      "REST API",
      "PHP",
    ],
  },
  {
    title: "Database",
    icon: Layers,
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    icon: Code,
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Cypress"],
  },
]; 