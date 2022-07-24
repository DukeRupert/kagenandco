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
		// goto('/error');
	}

	const { form, errors } = createForm({
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
				values.phone !== '' &&
				!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
					values.phone
				)
			) {
				errors.phone = 'Must be a valid phone number';
			}
			if (!values.subject) {
				errors.subject = 'Must not be empty';
			}
			if (values.subject && values.subject.length > 80) {
				errors.subject = 'Too long. Subject may not exceed 80 characters';
			}
			if (values.subject && /<.*?script.*\/?>/gi.test(values.subject)) {
				errors.subject = '<script> tags are not allowed';
			}
			if (!values.body) {
				errors.body = 'Must not be empty';
			}
			// Message cannot exceed 500 characters
			if (values.body && values.body.length > 500) {
				errors.body = 'Too many characters.';
			}
			// Sanitize body of script tags
			if (values.body && /<.*?script.*\/?>/gi.test(values.body)) {
				errors.body = '<script> tags are not allowed';
			}
			return errors;
		},
		extend: reporter
	});

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
	action="/api/contact-us"
	method="POST"
	on:feltesuccess={handleSuccess}
	on:felteerror={handleError}
	class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
>
	<div>
		<label for="first-name" class="block text-sm font-medium text-gray-900">First name</label>
		<div class="mt-1">
			<input
				type="text"
				id="first-name"
				name="first"
				autocomplete="given-name"
				placeholder={crew[crewChoice].first}
				class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
			/>
			<ValidationMessage for="first" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<div>
		<label for="last-name" class="block text-sm font-medium text-gray-900">Last name</label>
		<div class="mt-1">
			<input
				type="text"
				id="last-name"
				name="last"
				autocomplete="family-name"
				placeholder={crew[crewChoice].last}
				class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
			/>
			<ValidationMessage for="last" let:messages>
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
	<div>
		<label for="email" class="block text-sm font-medium text-gray-900">Email</label>
		<div class="mt-1">
			<input
				id="email"
				type="email"
				name="email"
				autocomplete="email"
				placeholder={crew[crewChoice].email}
				class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
			/>
			<ValidationMessage for="email" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
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
				id="phone"
				name="phone"
				autocomplete="tel"
				placeholder="123-456-7890"
				class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
				aria-describedby="tel-optional"
			/>
			<ValidationMessage for="phone" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
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
		<label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
		<div class="mt-1">
			<input
				type="text"
				id="subject"
				name="subject"
				class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
			/>
			<ValidationMessage for="subject" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>
	<div class="sm:col-span-2">
		<div class="flex justify-between">
			<label for="message" class="block text-sm font-medium text-gray-900">Message</label>
			<span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
		</div>
		<div class="mt-1">
			<textarea
				id="body"
				name="body"
				rows="4"
				class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border border-gray-300 rounded-md"
				aria-describedby="message-max"
			/>
			<ValidationMessage for="body" let:messages>
				<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
			</ValidationMessage>
		</div>
	</div>

	<div class="sm:col-span-2 sm:flex sm:justify-end md:col-span-1">
		<button
			type="submit"
			class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 rounded-3xl border border-transparent shadow-sm bg-custard-500 text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
		>
			Submit
		</button>
	</div>
</form>
