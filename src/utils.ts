import type { CollectionEntry } from 'astro:content';

export function dateFromFilename(filename: String): Date {
	const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
	const dateStr = dateMatch ? dateMatch[1] : null;
	if (!dateStr) {
		throw new Error(`Filename ${filename} does not contain a valid date`);
	}
	const date = new Date(dateStr);
	return date;
}

export function formattedDateFromFilename(filename: String){
	const date = dateFromFilename(filename);
	const formattedDate = new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(date)
	return formattedDate;
}

export function slugFromFilename(filename: String){
	return filename.replace(/\.[^/.]+$/, "")
}


export function compareDateFromFilename<T extends 'thoughts' | 'projects' | 'creativeWriting'>(
  a: CollectionEntry<T>,
  b: CollectionEntry<T>
): number {
  const dateA = dateFromFilename(a.id);
  const dateB = dateFromFilename(b.id);
  return dateA.valueOf() - dateB.valueOf();
}
