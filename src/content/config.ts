import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    heroImage: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    portrait: z.string().optional(),
  }),
});

export const collections = { blog, projects, pages };
