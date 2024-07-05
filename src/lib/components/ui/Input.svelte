<script lang="ts">
    import { 
        descriptionColor,
        inputBorder,
        inputBackground,
        textColor
    } from "$lib/scripts/stores/appearance";

    export let name: string = "";
    export let id: string = ""; 
    export let value: any = "";
    export let textarea: boolean = false;
    export let type: string = "";
    export let placeholder: string = "";
    export let disabled: boolean = false;
    
    export let maxTextLength: number = 400;
    $: currentTextLength = (value ?? '').length;

    $: exceedsMaxLength = currentTextLength > maxTextLength;

    function numbersOnly(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const filteredInput = input.replace(/[^0-9]/g, '');
        value = filteredInput;      
    }
</script>

<div class={`flex flex-col gap-2 w-full ${$textColor}`}>
    <label for={id} class={`text-sm font-medium ${$textColor}`} >{name}</label>
    
    {#if id === 'email'}
        <input 
            type="email" 
            id={id} 
            placeholder={placeholder} 
            class={`${$inputBorder} ${$inputBackground} text-sm pl-2 h-10 rounded-lg outline-none w-full`}
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />

    {:else if type === 'password'}
        <input 
            type="password" 
            id={id} 
            placeholder={placeholder} 
            class={`${$inputBorder} ${$inputBackground} text-sm pl-2 h-10 rounded-lg outline-none w-full`}
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />

    {:else if type === 'phone'}
        <input 
            type="phone" 
            id={id} 
            placeholder={placeholder} 
            class={`${$inputBorder} ${$inputBackground} text-sm pl-2 h-10 rounded-lg outline-none w-full`}
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />

    {:else if type === 'number'}
        <input 
            type="text" 
            id={id} 
            placeholder={placeholder} 
            class={`${$inputBorder} ${$inputBackground} text-sm pl-2 h-10 rounded-lg outline-none w-full`}
            bind:value={value} 
            maxlength={maxTextLength}
            on:input={numbersOnly}
            disabled={disabled}
        />

    {:else if textarea}
        <textarea 
            id={id} 
            class={`${$inputBorder} ${$inputBackground} text-sm pl-2 h-28 resize-none rounded-lg outline-none w-full`}
            bind:value={value} 
            maxlength={maxTextLength} 
        />
        <div class={`${exceedsMaxLength ? "text-red-400" : {$descriptionColor}} text-sm`}>
            {currentTextLength} / {maxTextLength}
        </div>

    {:else}
        <input 
            type="text" 
            placeholder={placeholder} 
            id={id} 
            class={`${$inputBorder} ${$inputBackground} text-sm pl-2 h-10 rounded-lg outline-none w-full`}
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />
    {/if}
</div>