import type { Action } from "svelte/action";

export type Attributes = {
    'on:outside'?: (event: CustomEvent) => void
}
  
export type clickOutsideAction = Action<HTMLElement, any, Attributes>;

export interface CustomResponse {
    success: boolean;
    message?: any;
    error?: string
}

export type NotificationTypes = "success" | "error" | "warning";