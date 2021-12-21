import { writable } from 'svelte/store';

export const mobile = writable(false);

export const dropdown = writable(false);
function toggleDropdown() {
	dropdown.update((value) => !value);
}

export const menuToggle = writable(false);
function toggleSubmenuLocation() {
	menuToggle.update((value) => !value);
}

export const orderToggle = writable(false);
function toggleSubmenuOrder() {
	orderToggle.update((value) => !value);
}

export const orderModal = writable(false);
export function toggleOrderModal() {
	orderModal.update((value) => !value);
}

export const menuModal = writable(false);
export function toggleMenuModal() {
	menuModal.update((value) => !value);
}
