<script lang="ts">
    import { Techstack, Calendar } from "$lib/scripts/logos";
    import { descriptionColor } from "$lib/scripts/stores/appearance";

    export let title: string = "";
    export let description: string = "";
    export let techstack: string[] = [];
</script>

<div class="flex flex-col gap-2 bg-zinc-800 w-full rounded-lg p-2 px-4" >
    <p class="text-xl font-medium" >
        {title}
    </p>

    <p class="text-sm {$descriptionColor}" >
        {description}
    </p>

    <div class="flex items-center gap-6 md:flex-col md:items-start md:gap-2 pt-4" >
        <a class="flex items-center gap-[6px] md:items-start" href="/" >
            {@html Techstack("#f1f1f1", "20px")}
            <p class="text-xs" >Techstack: Python, JavaScript</p>
        </a>
        
        <div class="flex items-center gap-[6px]">
            {@html Calendar("#f1f1f1", "20px")}
            <p class="text-xs" >Created in 2023</p>
        </div>
    </div>
</div>