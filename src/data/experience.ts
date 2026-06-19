// -----------------------------------------------------------------------------
// Experience / timeline. Newest first.
// -----------------------------------------------------------------------------

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: '2026',
    title: 'Group Exhibition — Humming of My Ribs',
    org: 'Red Eye Gallery, Rhode Island School of Design',
    description:
      'Selected work shown in a group exhibition at RISD\'s Red Eye Gallery.',
  },
  {
    period: '2025',
    title: 'Teaching Assistant — Intro to Darkroom',
    org: 'Rhode Island School of Design',
    description:
      'Supported Henry Horenstein\'s Intro to Darkroom course: assisted students with traditional darkroom techniques, maintained equipment, and provided one-on-one feedback on technical and artistic development.',
  },
  {
    period: '2024 — Present',
    title: 'Librarian Assistant',
    org: 'Fleet Library, Rhode Island School of Design',
    description:
      'Cataloguing and organizing library resources; circulation desk; helping visitors locate research materials; thematic book installations for students and faculty.',
  },
  {
    period: '2024',
    title: 'Counselling Psychology Assistant',
    org: 'Ders Evi',
    description:
      'Trained in psychological support for students aged 14–18. Assisted counselors with group workshops on stress, exam anxiety, and motivation; provided supervised one-on-one peer guidance, including creative therapy techniques.',
  },
  {
    period: '2023 — 2024',
    title: 'President, Photo Society Club',
    org: 'Rhode Island School of Design',
    description:
      'Led the student-run photography club: chaired meetings, guided discussions on contemporary practice, organized group trips to Boston and Newport, and built interdisciplinary participation across departments.',
  },
  {
    period: '2023',
    title: 'Teaching Assistant',
    org: 'Rhode Island School of Design',
    description:
      'Provided academic and studio support to students, facilitating critiques and supervisions.',
  },
  {
    period: '2022 — 2026',
    title: 'BFA in Photography',
    org: 'Rhode Island School of Design',
    description:
      'GPA 3.74. Semester Honors for academic excellence — Fall 2022, Fall 2023, Fall 2024, and Spring 2025.',
  },
  {
    period: '2021',
    title: 'Professional Development',
    org: 'Harvard Division of Continuing Education',
    description: 'Summer program in continuing education.',
  },
];
