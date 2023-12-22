import { z } from 'zod';

export const applicantSchema = z.object({
	password: z.string().default(''), // honeypot
	first_name: z.string().max(30),
	last_name: z.string().max(30),
	email: z.string().email(),
	phone: z.string().default(''),
	location: z.string().default('All'),
	start_date: z.string(),
	employment_type: z.string(),
	legal: z.boolean(),
	veteran: z.boolean(),
	background_check: z.boolean(),
	work_history: z.string()
});

export const contactSchema = z.object({
	password: z.string().default(''), // honeypot
	first_name: z.string().max(30),
	last_name: z.string().max(30),
	email: z.string().email(),
	phone: z.string().default(''),
	location: z.string(),
	message: z.string().max(1500)
});

export type ApplicantSchema = typeof applicantSchema;
export type ContactSchema = typeof contactSchema;
