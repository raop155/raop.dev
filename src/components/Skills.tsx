"use client";

import FadeInOnScroll from "./FadeInOnScroll";
import SkillCard from "./SkillCard";
import { skillCategories } from "@/lib/skills";

const Skills = () => {
  return (
    <FadeInOnScroll>
      <section id="skills" className="py-20 bg-background">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="mb-12 flex flex-col items-center text-center reveal">
            <h2 className="text-3xl font-bold tracking-tight mb-1">Skills</h2>
            <p className="text-muted-foreground max-w-[600px]">
              My technical toolkit and areas of expertise in web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                title={category.title}
                icon={<category.icon className="h-5 w-5 text-primary" />}
                skills={category.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Skills;
