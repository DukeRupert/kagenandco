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

			return errors;
		},
		extend: svelteReporter,
		onSubmit: async (values) => {
			const response = await fetch('api/applicant', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(values)
			});

			if (response.ok) {
				goto('/success');
			} else {
				console.log(response.statusText);
			}
		}
	});

	// Job counter
	let count = 1;
	const maxCount = 5;
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
	<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row">
			<div class="flex-1 flex flex-col">
				<div class="relative overflow-hidden py-10 px-6 bg-secondary sm:px-10 xl:p-12">
					<img
						src="/kccLogoNew.svg"
						alt="Kagen Coffee and Crepes Rooster logo"
						class="w-full max-w-2xl h-auto m-auto"
					/>
				</div>
			</div>
			<div class="flex-1 flex flex-col">
				<div class="relative bg-white mb-8">
					<h2 id="join-our-team" class="sr-only">Join Our Team</h2>

					<form use:form class="space-y-8 divide-y divide-gray-200">
						<div class="space-y-8 divide-y divide-gray-200">
							<div class="pt-8">
								<div>
									<h3 class="text-lg leading-6 font-medium text-gray-900">Join Our Team</h3>
									<!-- <p class="mt-1 text-sm text-gray-500">
								Use a permanent address where you can receive mail.
							</p> -->
								</div>
								<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
									<div class="sm:col-span-3">
										<label for="firstName" class="block text-sm font-medium text-gray-700">
											First name
										</label>
										<div class="mt-1">
											<input
												type="text"
												name="firstName"
												id="firstName"
												autocomplete="given-name"
												class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
											/>
											<ValidationMessage for="firstName" let:messages>
												{messages || ''}
											</ValidationMessage>
										</div>
									</div>

									<div class="sm:col-span-3">
										<label for="lastName" class="block text-sm font-medium text-gray-700">
											Last name
										</label>
										<div class="mt-1">
											<input
												type="text"
												name="lastName"
												id="lastName"
												autocomplete="family-name"
												class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
											/>
											<ValidationMessage for="lastName" let:messages>
												{messages || ''}
											</ValidationMessage>
										</div>
									</div>

									<div class="sm:col-span-3">
										<label for="email" class="block text-sm font-medium text-gray-700">
											Email address
										</label>
										<div class="mt-1">
											<input
												id="email"
												name="email"
												type="email"
												autocomplete="email"
												class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
											/>
											<ValidationMessage for="email" let:messages>
												{messages || ''}
											</ValidationMessage>
										</div>
									</div>

									<div class="sm:col-span-3">
										<label for="tel" class="block text-sm font-medium text-gray-700"> Phone </label>

										<div class="mt-1">
											<input
												type="text"
												name="tel"
												id="tel"
												autocomplete="tel"
												class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
											/>
											<ValidationMessage for="tel" let:messages>
												{messages || ''}
											</ValidationMessage>
										</div>
									</div>

									<div class="sm:col-span-3">
										<label for="location" class="block text-sm font-medium text-gray-700">
											Location
										</label>
										<div class="mt-1">
											<select
												id="location"
												name="location"
												class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
											>
												<option selected>Tri-Cities</option>
												<option>Spokane</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="mt-6">
								<fieldset>
									<!-- <legend class="text-base font-medium text-gray-900"> By Email </legend> -->
									<div class="mt-4 space-y-4">
										<div class="relative flex items-start">
											<div class="flex items-center h-5">
												<input
													type="checkbox"
													name="legal"
													value="Yes"
													class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
												/>
											</div>
											<div class="ml-3 text-sm">
												<label for="legal" class="font-medium text-gray-700"
													>Are you legally eligible to work in the US?</label
												>
											</div>
										</div>
										<div class="relative flex items-start">
											<div class="flex items-center h-5">
												<input
													type="checkbox"
													name="veteran"
													value="Yes"
													class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
												/>
											</div>
											<div class="ml-3 text-sm">
												<label for="veteran" class="font-medium text-gray-700"
													>Are you a veteran?</label
												>
											</div>
										</div>
										<div class="relative flex items-start">
											<div class="flex items-center h-5">
												<input
													type="checkbox"
													name="backgroundCheck"
													value="Yes"
													class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
												/>
											</div>
											<div class="ml-3 text-sm">
												<label for="backgroundCheck" class="font-medium text-gray-700"
													>Are you willing to submit to a background check?</label
												>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset class="mt-6">
									<div>
										<legend class="text-base font-medium text-gray-900"> Start Date </legend>
										<p class="text-sm text-gray-500">What date would you be available to start?</p>
									</div>
									<div class="mt-4 space-y-4">
										<div class="relative flex items-start">
											<div class="flex items-center h-5">
												<input
													type="date"
													name="startDate"
													class="border-gray-300 rounded"
													required
												/>
											</div>
											<div class="ml-3 text-sm" />
										</div>
									</div>
								</fieldset>
								<fieldset class="mt-6">
									<div>
										<legend class="text-base font-medium text-gray-900"> Employment Type </legend>
										<p class="text-sm text-gray-500">What kind of job are you looking for?</p>
									</div>
									<div class="mt-4 space-y-4">
										<div class="flex items-center">
											<input
												id="full-time"
												class="focus:ring-custard-500 text-custard-500"
												type="radio"
												name="employmentType"
												value="full-time"
											/>
											<label for="full-time" class="ml-3 block text-sm font-medium text-gray-700">
												Full-Time
											</label>
										</div>
										<div class="flex items-center">
											<input
												id="part-time"
												class="focus:ring-custard-500 text-custard-500"
												type="radio"
												name="employmentType"
												value="part-time"
											/>
											<label for="part-time" class="ml-3 block text-sm font-medium text-gray-700">
												Part-time
											</label>
										</div>
										<div class="flex items-center">
											<input
												id="seasonal"
												class="focus:ring-custard-500 text-custard-500"
												type="radio"
												name="employmentType"
												value="seasonal"
											/>
											<label for="seasonal" class="ml-3 block text-sm font-medium text-gray-700">
												Seasonal
											</label>
										</div>
									</div>
								</fieldset>
							</div>
							<div class="mt-6">
								<fieldset class="mt-6">
									<div>
										<legend class="text-base font-medium text-gray-900"> Work History </legend>
										<p class="text-sm text-gray-500">Please list your prior work experience.</p>
									</div>
									{#each Array(count) as _, i}
										<div class="mt-4 space-y-4">
											<div class="relative flex items-start">
												<div>
													<label
														for="jobs[{i}][title]"
														class="block text-sm font-medium text-gray-900">Job Title</label
													>
													<div class="mt-1">
														<input
															type="text"
															id="jobs[{i}][title]"
															name="jobs[{i}][title]"
															class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
														/>
													</div>
												</div>
												<div class="mx-4">
													<label
														for="jobs[{i}][years]"
														class="block text-sm font-medium text-gray-900">How Long?</label
													>
													<div class="mt-1 flex">
														<input
															type="number"
															placeholder="years"
															id="jobs[{i}][years]"
															name="jobs[{i}][years]"
															class="py-3 px-2 flex-initial w-24 shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
														/>

														<input
															type="number"
															placeholder="months"
															id="jobs[{i}][months]"
															name="jobs[{i}][months]"
															class="py-3 px-2 ml-4 flex-inital w-24 shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
														/>
													</div>
												</div>

												<!-- <div class="flex items-center h-5">
										<input type="date" name="startDate" class="border-gray-300 rounded" required />
									</div> -->
											</div>
										</div>
									{/each}
									<div class="mt-4 space-y-4">
										<div>
											<button
												on:click|preventDefault={() => (count = count + 1)}
												class="mt-2 px-4 py-3 shadow-sm text-gray-900 border border-gray-300 rounded-md {count >
												4
													? 'hidden'
													: 'visible'}">+</button
											>
										</div>
									</div>
								</fieldset>
							</div>
						</div>

						<div class="pt-5">
							<div class="flex items-center justify-center">
								<button
									type="submit"
									value="Submit Form"
									class="w-full max-w-xs flex items-center justify-center px-6 py-3 rounded-3xl border border-transparent shadow-sm bg-custard-500 text-base text-center font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
