import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    userId: z.string().optional(),
    projectLink: z.string().optional(),
  }),
})

const blogs = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
    authorImg: z.string().optional(),
  }),
})

const work_experiences = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    companySite: z.string().optional(),
    location: z.string().optional(),
    techStacks: z.array(z.string()).optional().default([]),
    description:z.string().optional(),
  }),
})

export const collections = { projects, blogs, work_experiences }
