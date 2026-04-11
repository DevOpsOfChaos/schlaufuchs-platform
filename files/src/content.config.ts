import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const subjects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/subjects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    order: z.number(),
    accent: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subject: z.enum([
      'web-development',
      'informatik',
      'linux',
      'mathematik',
      'elektrotechnik',
      'daten-und-signale',
    ]),
    section: z.string(),
    topicPath: z.array(z.string()).optional(),
    level: z.enum(['einfach', 'mittel', 'fortgeschritten']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const exercises = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/exercises' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subject: z.enum([
      'web-development',
      'informatik',
      'linux',
      'mathematik',
      'elektrotechnik',
      'daten-und-signale',
    ]),
    section: z.string().optional(),
    topicPath: z.array(z.string()).optional(),
    level: z.enum(['einfach', 'mittel', 'fortgeschritten']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  subjects,
  articles,
  exercises,
  news,
};
