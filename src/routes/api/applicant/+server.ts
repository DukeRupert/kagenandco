import postmark from 'postmark';

// Send an email:
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export async function POST({ request }) {
	const body = await request.formData();

	// Convert formData to raw JSON
	const entries = Object.fromEntries(body.entries());

	// Build the jobs[{}]
	const jobs = [];
	Object.keys(entries).map((key) => {
		if (key.includes('jobs')) {
			const [, index, label] = key.split('.');
			if (typeof jobs[index] === 'object') {
				jobs[index][label] = entries[key];
			} else {
				jobs[index] = { [label]: entries[key] };
			}
		}
	});

	// Filter out jobs from raw JSON
	const json = Object.keys(entries)
		.filter((key) => !key.includes('jobs'))
		.reduce((obj, key) => {
			return Object.assign(obj, { [key]: entries[key] });
		}, {});

	// Date the submission
	const date = new Date().toString();

	// Assemble final json object
	const data = { ...json, jobs, date: date };

	// Check honeypot
	if (data.password !== '') {
		// Nice try bot
		return new Response('Nice try bot', { status: 201 });
	} else {
		// Send message
		const res = await client.sendEmailWithTemplate({
			TemplateId: 21027639,
			TemplateModel: data,
			From: 'logan@firefly.llc',
			To: 'kagen.cox@gmail.com, cadem.tcsllc@gmail.com',
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
