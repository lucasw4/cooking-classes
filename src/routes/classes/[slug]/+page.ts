import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { featuredClasses } from '$lib/data/classes.js';

export const load: PageLoad = ({ params }) => {
	const classData = featuredClasses.find((c) => c.id === params.slug);
	console.log('slug:', params.slug);
	console.log('classData:', classData);
	if (!classData) {
		throw error(404, 'Class not found');
	}

	return classData;
};
