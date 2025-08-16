# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build the site (includes type checking with `astro check`)
- `npm run preview` - Preview the built site locally
- `astro check` - Run TypeScript type checking

## Architecture Overview

This is an Astro-based static portfolio website for Sam Sheehy, hosted on GitHub Pages.

### Content Collections System

The site uses Astro's content collections with three main types:

- **Projects** (`src/content/projects/`) - Markdown files with frontmatter containing `title`, `icon` (optional), and `url`
- **Thoughts** (`src/content/thoughts/`) - Markdown files with `title` and `preamble` 
- **Creative Writing** (`src/content/creative-writing/`) - Markdown files with `title` and `preamble`
- **Recipes** (`src/content/recipes/`) - YAML files with structured recipe data (new collection type)

All content files follow date-based naming: `YYYY-MM-DD-slug.md` or `.yml`

### Key Components

- **Layout.astro** - Main layout with navigation header and global styles
- **Card.astro** - Reusable card component for displaying content previews
- **utils.ts** - Date parsing utilities for filename-based sorting (`dateFromFilename`, `formattedDateFromFilename`, `compareDateFromFilename`)

### Content Organization

- Files are sorted by date extracted from filenames
- Featured project on homepage is the most recent project
- Navigation includes Home, Projects, Thoughts, and Creative Writing sections
- Each content type has index and dynamic `[slug]` pages

### Site Configuration

- Deployed to `https://sheeshee.github.io` 
- Uses GoatCounter for analytics
- TypeScript enabled with strict checking

## File Structure Notes

- Content files must include date prefixes in filenames for proper sorting
- Recipe collection uses YAML format with structured ingredient/instruction data
- All markdown content includes frontmatter schemas defined in `content.config.ts`