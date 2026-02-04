<script lang="ts">
    import { textColor, descriptionColor } from "$lib/scripts/stores/appearance";

    export let title: string = "";
    export let links: { href: string; text: string }[] = [];
</script>

<div class="flex flex-col gap-4 text-sm">
    <p class="text-lg font-medium {$textColor}" >
        {title}
    </p>

    <div class="flex flex-col gap-2" >
        {#each links as link}
            <a 
                href={link.href} 
                class="hover:underline underline-offset-2 mr-auto {$descriptionColor}" 
            >
                {link.text}
            </a>
        {/each}
    </div>
</div>