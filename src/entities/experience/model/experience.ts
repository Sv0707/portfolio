export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: 'Proxy Seller',
    role: 'Frontend Developer',
    period: 'Apr 2024 — Present',
    points: [
      'Implemented SSR and hydration logic to balance SEO requirements and client-side interactivity.',
      'Delivered new UI features and improved overall product usability and visual consistency.',
      'Refactored the codebase to improve maintainability, readability, and application stability.',
      'Collaborated with backend developers to align API contracts and improve data consistency.'
    ]
  },
  {
    company: 'FTL Kyiv',
    role: 'Frontend Developer',
    period: 'Aug 2022 — Apr 2024',
    points: [
      'Contributed to the development of a production-ready application from concept to release.',
      'Migrated projects to Next.js 14, modernizing frontend architecture and improving performance.',
      'Introduced Storybook to standardize and scale UI component development.',
      'Improved SEO and application performance using technical optimization best practices.'
    ]
  },
  {
    company: 'Unicorn UA',
    role: 'Junior Full Stack Developer',
    period: 'Apr 2022 — Jun 2022',
    points: [
      'Developed a project using a custom component library and backend framework.',
      'Implemented backend functionality and worked with databases.'
    ]
  }
];
