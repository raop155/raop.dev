"use client";

import { Button } from "./ui/button";
import FadeInOnScroll from "./FadeInOnScroll";
import { socialLinks } from "@/lib/social-links";

const Contact = () => {
  return (
    <FadeInOnScroll>
      <section id="contact" className="py-20 bg-foreground/5 pb-28">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-1">
              Let&apos;s Work Together
            </h2>
            <p className="text-muted-foreground mb-12">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <Button key={link.name} size="lg" variant="secondary" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5 mr-2" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Contact;
