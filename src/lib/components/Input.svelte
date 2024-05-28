<script lang="ts">
    export let name: string = "";
    export let id: string = ""; 
    export let value: string = "";
    export let textarea: boolean = false;
    
    export let currentTextLength: number = 0;
    export let maxTextLength: number = 400;

    $: exceedsMaxLength = currentTextLength > maxTextLength;

    function handleKeyPress(event: KeyboardEvent) {
        if (currentTextLength >= maxTextLength && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }
</script>

<div class="flex flex-col gap-2" >
    <label for={id} class="text-sm text-zinc-300" >{name}</label>
    
    {#if id === 'email'}
        <input type="email" id={id} class="border text-sm border-zinc-800 bg-zinc-900 pl-2 h-10 rounded-lg outline-none outline-none border-[2px] focus:border-indigo-700" bind:value={value} on:keypress={handleKeyPress} />

    {:else}
        {#if textarea}
            <textarea id={id} class="border text-sm border-zinc-800 bg-zinc-900 pl-2 h-28 resize-none rounded-lg outline-none outline-none border-[2px] focus:border-indigo-700" bind:value={value} on:keypress={handleKeyPress} />
            <div class={`${exceedsMaxLength ? "text-red-400" : "text-zinc-300"} text-sm`}>
                {currentTextLength} / {maxTextLength}
            </div>
         {:else}
            <input type="text" id={id} class="border text-sm border-zinc-800 bg-zinc-900 pl-2 h-10 rounded-lg outline-none border-[2px] focus:border-indigo-700" bind:value={value} on:keypress={handleKeyPress} />
        {/if}
    {/if}
</div>