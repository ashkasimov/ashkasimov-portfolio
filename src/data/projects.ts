// -----------------------------------------------------------------------------
// Your photo galleries. Generated from your masters, then safe to edit by hand.
//
// Each project is a SEQUENCE you scroll through. On project pages the gallery
// scrolls horizontally; `size` controls each image's relative height/emphasis:
//   size:  'full' | 'large' | 'medium' | 'small-plus' | 'small' | 'xsmall'
//   space: 'wide' | 'extra-wide' — extra left margin before this panel (pacing pause)
//   align: 'left' | 'center' | 'right'   (used on the vertical homepage)
//
// To reorder, just move lines around. To move a photo to another project,
// cut its { ... } line into that project's photos array.
// -----------------------------------------------------------------------------

export type PhotoSize = 'full' | 'large' | 'medium' | 'small-plus' | 'small' | 'xsmall';
export type PhotoAlign = 'left' | 'center' | 'right';
export type PhotoAlignV = 'bottom' | 'center';
export type PhotoSpace = 'wide' | 'extra-wide';

export type Photo = {
  src: string;
  alt: string;
  size?: PhotoSize;
  align?: PhotoAlign;
  alignV?: PhotoAlignV;
  caption?: string;
  // When true, this image sits tight against the PREVIOUS one, so the two read
  // as a diptych (a reduced gap between them in the horizontal sequence).
  pair?: boolean;
  // Extra breathing room before this panel (does not apply when pair is true).
  space?: PhotoSpace;
  // Vertical nudge within the track (e.g. '-12vh') for optical diptych alignment.
  offsetY?: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  cover: string;
  photos: Photo[];
  /** When true, omitted from Work list and project pages (data/files kept). */
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'the-mindhouse',
    title: 'The Mindhouse',
    year: '2024–2026',
    category: '',
    summary:
      'A walk through the rooms of the mind — the threshold where the outer world is taken in and warped into desire, fear, and fantasy. What we live is filtered through the rooms of our mind we have already built.',
    cover: '/photos/the-mindhouse/01-glass.jpg',
    photos: [
      { src: '/photos/the-mindhouse/01-glass.jpg', alt: 'The Mindhouse — glass and ruin', size: 'full' },
      { src: '/photos/the-mindhouse/02-face-041.jpg', alt: 'The Mindhouse — a face, left panel', size: 'small' },
      { src: '/photos/the-mindhouse/03-face-7.jpg', alt: 'The Mindhouse — a face, right panel', size: 'small', pair: true },
      { src: '/photos/the-mindhouse/04-blindfold-2.jpg', alt: 'The Mindhouse — blindfolded figure', size: 'full' },
      { src: '/photos/the-mindhouse/05-dsc6786-1.jpg', alt: 'The Mindhouse — portrait', size: 'medium' },
      { src: '/photos/the-mindhouse/06-insects-1.jpg', alt: 'The Mindhouse — the marked wall', size: 'medium' },
      { src: '/photos/the-mindhouse/07-L3A5701.jpg', alt: 'The Mindhouse — the bed, left panel', size: 'full' },
      { src: '/photos/the-mindhouse/08-L3A5746.jpg', alt: 'The Mindhouse — the bed, right panel', size: 'small', pair: true },
      { src: '/photos/the-mindhouse/09-dsf0265.jpg', alt: 'The Mindhouse — threshold in the ruin', size: 'small' },
      { src: '/photos/the-mindhouse/10-dsf3109-1.jpg', alt: 'The Mindhouse — figure in the woods', size: 'full' },
      { src: '/photos/the-mindhouse/11-9.jpg', alt: 'The Mindhouse — the empty room, left panel', size: 'medium' },
      { src: '/photos/the-mindhouse/12-45f9137b-rw.jpg', alt: 'The Mindhouse — the body, right panel', size: 'medium', pair: true },
      { src: '/photos/the-mindhouse/13-L3A5754.jpg', alt: 'The Mindhouse — combing hair', size: 'small' },
      { src: '/photos/the-mindhouse/14-hair.jpg', alt: 'The Mindhouse — hair', size: 'full' },
      { src: '/photos/the-mindhouse/15-dscf4617.jpg', alt: 'The Mindhouse — the weight of the body', size: 'medium' },
      { src: '/photos/the-mindhouse/16-dsf0116.jpg', alt: 'The Mindhouse — a closing room', size: 'small' },
    ],
  },
  {
    slug: 'there-is-a-field',
    title: 'There is a field, I\'ll meet you there',
    year: '2025–2026',
    category: '',
    summary:
      'In a field, against water, under open sky, landscape takes the body in without requiring it to be something more. Embraced in the environment it belongs to, the body opens up its deeper and truer layers.',
    cover: '/photos/there-is-a-field/01-8.jpg',
    photos: [
      { src: '/photos/there-is-a-field/01-8.jpg', alt: 'Interior Landscape — threshold', size: 'small' },
      { src: '/photos/there-is-a-field/02-45fd39df-f21e-453c-abbc-cfc707f6f936-rw.jpg', alt: 'Interior Landscape — the field, left panel', size: 'full' },
      { src: '/photos/there-is-a-field/03-the-sea.jpg', alt: 'Interior Landscape — the sea, right panel', size: 'full', pair: true },
      { src: '/photos/there-is-a-field/04-dscf3760.jpg', alt: 'Interior Landscape — the figure as land', size: 'xsmall', space: 'wide' },
      { src: '/photos/there-is-a-field/05-l1002634-1.jpg', alt: 'Interior Landscape — horizon and land', size: 'full' },
      { src: '/photos/there-is-a-field/06-dscf5962-2-edit.jpg', alt: 'Interior Landscape — the dissolving body', size: 'small', space: 'wide' },
      { src: '/photos/there-is-a-field/07-carrpond-mitchell-seal.jpg', alt: 'Interior Landscape — body in water, left panel', size: 'medium', space: 'extra-wide' },
      { src: '/photos/there-is-a-field/08-mitch-with-weird-hand.jpg', alt: 'Interior Landscape — body in water, right panel', size: 'medium', pair: true },
      { src: '/photos/there-is-a-field/09-dsf0124-edit.jpg', alt: 'Interior Landscape — skin and weight', size: 'large', space: 'extra-wide' },
      { src: '/photos/there-is-a-field/10-l1002367-1.jpg', alt: 'Interior Landscape — open country, left panel', size: 'medium', space: 'extra-wide' },
      { src: '/photos/there-is-a-field/11-kids-running-4.jpg', alt: 'Interior Landscape — figures in vast space, right panel', size: 'medium', pair: true },
      { src: '/photos/there-is-a-field/12-dsf0158-1.jpg', alt: 'Interior Landscape — land under open sky', size: 'full', space: 'wide' },
      { src: '/photos/there-is-a-field/13-000068230005.jpg', alt: 'Interior Landscape — late light, left panel', size: 'xsmall' },
      { src: '/photos/there-is-a-field/14-img-1072.jpg', alt: 'Interior Landscape — a closing horizon, right panel', size: 'xsmall', pair: true },
      { src: '/photos/there-is-a-field/15-dsf8551.jpg', alt: 'Interior Landscape — the field returns', size: 'full', space: 'wide' },
      { src: '/photos/there-is-a-field/16-20250221-105-nr.jpg', alt: 'Interior Landscape — held in the open', size: 'small' },
    ],
  },
  {
    slug: 'home-sweet-home',
    title: 'Home, Sweet Home',
    year: '2022–2025',
    category: '',
    summary:
      'In 2022 I moved to Baku, Azerbaijan — my family\'s city, and in many ways a foreign one. Raised in Russia and displaced by war, I began to photograph extensively: the camera let me be witness and explorer at once, opening access to a culture through its streets, its people, and its taste.',
    cover: '/photos/home-sweet-home/01-20250221-037-1.jpg',
    photos: [
      { src: '/photos/home-sweet-home/01-20250221-037-1.jpg', alt: 'Home, Sweet Home — 1', size: 'large' },
      { src: '/photos/home-sweet-home/02-20250221-056-1.jpg', alt: 'Home, Sweet Home — 2', size: 'full' },
      { src: '/photos/home-sweet-home/03-20250221-011-1.jpg', alt: 'Home, Sweet Home — 3', size: 'medium' },
      { src: '/photos/home-sweet-home/04-20250221-013-1.jpg', alt: 'Home, Sweet Home — 4', size: 'large' },
      { src: '/photos/home-sweet-home/05-20250221-014-1.jpg', alt: 'Home, Sweet Home — 5', size: 'small' },
      { src: '/photos/home-sweet-home/06-l1002812.jpg', alt: 'Home, Sweet Home — 6', size: 'full' },
      { src: '/photos/home-sweet-home/07-l1002868.jpg', alt: 'Home, Sweet Home — 7', size: 'medium' },
      { src: '/photos/home-sweet-home/08-l1002979.jpg', alt: 'Home, Sweet Home — 8', size: 'large' },
      { src: '/photos/home-sweet-home/09-l1002986.jpg', alt: 'Home, Sweet Home — 9', size: 'medium' },
      { src: '/photos/home-sweet-home/10-l1002987.jpg', alt: 'Home, Sweet Home — 10', size: 'small' },
      { src: '/photos/home-sweet-home/11-l1003009.jpg', alt: 'Home, Sweet Home — 11', size: 'large' },
      { src: '/photos/home-sweet-home/12-l1003004.jpg', alt: 'Home, Sweet Home — hands at the table', size: 'xsmall' },
      { src: '/photos/home-sweet-home/13-l1002951-2.jpg', alt: 'Home, Sweet Home — 12', size: 'full' },
      { src: '/photos/home-sweet-home/14-dsf8111.jpg', alt: 'Home, Sweet Home — 13', size: 'medium' },
      { src: '/photos/home-sweet-home/15-dsf5563-2.jpg', alt: 'Home, Sweet Home — 21', size: 'medium', pair: true },
      { src: '/photos/home-sweet-home/16-dsf3823.jpg', alt: 'Home, Sweet Home — 20', size: 'medium' },
      { src: '/photos/home-sweet-home/17-20250221-032-1.jpg', alt: 'Home, Sweet Home — 16', size: 'full' },
      { src: '/photos/home-sweet-home/18-20250221-035-1-2.jpg', alt: 'Home, Sweet Home — 17', size: 'medium' },
      { src: '/photos/home-sweet-home/19-dsf8083.jpg', alt: 'Home, Sweet Home — 22', size: 'full' },
      { src: '/photos/home-sweet-home/20-dsf8191.jpg', alt: 'Home, Sweet Home — Baku', size: 'small' },
      { src: '/photos/home-sweet-home/21-20250221-025-2.jpg', alt: 'Home, Sweet Home — rooftops at dusk', size: 'large' },
    ],
  },
  {
    slug: 'an-unhidden-face',
    title: 'An Unhidden Face',
    year: '2020 — 2024',
    category: '',
    hidden: true,
    summary:
      'Portraits made in the moment a person stops performing and is simply, fully seen.',
    cover: '/photos/an-unhidden-face/01-ash03080404.jpg',
    photos: [
      { src: '/photos/an-unhidden-face/01-ash03080404.jpg', alt: 'An Unhidden Face — 1', size: 'large' },
      { src: '/photos/an-unhidden-face/02-ellia0485.jpg', alt: 'An Unhidden Face — 2', size: 'full' },
      { src: '/photos/an-unhidden-face/03-ellia0532.jpg', alt: 'An Unhidden Face — 3', size: 'medium' },
      { src: '/photos/an-unhidden-face/04-ellia0792.jpg', alt: 'An Unhidden Face — 4', size: 'large' },
      { src: '/photos/an-unhidden-face/05-ellia0816.jpg', alt: 'An Unhidden Face — 5', size: 'small' },
      { src: '/photos/an-unhidden-face/06-nicholas1.jpg', alt: 'An Unhidden Face — 6', size: 'full' },
      { src: '/photos/an-unhidden-face/07-20250221-041-1.jpg', alt: 'An Unhidden Face — 7', size: 'medium' },
      { src: '/photos/an-unhidden-face/08-7.jpg', alt: 'An Unhidden Face — 8', size: 'large' },
      { src: '/photos/an-unhidden-face/09-dsc6786-1.jpg', alt: 'An Unhidden Face — 9', size: 'medium' },
      { src: '/photos/an-unhidden-face/10-dsf2293.jpg', alt: 'An Unhidden Face — 10', size: 'small' },
    ],
  },
  {
    slug: 'rites-of-light',
    title: 'Zen Mountain Monastery',
    year: '2025–2026',
    category: '',
    summary:
      'A documentary series. Zen Mountain Monastery, Catskill, NY. Devotion, discipline, and the daily rites of a community held by practice.',
    cover: '/photos/rites-of-light/01-meditation.jpg',
    photos: [
      { src: '/photos/rites-of-light/01-meditation.jpg', alt: 'Rites of Light — 1', size: 'large' },
      { src: '/photos/rites-of-light/02-dsf8873.jpg', alt: 'Rites of Light — 2', size: 'full' },
      { src: '/photos/rites-of-light/03-dsf8915.jpg', alt: 'Rites of Light — 3', size: 'medium' },
      { src: '/photos/rites-of-light/04-dsf8842.jpg', alt: 'Rites of Light — ceremony in the hall', size: 'medium' },
      { src: '/photos/rites-of-light/05-caroline.jpg', alt: 'Rites of Light — 5', size: 'full' },
      { src: '/photos/rites-of-light/06-meditator-face.jpg', alt: 'Rites of Light — meditator at dusk', size: 'xsmall' },
      { src: '/photos/rites-of-light/07-shrine-portrait.jpg', alt: 'Rites of Light — candle-lit shrine', size: 'xsmall', pair: true },
      { src: '/photos/rites-of-light/08-dsf8879.jpg', alt: 'Rites of Light — 6', size: 'full' },
      { src: '/photos/rites-of-light/09-dsf8830.jpg', alt: 'Rites of Light — 4', size: 'small' },
      { src: '/photos/rites-of-light/10-000068250008.jpg', alt: 'Rites of Light — 7', size: 'medium' },
    ],
  },
];

export const visibleProjects = projects.filter((p) => !p.hidden);
