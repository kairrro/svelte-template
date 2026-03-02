<script lang="ts">
  import { descriptionColor, textColor } from "$lib/scripts/stores/appearance";

    export let title: string = "Title";
    export let description: string = "Description";
    export let src: string = "";
</script>

<div class="flex gap-5">
    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-400/20">
        {@html src}
    </div>
    <div>
    <h3 class="font-semibold {$textColor}">{title}</h3>
    <p class="{$descriptionColor} mt-2 max-w-md">
        {description}
    </p>
    </div>
</div>