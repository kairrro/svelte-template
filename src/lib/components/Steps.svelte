<script lang="ts">
    import { background, borderColor, descriptionColor, elementBackgrounds, textColor } from "$lib/scripts/stores/appearance";

    export let title: string = "";
    export let description: string = "";
    export let icon: any;
</script>

<div class="flex items-center gap-4 border-[2px] {$borderColor} p-2 rounded-lg w-3/4 md:flex-col md:w-full md:items-start md:gap-4 {$elementBackgrounds}" >
    <div class="p-4 rounded-full {$background} border-[2px] border-[#659c8a]" > 
        {@html icon()}
    </div>
    
    <div class="flex flex-col gap-2" >
        <p class="text-lg {$textColor}" >{title}</p> 
        <p class="{$descriptionColor} text-sm leading-[25px]" >{description}</p>
    </div>
</div>  