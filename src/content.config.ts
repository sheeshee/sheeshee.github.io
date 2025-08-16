// see https://docs.astro.build/en/guides/content-collections/#built-in-loaders
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const thoughts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
	schema: z.object({
		title: z.string(),
		preamble: z.string(),
	})
});

const creativeWriting = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/creative-writing" }),
	schema: z.object({
		title: z.string(),
		preamble: z.string(),
	})
})

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		icon: z.string().optional(),
		url: z.string().url(),
	})
})

const recipes = defineCollection({
	loader: glob({ pattern: "**/*.yml", base: "./src/content/recipes" }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		cuisine: z.string(),
		difficulty: z.string(),
		prep_time_minutes: z.number(),
		cook_time_minutes: z.number(),
		total_time_minutes: z.number(),
		base_servings: z.number(),
		scaling: z.record(z.number()),
		ingredients: z.array(z.object({
			name: z.string(),
			amount_base: z.number(),
			unit: z.string(),
			notes: z.string().optional(),
		})),
		instructions: z.array(z.object({
			step: z.number(),
			action: z.string(),
		})),
	})
})

// other collections....
//

export const collections = { thoughts, creativeWriting, projects, recipes };

