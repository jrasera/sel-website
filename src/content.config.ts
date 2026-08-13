import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z
    .object({
      name: z.string(),
      role: z.string(),
      careerStage: z.enum(['director', 'postdoc', 'phd', 'masters', 'alumni']),
      photo: z.string().optional(),
      photoAlt: z.string().optional(),
      bio: z.string().optional(),
      email: z.email().optional(),
      projectSlugs: z.array(z.string()).optional(),
      order: z.number().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.photo && !data.photoAlt) {
        ctx.addIssue({
          code: 'custom',
          path: ['photoAlt'],
          message: 'photoAlt is required whenever photo is set',
        });
      }
    }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    url: z.url().optional(),
  }),
});

const toolSchema = z
  .discriminatedUnion('state', [
    z.object({ state: z.literal('none') }),
    z.object({ state: z.literal('in-development'), note: z.string().optional() }),
    z.object({ state: z.literal('coming-soon'), note: z.string().optional() }),
    z.object({ state: z.literal('embed'), embedUrl: z.url(), title: z.string() }),
    z.object({ state: z.literal('link-out'), url: z.url(), label: z.string() }),
  ])
  .default({ state: 'none' });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    personName: z.string(),
    personSlug: z.string().optional(),
    status: z.enum(['active', 'past']),
    summary: z.string(),
    sectors: z.array(z.string()).optional(),

    overview: z.array(z.string()).optional(),
    objectives: z.array(z.string()).optional(),
    workProgramme: z
      .object({
        intro: z.string().optional(),
        tasks: z.array(z.object({ title: z.string(), description: z.string() })),
      })
      .optional(),
    methodology: z
      .object({
        intro: z.string().optional(),
        items: z.array(z.object({ title: z.string(), description: z.string() })),
        showDiagram: z.boolean().optional().default(false),
      })
      .optional(),
    statusFindings: z
      .object({
        intro: z.string().optional(),
        milestones: z
          .array(
            z.object({
              label: z.string(),
              status: z.enum(['current', 'planned', 'done']),
              description: z.string(),
            })
          )
          .optional(),
        note: z.string().optional(),
      })
      .optional(),
    partnerSlugs: z.array(z.string()).optional(),
    collaborators: z.array(z.string()).optional(),

    tool: toolSchema,

    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    type: z.enum(['journal-article', 'preprint', 'thesis']),
    venue: z.string().optional(),
    link: z.discriminatedUnion('kind', [
      z.object({ kind: z.literal('download'), file: z.string() }),
      z.object({ kind: z.literal('external'), url: z.url() }),
    ]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { people, projects, publications, partners };
