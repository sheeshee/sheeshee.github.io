export function dateFromFilename(filename: String){
	const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
	const dateStr = dateMatch ? dateMatch[1] : null;
	if (!dateStr) {
		throw new Error(`Filename ${filename} does not contain a valid date`);
	}
	const date = new Date(dateStr);
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
