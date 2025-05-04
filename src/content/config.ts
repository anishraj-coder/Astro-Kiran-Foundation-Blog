import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.number().optional(),
    description: z.string().optional()
  })
});

export const collections = {
  'blog': blogCollection
};