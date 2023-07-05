<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { successToast, errorToast } from '$lib/toast';
	import type { ActionData } from './$types';

	export let data: ActionData;

	$: if (data && data.success) {
		const message = 'Message sent.';
		successToast(message);
	}

	$: if (data && !data.success) {
		const message = 'Error. Please try again later or call us.';
		errorToast(message);
	}

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

<div id="contact-us" class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
	<div class="relative mx-auto max-w-4xl mb-8">
		<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
			<h2
				id="contact-heading"
				class="unstyled text-lg font-semibold leading-8 tracking-tight text-primary-600"
			>
				Contact us
			</h2>
			<h3 class="unstyled mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				We want to hear from you!
			</h3>
			<form
				action="/?/contact"
				method="POST"
				class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
				use:enhance
			>
				<div>
					<label for="first_name" class="block text-sm font-medium text-gray-900">First name</label>
					<div class="mt-1">
						<input
							required
							type="text"
							id="first_name"
							name="first_name"
							autocomplete="given-name"
							placeholder={crew[crewChoice].first}
							class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
						/>
					</div>
				</div>
				<div>
					<label for="last_name" class="block text-sm font-medium text-gray-900">Last name</label>
					<div class="mt-1">
						<input
							required
							type="text"
							id="last_name"
							name="last_name"
							autocomplete="family-name"
							placeholder={crew[crewChoice].last}
							class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
						/>
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
							required
							id="email"
							type="email"
							name="email"
							autocomplete="email"
							placeholder={crew[crewChoice].email}
							class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
						/>
					</div>
				</div>
				<div>
					<div class="flex justify-between">
						<label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
						<span id="phone-optional" class="text-sm text-gray-500">Optional</span>
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
					</div>
				</div>
				<div class="hidden">
					<label for="location" class="block text-sm font-medium text-gray-700">Location</label>
					<select
						id="location"
						name="location"
						class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-matisse-500 focus:border-matisse-500 sm:text-sm rounded-md"
					>
						<option selected>Tri-Cities</option>
					</select>
				</div>
				<div class="sm:col-span-2">
					<label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
					<div class="mt-1">
						<input
							required
							type="text"
							id="subject"
							name="subject"
							class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<div class="flex justify-between">
						<label for="body" class="block text-sm font-medium text-gray-900">Message</label>
						<span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
					</div>
					<div class="mt-1">
						<textarea
							required
							id="body"
							name="body"
							rows="4"
							class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border border-gray-300 rounded-md"
							aria-describedby="message-max"
						/>
					</div>
				</div>

				<div
					class="flex justify-end sm:col-span-2 sm:flex md:col-span-1 md:col-start-2 md:justify-end"
				>
					<button type="submit" class="btn variant-filled-primary"> Send message </button>
				</div>
			</form>
		</div>
	</div>
</div>
