import { ExperienceDataType } from '@/views/CVPage/types';

const experiences: ExperienceDataType[] = [
  {
    title: 'Full Stack Developer',
    company: 'Kelas Fitness',
    period: 'May 2022 - Jul 2025',
    responsibilities: [
      'Architected and shipped 10+ major features in the web & mobile app, serving 5K+ active users.',
      'Built and maintained automated testing pipeline (E2E + unit), implemented AHA testing principle',
      'Introduced gamification concepts to improve team OKRs and drive measurable outcomes.',
      'Introduced and enforced SOLID principles across the codebase, resulting in cleaner architecture, improved scalability, and reduced tech debt',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'PT. Nirvana Indonesia Yoga',
    period: 'Jun 2022 - Jul 2025',
    responsibilities: [
      'Led the development of responsive and accessible web interfaces, improving conversion on key pages by 42%.',
      'Worked closely with designers and stakeholders to rebuild legacy flows into modern, mobile-friendly experiences.',
      'Delivered performance optimizations that decreased average load time by 50%.',
      'Integrated user feedback loops and A/B testing for continuous UX improvements.',
      'Mentored junior developers through pair programming and code reviews using GitLab CI, fostering skill development and improving team productivity',
    ],
  },
  {
    title: 'Mobile App Developer',
    company: 'PT. Nirvana Indonesia Yoga',
    period: 'Jun 2022 - Jul 2025',
    responsibilities: [
      'Developed cross-platform mobile app using React Native, enhancing booking experience for users and improving user satisfaction',
      'Implemented REST API integrations, push notifications, and offline functionality, improving app responsiveness and user engagement',
      'Refactored key app modules, reducing crash rates by 60% and improving App Store rating from 3.9 to 4.2.',
      'Acted as bridge between design and backend teams, ensuring cohesive app experience.',
    ],
  },
  {
    title: 'Mentor',
    company: 'Skilvul',
    period: 'Feb 2022 - Sep 2025',
    responsibilities: [
      'Promoted from Learning Support Assistant after consistently achieving 95% learner satisfaction rate.',
      'Facilitated 100+ live mentoring sessions in Skilvul Discord community.',
      'Designed gamified learning paths using challenge-based approaches, improving mentee engagement by 30%.',
      'Co-led technical workshops and collaborated with instructors to evolve curriculum for frontend and backend tracks.',
    ],
  },
  {
    title: 'Learning Support Assistant',
    company: 'Skilvul',
    period: 'Aug 2021 - Feb 2022',
    responsibilities: [
      'Supported 200+ beginner students in mastering HTML, CSS, and JavaScript fundamentals.',
      'Provided real-time support through forum, Discord, and one-on-one feedback sessions.',
      'Played a key role in helping cohorts achieve 90%+ project submission rate through structured guidance and proactive check-ins.',
      "Recognized through the company's RARE Performance program for representing the Learning Team",
    ],
  },
];

export default experiences;
