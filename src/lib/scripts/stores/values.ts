import { writable } from "svelte/store";

export const notificationState = writable<boolean>(false);