export interface Project {
  name: string;
  period: string;
  summary: string;
  stack: string[];
  link?: string;
  backgroundImage?: string;
}

export const projects: Project[] = [
  {
    name: "TrustyTech",
    period: "Apr 2024 — Mar 2026",
    summary:
      "Proxy services rating platform built with React, TypeScript, and custom SSR, focused on SEO, and dynamic data rendering.",
    stack: [
      "React",
      "TypeScript",
      "MUI",
      "Redux",
      "React Query",
      "Zustand",
      "Styled Components",
      "Vite",
      "Java",
    ],
    backgroundImage: "/images/trustytech.webp",
  },
  {
    name: "Polinivo",
    period: "Nov 2022 — Apr 2024",
    summary:
      "Software solution for the polymer industry with responsive, accessible interfaces and interactive data visualization for desktop and mobile.",
    stack: ["React", "TypeScript", "MUI", "Node.js", "CSS", "SCSS", "Chart.js"],
        backgroundImage: "/images/polinivo.webp",
  },
  {
    name: "FTL Website",
    period: "Aug 2022 — Apr 2024",
    summary:
      "Company website built with Next.js featuring custom animations, interactive UI elements, and a focus on smooth user experience.",
    stack: ["Next.js", "React", "SASS", "REST API"],
  },
  {
    name: "FTL Internal CRM",
    period: "Aug 2022 — Apr 2024",
    summary:
      "Internal CRM system with interactive frontend features, reusable components, and integrations with REST and GraphQL APIs.",
    stack: [
      "React",
      "Redux Toolkit",
      "React Query",
      "SASS",
      "Storybook",
      "GraphQL",
      "Ruby on Rails",
    ],
  },
];
