<script lang="ts">
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function handleSuccess(event) {
		const { response, ...context } = event.detail;
		goto('/success');
	}

	function handleError(event) {
		const { error, ...context } = event.detail;
		// `FelteSubmitError` contains a `response` property
		// with the response from `fetch`
		const response = error.response;
		// Do something with the error
		console.log(`Error : ${response.status} ${response.body}`);
		goto('/error');
	}

	const { form, errors, data, addField } = createForm({
		initialValues: {
			jobs: [{ title: '', years: 0, months: 0 }]
		},
		validate: (values) => {
			const errors = {};
			if (!values.first) {
				errors.first = 'Must not be empty';
			}
			if (!values.last) {
				errors.last = 'Must not be empty';
			}
			if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
				errors.email = 'Must be a valid email';
			}
			if (
				!values.phone ||
				!/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/gm.test(values.phone)
			) {
				errors.phone = 'Must be a valid phone number';
			}
			return errors;
		},
		extend: reporter
	});

	$: jobs = $data.jobs;

	function addJob(index) {
		return () => {
			addField('jobs', { title: '', years: 0, months: 0 }, index);
		};
	}

	// Job counter
	let count = 0;
	const maxCount = 5;

	// Placeholder Data
	let crewChoice = 0;
	const crew = [
		{ first: 'Malcom', last: 'Reynolds', email: 'browncoat@gmail.com' },
		{ first: 'Zoe', last: 'Washburne', email: 'slinkydress@gmail.com' },
		{ first: 'River', last: 'Tam', email: 'nopowerintheverse@gmail.com' },
		{ first: 'Simon', last: 'Tam', email: 'traumadoc@gmail.com' },
		{ first: 'Kaylee', last: 'Frye', email: 'naturaltalent@gmail.com' },
		{ first: 'Inara', last: 'Sera', email: 'lonelycompanion@gmail.com' },
		{ first: 'Hoban', last: 'Washburne', email: 'aleafonthewind@gmail.com' },
		{ first: 'Jayne', last: 'Cobb', email: 'vera@gmail.com' }
	];
	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	};

	onMount(() => {
		crewChoice = getRandomInt(crew.length);
	});
</script>

<form
	use:form
	action="/api/applicant"
	method="POST"
	on:feltesuccess={handleSuccess}
	on:felteerror={handleError}
	class="space-y-8 divide-y divide-gray-200"
>
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
					<label for="first" class="block text-sm font-medium text-gray-700"> First name </label>
					<div class="mt-1">
						<input
							type="text"
							name="first"
							id="first"
							autocomplete="given-name"
							placeholder={crew[crewChoice].first}
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="firstName" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="last" class="block text-sm font-medium text-gray-700"> Last name </label>
					<div class="mt-1">
						<input
							type="text"
							name="last"
							id="last"
							autocomplete="family-name"
							placeholder={crew[crewChoice].last}
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="lastName" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
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
				<div class="sm:col-span-3">
					<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							placeholder={crew[crewChoice].email}
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="email" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="tel" class="block text-sm font-medium text-gray-700"> Phone </label>

					<div class="mt-1">
						<input
							type="text"
							name="phone"
							id="phone"
							autocomplete="phone"
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="phone" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="location" class="block text-sm font-medium text-gray-700"> Location </label>
					<div class="mt-1">
						<select
							id="location"
							name="location"
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
							<label for="veteran" class="font-medium text-gray-700">Are you a veteran?</label>
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
							<input type="date" name="startDate" class="border-gray-300 rounded" required />
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
				{#each jobs as job, index}
					<div class="mt-4 space-y-4">
						<div class="relative flex items-start">
							<div>
								<label for="jobs.{index}.title" class="block text-sm font-medium text-gray-900"
									>Job Title</label
								>
								<div class="mt-1">
									<input
										type="text"
										name="jobs.{index}.title"
										class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div class="mx-4">
								<label for="jobs.{index}.years" class="block text-sm font-medium text-gray-900"
									>How Long?</label
								>
								<div class="mt-1 flex">
									<input
										type="number"
										placeholder="years"
										name="jobs.{index}.years"
										class="py-3 px-2 flex-initial w-24 shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									/>

									<input
										type="number"
										placeholder="months"
										name="jobs.{index}.months"
										class="py-3 px-2 ml-4 flex-inital w-24 shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									/>
								</div>
							</div>
						</div>
					</div>
					{#if index === jobs.length - 1}
						<div class="mt-2 space-y-4">
							<div>
								<button
									on:click|preventDefault={addJob(count + 1)}
									class="mt-2 px-4 py-3 shadow-sm text-gray-900 border border-gray-300 rounded-md {count >
									4
										? 'hidden'
										: 'visible'}">+</button
								>
							</div>
						</div>
					{/if}
				{/each}
			</fieldset>
		</div>
	</div>

	<div class="pt-5">
		<div class="flex items-center justify-center">
			<button
				type="submit"
				class="w-full max-w-xs flex items-center justify-center px-6 py-3 rounded-3xl border border-transparent shadow-sm bg-custard-500 text-base text-center font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
			>
				Submit
			</button>
		</div>
	</div>
</form>
