<script lang="ts">
    import { descriptionColor } from "$lib/scripts/stores/appearance";
    import { Tick, Cancel } from "$lib/scripts/logos";

    export let name: string = "John";
    export let src: string = "";
    export let approved: boolean = false;
    export let role: string = "Fullstack Developer";
</script>

<div class="flex items-center gap-[12px] w-full rounded-lg p-2 py-4 bg-zinc-900 border-[2px] border-zinc-800" >
    <img 
        {src}
        alt="avatar"
        class="rounded-full h-16 w-16 object-cover"
    />

    <div class="flex flex-col gap-[3px] w-full" >
        <div class="flex items-center justify-between" >
            <p class="text-lg" >{name}</p>
            <div class="flex items-center gap-[6px] text-xs {approved ? "text-green-400" : "text-red-400"}">
                <p>{approved ? "Approved" : "Declined"}</p>
                {@html approved ? Tick("#68d391", "26px") : Cancel("18px", "#EF5350")}
            </div>
        </div>
        <p class="text-sm {$descriptionColor}" >{role}</p>
    </div>
</div>