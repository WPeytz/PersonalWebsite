// Edit this file (or use the "Edit on GitHub" link) to add/remove courses.
// Order in each program is preserved as written; the page just renders them.

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
> = {
  msc: {
    label: 'MSc Human-Centered Artificial Intelligence',
    sublabel: 'DTU · 2025–2027',
  },
  bsc: {
    label: 'BSc Artificial Intelligence and Data',
    sublabel: 'DTU · 2020–2025',
  },
  other: {
    label: 'Other',
    sublabel: 'Economics',
  },
};

export const COURSES: Course[] = [
  // MSc Human-Centered AI (DTU, 2025–2027)
  { title: 'Deep Learning', year: 2025, ects: 5, program: 'msc' },
  { title: 'Introduction to Deep Learning in Computer Vision', year: 2025, ects: 5, program: 'msc' },
  { title: 'Computer Graphics', year: 2025, ects: 5, program: 'msc' },
  { title: 'X-Tech Entrepreneurship', year: 2025, ects: 10, program: 'msc' },
  { title: 'User Experience Engineering', year: 2026, ects: 5,program: 'msc' },
  { title: 'Quantitative methods to assess sustainability', year: 2026, ects: 5, program: 'msc' },
  { title: 'Personal Data Interaction', year: 2026, ects: 10, program: 'msc' },
  { title: 'Computational Data Analysis', year: 2026, ects: 5,program: 'msc' },
  { title: 'X-Tech+', year: 2026, ects: 10, program: 'msc' },
  

  // BSc Artificial Intelligence and Data (DTU, 2020–2025)
  { title: 'Advanced Engineering Mathematics 1', year: 2020, ects: 20, program: 'bsc' },
  { title: 'Introduction to Programming and Data Processing', year: 2020, ects: 5,program: 'bsc' },
  { title: 'Discrete Mathematics', year: 2020, ects: 5, program: 'bsc' },
  { title: 'Introduction to Intelligent Systems', year: 2020, ects: 10, program: 'bsc' },
  { title: 'Signals and Data', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Artificial Intelligence and Human Cognition', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Algorithms and Data Structures 1', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Introduction to Mathematical Statistics', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Advanced Engineering Mathematics 2', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Introductory Programming', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Introduction to Machine Learning and Data Mining', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Chemistry', year: 2021, ects: 5, program: 'bsc' },
  { title: 'UX Design Prototyping', year: 2021, ects: 5, program: 'bsc' },
  { title: 'Project in Statistical Evaluation for Artificial Intelligence and Data', year: 2022, ects: 5, program: 'bsc' },
  { title: 'Software Engineering 1', year: 2022, ects: 5, program: 'bsc' },
  { title: 'Project work - Bachelor of Artificial Intelligence and Data', year: 2022, ects: 10, program: 'bsc' },
  { title: 'Science, Technology and Society', year: 2023, ects: 5, program: 'bsc' },
  { title: 'Physics 1', year: 2023, ects: 10, program: 'bsc' },
  { title: 'Computational Social Science', year: 2023, ects: 5, program: 'bsc' },
  { title: 'Active Machine Learning and Agency', year: 2023, ects: 5, program: 'bsc' },
  { title: 'Digital Trends for Entrepreneurs', year: 2023, ects: 5, program: 'bsc' },
  { title: 'Algorithms and Data Structures 2', year: 2023, ects: 5, program: 'bsc' },
  { title: 'Machine Learning Operations', year: 2025, ects: 5, program: 'bsc' },
  { title: 'Symbolic Artificial Intelligence', year: 2025, ects: 5, program: 'bsc' },
  { title: 'Introduction to Reinforcement Learning and Control', year: 2025, ects: 5, program: 'bsc' },
  { title: 'Project Management', year: 2025, ects: 5, program: 'bsc' },
  { title: 'Bachelor Thesis: Adaptive Learning Systems for Middle School Mathematics', year: 2025, ects: 20, program: 'bsc' },

  // Other
    {
    title: 'Principle of Economics A',
    year: 2024,
    ects: 7.5,
    program: 'other',
    institution: 'University of Copenhagen',
  },
 
   {
    title: 'Descriptive Economics A',
    year: 2024,
    ects: 7.5,
    program: 'other',
    institution: 'University of Copenhagen',
  },
  {
    title: 'Economics in Society',
    year: 2024,
    ects: 5,
    program: 'other',
    institution: 'University of Copenhagen',
  },
   {
      title: 'Mathematics A',
      year: 2024,
      ects: 10,
      program: 'other',
      institution: 'University of Copenhagen',
    },
  {
    title: 'Principle of Economics B',
    year: 2025,
    ects: 7.5,
    program: 'other',
    institution: 'University of Copenhagen',
  },
   {
    title: 'Descriptive Economics B',
    year: 2025,
    ects: 7.5,
    program: 'other',
    institution: 'University of Copenhagen',
  },
    {
    title: 'Business Economics',
    year: 2025,
    ects: 7.5,
    program: 'other',
    institution: 'University of Copenhagen',
  },
  {
    title: 'Mathematics B',
    year: 2025,
    ects: 7.5,
    program: 'other',
    institution: 'University of Copenhagen',
  },





  // TODO: add the rest of your BSc courses here, e.g.:
  // { code: '02450', title: 'Introduction to Machine Learning and Data Mining', year: 2021, ects: 5, program: 'bsc' },
];
