import postmark from 'postmark';

// Send an email:
var client = new postmark.ServerClient(process.env.SENDGRID_API_KEY);

export async function post({ request }) {
	const body = await request.json();

	//Check honeypot
	if (body.password === '') {
		// Hooray, its not a bot, so send the email
		await client.sendEmailWithTemplate({
			TemplateAlias: 'kcc-contact',
			TemplateModel: body,
			From: 'logan@firefly.llc',
			To: 'logan@firefly.llc',
			MessageStream: 'outbound',
			TrackOpens: true
		});

		return {
			status: 200,
			body: 'Message sent'
		};
	} else {
		return {
			status: 200,
			body: 'Nice try bot'
		};
	}
}
