export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  videoUrl?: string[];
}

export const projects: Project[] = [
  {
    title: "WormholeScan",
    description: "Blockchain explorer and analytics platform for the Wormhole protocol, providing real-time monitoring and insights for cross-chain transactions and bridge activities.",
    image: "/assets/wormholescan.io.png",
    tags: ["React", "TypeScript", "Next.js", "Web3", "Blockchain", "Ether.js", "Radix UI", "ApexCharts", "Recoil"],
    demoUrl: "https://wormholescan.io/",
  },
  {
    title: "Llavero Wallet",
    description: "My Hardware Wallet as MY Service",
    image: "/assets/llavero.png",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Vercel", "Ether.js", "AWS", "Github", "Electron", "Shadcn UI"],
    demoUrl: "https://llavero.vercel.app/",
  },
  {
    title: "Work Café by Santander",
    description:
      "Biometric recognition and profiling system for full branch flow control, operational load optimization, and automated transactional processes.",
    image: "/assets/workcafe.JPG",
    tags: ["React", "Typescript", "JavaScript", "Node.js", "Electron", "PHP", "MySQL", "ActionScript 3", "Tailwind", "Github", "AWS", "Recharts", "Jotai"],
    videoUrl: ["https://vimeo.com/301629791", "https://vimeo.com/202974892"],
  },
  {
    title: "Digitalization of CACs Claro / Jockey Plaza",
    description:
      'Streamline and enhance the pre-sale process, improving customer experience and efficiency, led by PX Group.',
    image: "/assets/claro.JPG",
    tags: ["React", "Typescript", "JavaScript", "Node.js", "Electron", "PHP", "MySQL", "ActionScript 3",],
    videoUrl: ["https://vimeo.com/183005286"],
  },
  {
    title: "Arturo Prat Infographic",
    description:
      "Infographic for Arturo Prat, a Chilean military.",
    image: "/assets/wall-prat.JPG",
    tags: ["React", "JavaScript", "hammerjs", "react-use-gesture"],
    codeUrl: "https://github.com/raop155/santander-wall-touch-prat",
  },

]; 