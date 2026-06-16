// -----------------------------------------------------------------------------
// Your photo galleries. Generated from your masters, then safe to edit by hand.
//
// Each project is a SEQUENCE you scroll through. On project pages the gallery
// scrolls horizontally; `size` controls each image's relative height/emphasis:
//   size:  'full' | 'large' | 'medium' | 'small'
//   align: 'left' | 'center' | 'right'   (used on the vertical homepage)
//
// To reorder, just move lines around. To move a photo to another project,
// cut its { ... } line into that project's photos array.
// -----------------------------------------------------------------------------

export type PhotoSize = 'full' | 'large' | 'medium' | 'small';
export type PhotoAlign = 'left' | 'center' | 'right';

export type Photo = {
  src: string;
  alt: string;
  size?: PhotoSize;
  align?: PhotoAlign;
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

export const projects: Project[] = [
  {
    slug: 'there-is-a-field',
    title: 'There Is a Field, I\'ll Meet You There',
    year: '2019 — 2024',
    category: 'Landscape',
    summary:
      'Land, water, and small figures held inside vast space — a search for the place beyond right and wrong.',
    cover: '/photos/there-is-a-field/01-45fd39df-f21e-453c-abbc-cfc707f6f936-rw.jpg',
    photos: [
      { src: '/photos/there-is-a-field/01-45fd39df-f21e-453c-abbc-cfc707f6f936-rw.jpg', alt: 'There Is a Field, I\'ll Meet You There — 1', size: 'large' },
      { src: '/photos/there-is-a-field/02-l1002367-1.jpg', alt: 'There Is a Field, I\'ll Meet You There — 2', size: 'full' },
      { src: '/photos/there-is-a-field/03-kids-running-4.jpg', alt: 'There Is a Field, I\'ll Meet You There — 3', size: 'medium' },
      { src: '/photos/there-is-a-field/04-8.jpg', alt: 'There Is a Field, I\'ll Meet You There — 4', size: 'large' },
      { src: '/photos/there-is-a-field/05-img.jpg', alt: 'There Is a Field, I\'ll Meet You There — 5', size: 'small' },
      { src: '/photos/there-is-a-field/06-the-sea.jpg', alt: 'There Is a Field, I\'ll Meet You There — 6', size: 'full' },
      { src: '/photos/there-is-a-field/07-l1002622.jpg', alt: 'There Is a Field, I\'ll Meet You There — 7', size: 'medium' },
      { src: '/photos/there-is-a-field/08-l1002634-1.jpg', alt: 'There Is a Field, I\'ll Meet You There — 8', size: 'large' },
      { src: '/photos/there-is-a-field/09-dsf0158-1.jpg', alt: 'There Is a Field, I\'ll Meet You There — 9', size: 'medium' },
      { src: '/photos/there-is-a-field/10-l1002627-1.jpg', alt: 'There Is a Field, I\'ll Meet You There — 10', size: 'small' },
      { src: '/photos/there-is-a-field/11-dsf8276-nr-1.jpg', alt: 'There Is a Field, I\'ll Meet You There — 11', size: 'large' },
      { src: '/photos/there-is-a-field/12-dsf2313.jpg', alt: 'There Is a Field, I\'ll Meet You There — 12', size: 'full' },
      { src: '/photos/there-is-a-field/13-dsf3109-1.jpg', alt: 'There Is a Field, I\'ll Meet You There — 13', size: 'medium' },
      { src: '/photos/there-is-a-field/14-dsf8551.jpg', alt: 'There Is a Field, I\'ll Meet You There — 14', size: 'large' },
      { src: '/photos/there-is-a-field/15-20250221-105-nr.jpg', alt: 'There Is a Field, I\'ll Meet You There — 15', size: 'small' },
      { src: '/photos/there-is-a-field/16-000068250003.jpg', alt: 'There Is a Field, I\'ll Meet You There — 16', size: 'full' },
      { src: '/photos/there-is-a-field/17-000068230005.jpg', alt: 'There Is a Field, I\'ll Meet You There — 17', size: 'medium' },
      { src: '/photos/there-is-a-field/18-img-1072.jpg', alt: 'There Is a Field, I\'ll Meet You There — 18', size: 'large' },
    ],
  },
  {
    slug: 'home-sweet-home',
    title: 'Home, Sweet Home',
    year: '2025',
    category: 'Documentary',
    summary:
      'A documentary of a place and the people who hold it together — tenderness amid hardship.',
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
      { src: '/photos/home-sweet-home/12-l1002951-2.jpg', alt: 'Home, Sweet Home — 12', size: 'full' },
      { src: '/photos/home-sweet-home/13-dsf8111.jpg', alt: 'Home, Sweet Home — 13', size: 'medium' },
      { src: '/photos/home-sweet-home/14-dsf0116.jpg', alt: 'Home, Sweet Home — 14', size: 'large' },
    ],
  },
  {
    slug: 'an-unhidden-face',
    title: 'An Unhidden Face',
    year: '2020 — 2024',
    category: 'Portrait',
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
    slug: 'the-body-remembers',
    title: 'The Body Remembers',
    year: '2021 — 2025',
    category: 'Figure',
    summary:
      'The figure as landscape and memory — water, skin, weight, and the quiet of being.',
    cover: '/photos/the-body-remembers/01-mitch-with-weird-hand.jpg',
    photos: [
      { src: '/photos/the-body-remembers/01-mitch-with-weird-hand.jpg', alt: 'The Body Remembers — 1', size: 'large' },
      { src: '/photos/the-body-remembers/02-ash-04-150005.jpg', alt: 'The Body Remembers — 2', size: 'full' },
      { src: '/photos/the-body-remembers/03-dsf8700.jpg', alt: 'The Body Remembers — 3', size: 'medium' },
      { src: '/photos/the-body-remembers/04-e836785d-5ec2-4342-84b3-2c49a4dad27b-rw.jpg', alt: 'The Body Remembers — 4', size: 'large' },
      { src: '/photos/the-body-remembers/05-dscf4617.jpg', alt: 'The Body Remembers — 5', size: 'small' },
      { src: '/photos/the-body-remembers/06-dscf5962-2-edit.jpg', alt: 'The Body Remembers — 6', size: 'full' },
      { src: '/photos/the-body-remembers/07-dsf0124-edit.jpg', alt: 'The Body Remembers — 7', size: 'medium' },
      { src: '/photos/the-body-remembers/08-dscf3760.jpg', alt: 'The Body Remembers — 8', size: 'large' },
      { src: '/photos/the-body-remembers/09-45f9137b-a439-4b39-a1d4-ba0cd87ae6f0-rw.jpg', alt: 'The Body Remembers — 9', size: 'medium' },
      { src: '/photos/the-body-remembers/10-shadow2.jpg', alt: 'The Body Remembers — 10', size: 'small' },
      { src: '/photos/the-body-remembers/11-dsf2361.jpg', alt: 'The Body Remembers — 11', size: 'large' },
      { src: '/photos/the-body-remembers/12-carrpond-mitchell-seal.jpg', alt: 'The Body Remembers — 12', size: 'full' },
      { src: '/photos/the-body-remembers/13-ellia.jpg', alt: 'The Body Remembers — 13', size: 'medium' },
      { src: '/photos/the-body-remembers/14-800d21fe-74f9-4466-94e0-71f9bf88a250.jpg', alt: 'The Body Remembers — 14', size: 'large' },
      { src: '/photos/the-body-remembers/15-hair.jpg', alt: 'The Body Remembers — 15', size: 'small' },
    ],
  },
  {
    slug: 'rites-of-light',
    title: 'Rites of Light',
    year: '2022 — 2024',
    category: 'Ritual',
    summary:
      'Devotion, stillness, and ceremony — the sacred caught in falling light.',
    cover: '/photos/rites-of-light/01-meditation.jpg',
    photos: [
      { src: '/photos/rites-of-light/01-meditation.jpg', alt: 'Rites of Light — 1', size: 'large' },
      { src: '/photos/rites-of-light/02-dsf8873.jpg', alt: 'Rites of Light — 2', size: 'full' },
      { src: '/photos/rites-of-light/03-dsf8915.jpg', alt: 'Rites of Light — 3', size: 'medium' },
      { src: '/photos/rites-of-light/04-dsf8830.jpg', alt: 'Rites of Light — 4', size: 'large' },
      { src: '/photos/rites-of-light/05-caroline.jpg', alt: 'Rites of Light — 5', size: 'small' },
      { src: '/photos/rites-of-light/06-dsf8879.jpg', alt: 'Rites of Light — 6', size: 'full' },
      { src: '/photos/rites-of-light/07-000068250008.jpg', alt: 'Rites of Light — 7', size: 'medium' },
    ],
  },
  {
    slug: 'the-houses-we-leave-behind',
    title: 'The Houses We Leave Behind',
    year: '2021 — 2023',
    category: 'Staged',
    summary:
      'Figures staged inside ruins and abandoned rooms — what remains after the people are gone.',
    cover: '/photos/the-houses-we-leave-behind/01-9.jpg',
    photos: [
      { src: '/photos/the-houses-we-leave-behind/01-9.jpg', alt: 'The Houses We Leave Behind — 1', size: 'large' },
      { src: '/photos/the-houses-we-leave-behind/02-dscf4946.jpg', alt: 'The Houses We Leave Behind — 2', size: 'full' },
      { src: '/photos/the-houses-we-leave-behind/03-dscf5051-2.jpg', alt: 'The Houses We Leave Behind — 3', size: 'medium' },
      { src: '/photos/the-houses-we-leave-behind/04-dscf5074.jpg', alt: 'The Houses We Leave Behind — 4', size: 'large' },
      { src: '/photos/the-houses-we-leave-behind/05-dscf4582.jpg', alt: 'The Houses We Leave Behind — 5', size: 'small' },
      { src: '/photos/the-houses-we-leave-behind/06-dscf4868.jpg', alt: 'The Houses We Leave Behind — 6', size: 'full' },
      { src: '/photos/the-houses-we-leave-behind/07-blindfold-2.jpg', alt: 'The Houses We Leave Behind — 7', size: 'medium' },
      { src: '/photos/the-houses-we-leave-behind/08-dsf0265.jpg', alt: 'The Houses We Leave Behind — 8', size: 'large' },
      { src: '/photos/the-houses-we-leave-behind/09-l3a5729-1.jpg', alt: 'The Houses We Leave Behind — 9', size: 'medium' },
      { src: '/photos/the-houses-we-leave-behind/10-dsf0115.jpg', alt: 'The Houses We Leave Behind — 10', size: 'small' },
      { src: '/photos/the-houses-we-leave-behind/11-insects-1.jpg', alt: 'The Houses We Leave Behind — 11', size: 'large' },
      { src: '/photos/the-houses-we-leave-behind/12-insects-32.jpg', alt: 'The Houses We Leave Behind — 12', size: 'full' },
      { src: '/photos/the-houses-we-leave-behind/13-glass.jpg', alt: 'The Houses We Leave Behind — 13', size: 'medium' },
    ],
  },
];
