"use client";

import { Github, ExternalLink } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import FadeInOnScroll from "./FadeInOnScroll";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <FadeInOnScroll className="w-full">
      <section id="projects" className="py-20 bg-surface w-full">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="mb-12 flex flex-col items-center text-center reveal">
            <h2 className="text-3xl font-bold tracking-tight mb-1">Projects</h2>
            <p className="text-muted-foreground max-w-[600px]">
              A collection of my work and technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="pt-0 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    {project.videoUrl && project.videoUrl.length > 0 && (
                      <div className="flex flex-wrap gap-2 justify-end">
                        {project.videoUrl.map((videoUrl, videoIndex) => (
                          <Button
                            key={videoIndex}
                            variant="secondary"
                            size="sm"
                            asChild
                          >
                            <a
                              href={videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect
                                  x="1"
                                  y="5"
                                  width="15"
                                  height="14"
                                  rx="2"
                                  ry="2"
                                ></rect>
                              </svg>
                              See Video {videoIndex + 1}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-4 flex-wrap">
                      {project.demoUrl && (
                        <Button variant="secondary" size="sm" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 transition-transform duration-300" />
                            View Project
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button variant="secondary" size="sm" asChild>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 transition-transform duration-300" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Projects;
