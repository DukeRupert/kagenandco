import type { PageLoad } from './$types';
import { crepes } from '$lib/data/crepes'
import type { Crepe } from '$lib/types/menu';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, url }) => {
    let type = url.searchParams.get('type');

    const filter_crepes = (crepes: Crepe[], param: string): Crepe[] => {
		// If no filter param exists return full array
		if (param == null || param == undefined) {
			return crepes;
		} else {
			return crepes.filter((crepe) => crepe.type == param);
		}
	};

    const filtered_crepes = filter_crepes(crepes, type)

	return {
        crepes: filtered_crepes,
        type
    }
};