<script context="module">
	export async function load({ url, fetch }) {
		const slug = url.pathname;
		const res = await fetch(`/api${slug}.json`);
		if (res.ok) {
			const { data } = await res.json();
			return { props: { data } };
		}
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import { siteData } from '$lib/stores';
	import { createForm } from 'felte';
	import { svelteReporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';

	// SEO
	const pageUrl = `https://${$page.url.hostname}${$page.url.pathname}`;

	// Sanity Content
	export let data;

	// Form Data
	const { form, errors } = createForm({
		validate: (values) => {
			const errors = {};
			if (!values.firstName) {
				errors.firstName = 'Must not be empty';
			}
			if (!values.lastName) {
				errors.lastName = 'Must not be empty';
			}
			if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
				errors.email = 'Must be a valid email';
			}
			if (
				values.tel !== '' &&
				!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
					values.tel
				)
			) {
				errors.tel = 'Must be a valid phone number';
			}
			if (!values.priorTitle) {
				errors.priorTitle = 'Must not be empty';
			}
			if (values.priorTitle && values.priorTitle.length > 80) {
				errors.priorTitle = 'Too long. Entry may not exceed 80 characters';
			}
			if (values.priorTitle && /<.*?script.*\/?>/gi.test(values.priorTitle)) {
				errors.priorTitle = '<script> tags are not allowed';
			}

			return errors;
		},
		extend: svelteReporter,
		onSubmit: async (values) => {
			const response = await fetch('api/applicant', {
				method: 'POST',

				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});

			let error = response.errors;
			if (error) {
				console.log(error);
			} else {
				goto('/success');
			}
		}
	});
</script>

<SvelteSeo
	title={data.title}
	description={data.description}
	canonical={$page.url.hostname + $page.url.pathname}
	openGraph={{
		title: data.title,
		description: data.excerpt,
		url: pageUrl,
		type: 'website',
		images: [
			{
				url: urlFor(data.mainImage.asset).width(600).height(600).format('webp').url(),
				width: '600',
				height: '600',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<!-- Contact section -->
<section class="relative bg-white" aria-labelledby="join-our-team">
	<div class="absolute w-full h-1/2 bg-white" aria-hidden="true" />
	<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="relative bg-white mb-8">
			<h2 id="join-our-team" class="sr-only">Join Our Team</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3">
				<!-- Contact information -->
				<div class="relative overflow-hidden py-10 px-6 bg-secondary sm:px-10 xl:p-12">
					<img
						src="/kccLogoNew.svg"
						alt="Kagen Coffee and Crepes Rooster logo"
						class="w-full h-auto"
					/>
				</div>
				<!-- Contact form -->
				<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<h3 class="text-lg font-medium text-gray-900">Join Our Team!</h3>
					<!-- svelte-ignore component-name-lowercase -->
					<form use:form class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
						<div>
							<label for="first-name" class="block text-sm font-medium text-gray-900"
								>First name</label
							>
							<div class="mt-1">
								<input
									type="text"
									id="first-name"
									name="firstName"
									autocomplete="given-name"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
								<ValidationMessage for="firstName" let:messages>
									{messages || ''}
								</ValidationMessage>
							</div>
						</div>
						<div>
							<label for="last-name" class="block text-sm font-medium text-gray-900"
								>Last name</label
							>
							<div class="mt-1">
								<input
									type="text"
									id="last-name"
									name="lastName"
									autocomplete="family-name"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
								<ValidationMessage for="lastName" let:messages>
									{messages || ''}
								</ValidationMessage>
							</div>
						</div>
						<div class="hidden">
							<label for="password" class="block text-sm font-medium text-gray-900">Password</label>
							<div class="mt-1">
								<input
									type="text"
									id="password"
									name="password"
									class="block py-3 px-4 w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-900">Email</label>
							<div class="mt-1">
								<input
									id="email"
									type="email"
									name="email"
									autocomplete="email"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
								<ValidationMessage for="email" let:messages>
									{messages || ''}
								</ValidationMessage>
							</div>
						</div>
						<div>
							<div class="flex justify-between">
								<label for="tel" class="block text-sm font-medium text-gray-900">Phone</label>
								<span id="tel-optional" class="text-sm text-gray-500">Optional</span>
							</div>
							<div class="mt-1">
								<input
									type="text"
									id="tel"
									name="tel"
									autocomplete="tel"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									aria-describedby="tel-optional"
								/>
								<ValidationMessage for="tel" let:messages>
									{messages || ''}
								</ValidationMessage>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="location" class="block text-sm font-medium text-gray-700">Location</label>
							<select
								id="location"
								name="location"
								class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-matisse-500 focus:border-matisse-500 sm:text-sm rounded-md"
							>
								<option selected>Tri-Cities</option>
								<option>Spokane</option>
							</select>
						</div>
						<div class="sm:col-span-2">
							<!-- Legal to work? -->
							<label>
								Are you legally eligible to work in the US?
								<input
									type="checkbox"
									name="legal"
									value="Yes"
									class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
								/>
							</label>
						</div>
						<div class="sm:col-span-2">
							<!-- Veteran? -->
							<label>
								Are you a Veteran?
								<input
									type="checkbox"
									name="veteran"
									value="Yes"
									class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
								/>
							</label>
						</div>
						<div class="sm:col-span-2">
							<!-- Background Check? -->
							<label>
								If selected for employment are you willing to submit to a background check?
								<input
									type="checkbox"
									name="backgroundCheck"
									value="Yes"
									class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
								/>
							</label>
						</div>
						<div class="sm:col-span-2">
							<!-- Start Date? -->
							<label>
								Available start date:
								<input type="date" name="startDate" required />
							</label>
						</div>
						<div class="sm:col-span-2">
							<!-- Full-time, Part-time or Seasonal/Temporary? -->
							<fieldset>
								<legend>Type of position desired?</legend>
								<p>
									<label>
										<input
											class="focus:ring-custard-500 text-custard-500"
											type="radio"
											name="employmentType"
											value="full-time"
										/> Full-time
									</label>
								</p>
								<p>
									<label>
										<input
											class="focus:ring-custard-500 text-custard-500"
											type="radio"
											name="employmentType"
											value="part-time"
										/> Part-time
									</label>
								</p>
								<p>
									<label>
										<input
											class="focus:ring-custard-500 text-custard-500"
											type="radio"
											name="employmentType"
											value="seasonal"
										/> Seasonal/Temporary
									</label>
								</p>
							</fieldset>
						</div>
						<div class="sm:col-span-2">
							<label for="priorTitle" class="block text-sm font-medium text-gray-900"
								>What was your last job title?</label
							>
							<div class="mt-1">
								<input
									type="text"
									id="priorTitle"
									name="priorTitle"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
								<ValidationMessage for="priorTitle" let:messages>
									{messages || ''}
								</ValidationMessage>
							</div>
						</div>
						<div class="sm:col-span-2 sm:flex sm:justify-end md:col-span-1">
							<button
								type="submit"
								value="Submit Form"
								class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 rounded-3xl border border-transparent shadow-sm bg-custard-500 text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
