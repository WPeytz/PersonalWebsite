// Course data now lives in courses.json so it can be edited from the CMS
// admin panel (/admin) without touching code. This file just types it and
// re-exports it for the rest of the site.

import data from './courses.json';

export type Program = 'msc' | 'bsc' | 'other';

export interface Course {
  code?: string;          // DTU course number, e.g. "02456"
  title: string;
  year: number;           // year completed (or expected)
  ects?: number;          // ECTS credits
  description?: string;   // one-line note about the content
  program: Program;
  institution?: string;   // defaults to DTU
}

export const PROGRAMS: Record<
  Program,
  { label: string; sublabel?: string }
> = data.programs;

export const COURSES: Course[] = data.courses as unknown as Course[];
