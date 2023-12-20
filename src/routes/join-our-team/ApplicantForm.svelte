<script lang="ts">
	import type { ToastEvent } from '$lib/types/toast';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { ApplicantSchema } from '$lib/validators';
	import { applicantSchema } from '$lib/validators';
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	

	export let data: SuperValidated<ApplicantSchema>
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
			} else {
				dispatch('toast', {
					type: 'success',
					title: 'Success',
					description: 'Success! Your account information has been updated.'
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
		validators: applicantSchema,
		invalidateAll: true,
		taintedMessage: null,
		delayMs: delayMs,
		timeoutMs: timeoutMs
	});
</script>

<form class="space-y-4 divide-y divide-gray-200">
	<div class="space-y-4 divide-y divide-gray-200">
		<div class="pt-8">
			<div class="mt-6 grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="first" class="block text-sm font-medium text-gray-700"> First name </label>
					<div class="mt-1">
						<input
							type="text"
							name="first"
							id="first"
							autocomplete="given-name"
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
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
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
				<div class="sm:col-span-3">
					<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
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
			</fieldset>
		</div>
	</div>

	<div class="pt-5">
		<div class="flex items-center justify-start">
			<button type="submit" class="btn variant-filled-primary"> Submit </button>
		</div>
	</div>
</form>
