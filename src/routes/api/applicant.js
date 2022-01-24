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
			to: 'lwilliams56@gmail.com', // Your email where you'll receive emails
			from: 'logan@firefly.llc', // your website email address here
			templateId: 'd-d6591ebe9ea643f6b50aa262d342b35d',
			dynamicTemplateData: {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				tel: req.body.tel,
				location: req.body.location,
				legal: req.body.legal,
				veteran: req.body.veteran,
				backgroundCheck: req.body.backgroundCheck,
				startDate: req.body.startDate,
				employmentType: req.body.employmentType,
				priorTitle: req.body.priorTitle
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
