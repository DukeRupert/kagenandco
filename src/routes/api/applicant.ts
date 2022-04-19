import postmark from 'postmark';

// Send an email:
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export async function post({ request }) {
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
		return {
			status: 201,
			body: 'Nice try bot'
		};
	} else {
		// Send message
		const res = await client.sendEmailWithTemplate({
			TemplateId: 21027639,
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
