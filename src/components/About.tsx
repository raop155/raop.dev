"use client";

import FadeInOnScroll from "./FadeInOnScroll";
import { Button } from "./ui/button";

const About = () => {
  return (
    <FadeInOnScroll>
      <section id="about" className="py-20 bg-background">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight w-full text-center mb-12">
                About Me
              </h2>
              <p className="text-muted-foreground">
                I&apos;m a well-organized, responsible, and solutions-driven
                Software Engineer with a strong passion for the full Front-end
                spectrum and solid Full-stack capabilities. With deep expertise
                in JavaScript, TypeScript, React (Next.js), and Node
                (Nest.js/Express), I&apos;ve built and optimized applications
                across fintech, healthcare, telecom, and more.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 italic text-lg text-muted-foreground">
                &ldquo;Experts are not born — they emerge from those willing to
                learn, adapt, and overcome.&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" asChild>
                  <a
                    href="/assets/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a
                    href="/assets/resume.pdf"
                    download="Ricardo Olarte Resume.pdf"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default About;
