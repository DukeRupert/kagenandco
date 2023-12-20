import { z } from 'zod';

export const applicantSchema = z.object({
	first_name: z.string().max(30),
	last_name: z.string().max(30),
	email: z.string().email(),
	phone: z.string().default(""),
    location: z.string(),
    start_date: z.date(),
    employment_type: z.string(),
    legal: z.boolean(),
    veteran: z.boolean(),
    background_check: z.boolean(),
    jobs: z.string().max(1500).default("")
});

export type ApplicantSchema = typeof applicantSchema
