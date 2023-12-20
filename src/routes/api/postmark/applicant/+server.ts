import { client } from '$lib/postmark.js';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	console.log('Invoke Postmark applicant endpoint');
	const data = await request.json();
	// Send message
	// const res = await client.sendEmailWithTemplate({
	// 	TemplateId: 21027639,
	// 	TemplateModel: data,
	// 	From: 'logan@firefly',
	// 	To: 'kagen.cox@gmail.com, cadem.tcsllc@gmail.com',
	// 	MessageStream: 'outbound',
	// 	TrackOpens: true
	// });
	// return json({success: true}, {status: 200})
	// Dev send message
	const res = await client.sendEmailWithTemplate({
		TemplateId: 21027639,
		TemplateModel: data,
		From: 'logan@fireflysoftware.dev',
		To: 'logan@fireflysoftware.dev',
		MessageStream: 'outbound',
		TrackOpens: true
	});
	if (res.ErrorCode) {
		console.log(res);
		return json({success: false, message: 'An error occured when communicating with Postmark servers.'}, { status: 500});
	}
	return json({ success: true }, { status: 200});
};
