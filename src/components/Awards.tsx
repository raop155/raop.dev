import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { awards } from "@/lib/awards";
import FadeInOnScroll from "./FadeInOnScroll";

export function Awards() {
  return (
    <FadeInOnScroll>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="flex justify-center gap-8">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 max-w-lg"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl font-semibold mb-2">
                      {award.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {award.year}
                    </p>
                    <p className="text-muted-foreground mb-2">
                      {award.organization}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {award.description}
                    </p>
                    {award.videoUrl && (
                      <Button
                        variant="secondary"
                        className="flex items-center gap-2"
                        onClick={() => window.open(award.videoUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" /> See video
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
