// -----------------------------------------------------------------------------
// Your photo galleries / projects live here.
//
// Each project is a SEQUENCE of images you scroll through — like a photo book.
// The `size` and `align` of each photo are intentional: use them to control
// rhythm and emphasis (a big full image lands harder than a small offset one).
//
//   size:  'full' | 'large' | 'medium' | 'small'   (how wide it appears)
//   align: 'left' | 'center' | 'right'              (where it sits)
//
// To use YOUR OWN photos:
//   1. Put image files in:  public/photos/<project-slug>/
//   2. Change each `src` below to:  /photos/<project-slug>/your-file.jpg
//
// The URLs below use picsum.photos as temporary placeholders so the site
// looks complete right away. Replace them whenever you're ready.
// -----------------------------------------------------------------------------

export type PhotoSize = 'full' | 'large' | 'medium' | 'small';
export type PhotoAlign = 'left' | 'center' | 'right';

export type Photo = {
  src: string;
  alt: string;
  size?: PhotoSize;
  align?: PhotoAlign;
  // Optional short caption shown quietly beneath the image.
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  cover: string;
  photos: Photo[];
};

// Helper for placeholder images — delete once you use your own photos.
const ph = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const projects: Project[] = [
  {
    slug: 'still-light',
    title: 'Still Light',
    year: '2025',
    category: 'Portrait',
    summary:
      'A series of quiet portraits made in natural window light, exploring presence and pause.',
    cover: ph('stilllight-cover', 1200, 1500),
    photos: [
      { src: ph('sl1', 1800, 1100), alt: 'Portrait in soft window light', size: 'full', align: 'center' },
      { src: ph('sl2', 900, 1200), alt: 'A figure turning toward the light', size: 'medium', align: 'left' },
      { src: ph('sl3', 1000, 1000), alt: 'Close detail of hands', size: 'small', align: 'right' },
      { src: ph('sl4', 1600, 1100), alt: 'Quiet interior scene', size: 'large', align: 'center' },
      { src: ph('sl5', 900, 1200), alt: 'Reflection by a curtain', size: 'medium', align: 'right' },
      { src: ph('sl6', 1800, 1000), alt: 'Last light across a room', size: 'full', align: 'center' },
    ],
  },
  {
    slug: 'far-roads',
    title: 'Far Roads',
    year: '2024',
    category: 'Travel',
    summary:
      'Landscapes and fleeting scenes gathered on the road, from coastlines to quiet towns.',
    cover: ph('farroads-cover', 1200, 1500),
    photos: [
      { src: ph('fr1', 1800, 1000), alt: 'Open road at dusk', size: 'full', align: 'center' },
      { src: ph('fr2', 1000, 1000), alt: 'Roadside detail', size: 'small', align: 'left' },
      { src: ph('fr3', 900, 1200), alt: 'Mountain ridge', size: 'medium', align: 'right' },
      { src: ph('fr4', 1700, 1100), alt: 'Coastline at golden hour', size: 'large', align: 'center' },
      { src: ph('fr5', 900, 1200), alt: 'A lone figure walking', size: 'medium', align: 'left' },
      { src: ph('fr6', 1800, 1050), alt: 'Quiet town at first light', size: 'full', align: 'center' },
    ],
  },
  {
    slug: 'city-grain',
    title: 'City Grain',
    year: '2024',
    category: 'Street',
    summary:
      'The texture of the everyday city — light, shadow, and the people moving through it.',
    cover: ph('citygrain-cover', 1200, 1500),
    photos: [
      { src: ph('cg1', 900, 1250), alt: 'Figure under neon light', size: 'medium', align: 'left' },
      { src: ph('cg2', 1800, 1050), alt: 'Empty street at dawn', size: 'full', align: 'center' },
      { src: ph('cg3', 1000, 1000), alt: 'Reflections in glass', size: 'small', align: 'right' },
      { src: ph('cg4', 1600, 1100), alt: 'Shadow on a wall', size: 'large', align: 'center' },
      { src: ph('cg5', 900, 1200), alt: 'Rain on pavement', size: 'medium', align: 'right' },
      { src: ph('cg6', 1800, 1000), alt: 'The city exhaling at night', size: 'full', align: 'center' },
    ],
  },
];
