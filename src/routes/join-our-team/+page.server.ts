import type { PageServerLoad, Actions } from './$types';
import { superValidate, message } from 'sveltekit-superforms/server';
import { applicantSchema } from '$lib/validators';
import { POCKETBASE_API_URL, POCKETBASE_AUTH_TOKEN } from '$env/static/private';


export const load: PageServerLoad = async function () {
  // Setup forms
  const form = await superValidate(applicantSchema);

  return {
    form
  };
};

export const actions: Actions = {
  default: async ({ request, fetch }) => {
    console.log('Submit applicant email');
    // Cast Superform magic
    const form = await superValidate(request, applicantSchema);
    // Check the honeypot
    if (form.data.password !== '') return message(form, 'Nice try bot', { status: 400 });
    // Check if data is valid
    if (!form.valid) return message(form, 'Invalid form', { status: 400 });
    // Send email to applicant
    try {
      // Send email
      const emailRes = await fetch('/api/postmark/applicant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.data)
      });

      if (emailRes.status !== 200) {
        return message(form, 'Email service error. Please try again later.', { status: 500 });
      }

      // Store in database
      const dbRes = await fetch(`${POCKETBASE_API_URL}/api/collections/applicants/records`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': POCKETBASE_AUTH_TOKEN
        },
        body: JSON.stringify({
          first_name: form.data.first_name || '',
          last_name: form.data.last_name || '',
          email: form.data.email || '',
          phone: form.data.phone || null,
          location: form.data.location || '',
          start_date: form.data.start_date || '',
          employment_type: form.data.employment_type || '',
          legal: form.data.legal || false,
          veteran: form.data.veteran || false,
          background_check: form.data.background_check || false,
          work_history: form.data.work_history || '',
          favorite: false,
          contacted: false
        })
      });

      if (dbRes.status !== 200) {
        console.error('Database storage failed:', await dbRes.text());
        // Continue if database fails but email succeeded
      }

      return { form };

    } catch (err) {
      console.log(err);
    }
    return { form };
  }
};
