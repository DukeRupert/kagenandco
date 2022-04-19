import postmark from 'postmark';

// Send an email:
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export async function post({ request }) {
	const body = await request.formData();

	// Convert formData to JSON
	const entries = Object.fromEntries(body.entries());

	// Add date
	const date = new Date().toString();
	const data = { ...entries, date: date };

	if (data.password !== '') {
		// Nice try bot
		return {
			status: 201,
			body: 'Nice try bot'
		};
	} else {
		// Send message
		const res = await client.sendEmailWithTemplate({
			TemplateId: 26884441,
			TemplateModel: data,
			From: 'logan@firefly.llc',
			To: 'kagen.cox@gmail.com',
			MessageStream: 'outbound',
			TrackOpens: true
		});

		if (res.ErrorCode) {
			return {
				status: res.ErrorCode,
				body: res.Message
			};
		} else {
			return {
				status: 201
			};
		}
	}
}
