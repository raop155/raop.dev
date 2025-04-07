import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  delay?: number;
}

export default function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
