// -----------------------------------------------------------------------------
// Your experience / timeline. Edit, add, or remove entries freely.
// Newest first reads best.
// -----------------------------------------------------------------------------

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: '2023 — Present',
    title: 'Independent Photographer',
    org: 'Freelance',
    description:
      'Commissioned portraits, editorial assignments, and ongoing personal projects for clients and publications.',
  },
  {
    period: '2022',
    title: 'Group Exhibition — "Quiet Frames"',
    org: 'Local Gallery',
    description:
      'Selected works from the Still Light series shown alongside emerging photographers.',
  },
  {
    period: '2021',
    title: 'Editorial Contributor',
    org: 'Independent Magazine',
    description:
      'Photo stories on travel and street life featured across print and digital issues.',
  },
  {
    period: '2020',
    title: 'Began Photographing Seriously',
    org: 'Self-taught',
    description:
      'Started a daily practice studying light, composition, and the craft of the still image.',
  },
];

// Optional: tools / gear you work with.
export const tools = ['35mm film', 'Digital mirrorless', 'Natural light', 'Darkroom & digital editing'];
