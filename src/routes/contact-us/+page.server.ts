import type { PageServerLoad, Actions } from './$types';
import { superValidate, message } from 'sveltekit-superforms/server';
import { contactSchema } from '$lib/validators';

export const load: PageServerLoad = async function () {
	// Setup forms
	const form = await superValidate(contactSchema);

	return {
		form
	};
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		console.log('Submit applicant email');
		// Cast Superform magic
		const form = await superValidate(request, contactSchema);
		// Check the honeypot
		if (form.data.password !== '') return message(form, 'Nice try bot', { status: 400 });
		// Check if data is valid
		if (!form.valid) return message(form, 'Invalid form', { status: 400 });
		// Send email to applicant
		try {
			// Setup
			const resource = '/api/postmark/contact';
			const headers = new Headers({ 'Content-Type': 'application/json' });
			const options = {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(form.data)
			};
			// Call
			const res = await fetch(resource, options);
			console.log(`Received response from ${resource}`);
			const status = res.status;
			console.log(`Status is ${status}`);
			if (status === 200) {
				return { form };
			} else {
				console.log(res)
				return message(form, 'An error occured on our end. Please try again later or call.', {
					status: 500
				});
			}
		} catch (err) {
			console.log(err);
		}
		return { form };
	}
};
