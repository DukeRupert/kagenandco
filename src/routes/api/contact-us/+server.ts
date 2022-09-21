import postmark from 'postmark';

// Send an email:
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

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
			throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
			// Suggestion (check for correctness before using):
			// return new Response(res.Message, { status: res.ErrorCode });
			return {
				status: res.ErrorCode,
				body: res.Message
			};
		} else {
			return new Response(undefined, { status: 201 });
		}
	}
}