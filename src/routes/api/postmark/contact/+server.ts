import { client } from '$lib/postmark.js';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	console.log('Invoke Postmark contact endpoint');
	const data = await request.json();
	const business_name = "Kagen's Coffee & Crepes"
	const model = {...data, business_name: business_name}

	// Send message
	const res = await client.sendEmailWithTemplate({
		TemplateId: 26884441,
		TemplateModel: model,
		From: 'logan@fireflysoftware.dev',
		To: 'kagen.cox@gmail.com, cadem.tcsllc@gmail.com',
		MessageStream: 'outbound',
		TrackOpens: true
	});

	// Handle result
	if (res.ErrorCode) {
		console.log(res);
		return json(
			{ success: false, message: 'An error occured when communicating with Postmark servers.' },
			{ status: 500 }
		);
	}
	return json({ success: true }, { status: 200 });
};
