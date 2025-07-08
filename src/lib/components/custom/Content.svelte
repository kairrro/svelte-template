<script lang="ts">
    import { descriptionColor } from "$lib/scripts/stores/appearance";

    export let title: string = "";
    export let src: string = "";
    export let id: string = "article-image"
    export let description: string[] = [];
    export let reverse: boolean = false;
</script>

<section class="flex flex-row gap-14 max-w-[1279px] mx-auto px-6 lg:flex-col md:gap-10">
    <img 
        {src}
        alt={id}
        class="w-full max-w-[550px] lg:max-w-[1023px] rounded-2xl {reverse ? "order-2" : ""}"
    />

    <div class="flex flex-col gap-4 {reverse ? "order-1" : ""}" >
        <h1 class="text-3xl font-semibold" >{title}</h1>
        <div class="flex flex-col gap-4">
            {#each description as paragraph}
                <p class="text-sm {$descriptionColor} leading-loose">
                    {paragraph}
                </p>
            {/each}
        </div>
    </div>
</section>