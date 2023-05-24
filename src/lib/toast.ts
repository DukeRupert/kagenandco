import type { ToastSettings } from '@skeletonlabs/skeleton';
import { toastStore } from '@skeletonlabs/skeleton';

export function successToast(message: string = '') {
	const t: ToastSettings = {
		message,
		background: 'variant-filled-success'
	};
	toastStore.trigger(t);
}

export function errorToast(message: string = '') {
	const t: ToastSettings = {
		message,
		background: 'variant-filled-error'
	};
	toastStore.trigger(t);
}
