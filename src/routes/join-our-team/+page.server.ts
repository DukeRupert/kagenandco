import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms/server';
import { applicantSchema } from '$lib/validators';
import { client } from '$lib/postmark.js';

export const load: PageServerLoad = async function ({ url, locals }) {
	// Setup forms
	const form = await superValidate(applicantSchema);

	return {
		form
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		console.log('Send applicant email');
		const form = await superValidate(request, applicantSchema);
		if (!form.valid) return message(form, 'Invalid form', { status: 400 });
        console.log(form.data)
        //Todo: send email
		return { form };
	}
};
