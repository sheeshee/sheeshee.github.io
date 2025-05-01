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
		icon: z.string(),
		url: z.string().url(),
	})
})

// other collections....
//

export const collections = { thoughts, creativeWriting, projects };

