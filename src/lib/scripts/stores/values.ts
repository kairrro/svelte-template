import { writable } from "svelte/store";
import type { NotificationTypes } from "../types/misc";

export const notificationState = writable<boolean>(false);
export const notificationMessage = writable<string>("");
export const notificationType = writable<NotificationTypes>("error");