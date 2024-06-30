<script lang="ts">
    import { 
        descriptionColor 
    } from "$lib/scripts/stores/appearance";

    export let title: string = "";
    export let rules: string[] = [];
</script>

<div class="flex flex-col gap-4" >
    <h2 class="font-semibold text-2xl md:text-xl" >{title}</h2>
    <div class={`flex flex-col gap-6 ${$descriptionColor} text-sm md:text-xs`}>
        {#each rules as rule}
        <p class="leading-loose" >
            {rule}
        </p>
        {/each}
    </div>
</div>