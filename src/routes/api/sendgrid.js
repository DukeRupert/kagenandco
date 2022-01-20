import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function post(req) {
	if (req.body.password !== '') {
		console.log('Nice try bot');
		return {
			status: 200
		};
	}
	try {
		// console.log("REQ.BODY", req.body);
		await sendgrid.send({
			to: 'kagen.cox@gmail.com', // Your email where you'll receive emails
			from: 'logan@firefly.llc', // your website email address here
			templateId: 'd-b1eec2575b564d60a7e14c10205378e6',
			dynamicTemplateData: {
				subject: req.body.subject,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				tel: req.body.tel,
				location: req.body.location,
				body: req.body.body
			}
		});
	} catch (error) {
		// console.log(error);
		return {
			status: 500,
			body: error
		};
	}

	return {
		status: 200
	};
}
