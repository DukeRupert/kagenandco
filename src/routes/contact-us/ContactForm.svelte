<script lang="ts">
	import type { ToastEvent } from '$lib/types/toast';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { ContactSchema } from '$lib/validators';
	import { contactSchema } from '$lib/validators';
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import { AlertCircle } from 'lucide-svelte';

	export let data: SuperValidated<ContactSchema>;
	export let delayMs = 200;
	export let timeoutMs = 8000;

	const dispatch = createEventDispatcher<ToastEvent>();

	const { form, errors, constraints, delayed, enhance } = superForm(data, {
		onUpdated({ form }) {
			if (form.message) {
				if ($page.status === 400)
					dispatch('toast', {
						type: 'warning',
						title: 'Warning',
						description: form.message
					});
				if ($page.status === 500)
					dispatch('toast', {
						type: 'error',
						title: 'Error',
						description: form.message
					});
			} else {
				dispatch('toast', {
					type: 'success',
					title: 'Success',
					description: 'Success! Your message has been sent.'
				});
			}
		},
		onError({ result }) {
			console.log(result);
			dispatch('toast', {
				type: 'error',
				title: 'Error',
				description: result.error.message
			});
		},
		validators: contactSchema,
		resetForm: false,
		taintedMessage: false,
		delayMs: delayMs,
		timeoutMs: timeoutMs
	});
</script>

<form method="POST" use:enhance>
	<div class="space-y-6 md:space-y-12">
		<div class="mt-6 grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-6">
			<div class="sm:col-span-3">
				<label for="first_name" class="block text-sm font-medium text-gray-700"> First name </label>
				<div class="mt-1">
					<input
						type="text"
						name="first_name"
						id="first_name"
						autocomplete="given-name"
						aria-invalid={$errors.first_name ? 'true' : undefined}
						bind:value={$form.first_name}
						{...$constraints.first_name}
						class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
					{#if $errors.first_name}
						<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<AlertCircle class="h-5 w-5 text-red-500" />
						</div>
					{/if}
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="last_name" class="block text-sm font-medium text-gray-700"> Last name </label>
				<div class="mt-1">
					<input
						type="text"
						name="last_name"
						id="last_name"
						autocomplete="family-name"
						aria-invalid={$errors.last_name ? 'true' : undefined}
						bind:value={$form.last_name}
						{...$constraints.last_name}
						class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
					{#if $errors.last_name}
						<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<AlertCircle class="h-5 w-5 text-red-500" />
						</div>
					{/if}
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
						aria-invalid={$errors.email ? 'true' : undefined}
						bind:value={$form.email}
						{...$constraints.email}
						class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
					{#if $errors.email}
						<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<AlertCircle class="h-5 w-5 text-red-500" />
						</div>
					{/if}
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="phone" class="block text-sm font-medium text-gray-700"> Phone </label>

				<div class="mt-1">
					<input
						type="text"
						name="phone"
						id="phone"
						autocomplete="phone"
						aria-invalid={$errors.phone ? 'true' : undefined}
						bind:value={$form.phone}
						{...$constraints.phone}
						class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
					{#if $errors.phone}
						<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<AlertCircle class="h-5 w-5 text-red-500" />
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div>
			<label for="location" class="block text-base font-medium text-gray-900"> Location </label>
			<p class="text-sm text-gray-500">Which location is your message about?</p>
			<div class="mt-1">
				<select
					id="location"
					name="location"
					bind:value={$form.location}
					class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block sm:text-sm border-gray-300 rounded-md"
				>
					<option>270 Williams Blvd</option>
					<option>308 W Kennewick Ave</option>
					<option selected>All</option>
				</select>
			</div>
		</div>

		
		<div>
			<label for="message" class="block text-base font-medium text-gray-900"> Message </label>
			<p class="text-sm text-gray-500">Please keep your message under 1500 characters in length. If that's not enough, please call us :)</p>

			<div class="mt-2">
				<textarea
					id="message"
					name="message"
					rows="3"
					aria-invalid={$errors.message? 'true' : undefined}
					bind:value={$form.message}
					{...$constraints.message}
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custard-600 sm:text-sm sm:leading-6"
				></textarea>
				{#if $errors.message}
					<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<AlertCircle class="h-5 w-5 text-red-500" />
					</div>
				{/if}
			</div>
		</div>
		<div class="flex items-center justify-start">
			<button type="submit" class="btn variant-filled-primary"> Submit </button>
		</div>
	</div>
</form>
