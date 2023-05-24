import type { Actions } from './$types';
import { fail, json } from '@sveltejs/kit';
import { z } from 'zod';
import postmark from 'postmark';
import { POSTMARK_API_KEY } from '$env/static/private';

// Send an email:
const client = new postmark.ServerClient(POSTMARK_API_KEY);

export const actions: Actions = {
	contact: async ({ request }) => {
		const formData = await request.formData();

		// check honeypot
		const password = formData.get('password');
		if (password) {
			return fail(400, { success: false, message: 'Nice try, bot.' });
		}

		// create payload
		const first_name: string = formData.get('first_name') as string;
		const last_name: string = formData.get('last_name') as string;
		const email: string = formData.get('email') as string;
		const phone: string = formData.get('phone') as string;
		const location: string = formData.get('location') as string;
		const subject: string = formData.get('subject') as string;
		const body: string = formData.get('body') as string;
		const payload = {
			first_name,
			last_name,
			email,
			phone,
			location,
			subject,
			body
		};

		// validate payload
		const Contact_Form_Schema = z.object({
			first_name: z.string(),
			last_name: z.string(),
			email: z.string().email(),
			phone: z.string(),
			location: z.string(),
			subject: z.string(),
			body: z.string()
		});

		const result = Contact_Form_Schema.safeParse(payload);

		// Handle validation errors
		if (!result.success) {
			console.log(JSON.stringify(result, null, 2));

			// Loop through the errors array and create a custom errors array
			const errors = result.error.errors.map((error) => {
				return {
					field: error.path[0],
					message: error.message
				};
			});
			return fail(400, { success: false, errors });
		} else {
			// Send message
			const { data } = result;
			const response = await client.sendEmailWithTemplate({
				TemplateId: 26884441,
				TemplateModel: {
					first: data.first_name,
					last: data.last_name,
					email: data.email,
					phone: data.phone,
					location: data.location,
					subject: data.subject,
					body: data.body
				},
				From: 'logan@fireflysoftware.dev',
				To: 'logan@fireflysoftware.dev',
				MessageStream: 'outbound',
				TrackOpens: true
			});

			// handle error
			if (response.ErrorCode) {
				return fail(response.ErrorCode, { message: response.Message });
			}

			// handle success
			return { success: true };
		}
	}
};
