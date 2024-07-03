import type { Action } from "svelte/action";

export type Attributes = {
    'on:outside'?: (event: CustomEvent) => void
}
  
export type clickOutsideAction = Action<HTMLElement, any, Attributes>