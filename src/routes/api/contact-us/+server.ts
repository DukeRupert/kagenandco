import { client } from '$lib/postmark.js';

export async function POST({ request }) {
	const body = await request.formData();

	// Convert formData to JSON
	const entries = Object.fromEntries(body.entries());

	// Add date
	const date = new Date().toString();
	const data = { ...entries, date: date };

	if (data.password !== '') {
		// Nice try bot
		return new Response('Nice try bot', { status: 201 });
	} else {
		// Send message
		const res = await client.sendEmailWithTemplate({
			TemplateId: 26884441,
			TemplateModel: data,
			From: 'logan@firefly.llc',
			To: 'kagen.cox@gmail.com, cadem.tcsllc@gmail.com, logan@firefly.llc',
			MessageStream: 'outbound',
			TrackOpens: true
		});

		if (res.ErrorCode) {
			return {
				status: res.ErrorCode,
				body: res.Message
			};
		} else {
			return new Response(undefined, { status: 201 });
		}
	}
}
