<script lang="ts">
    import { Failed, Success, Warning } from "$lib/scripts/logos";
    import { slide } from "svelte/transition";
    
    export let message: string = "";
    export let type: string = "";

    let color: string = "";

    if (type === "success"){
        color = "bg-green-400";
    } else if (type === "failed"){
        color = "bg-red-500";
    } else if (type === "warning"){
        color = "bg-yellow-400";
    }

    const titleValues: Record<string, string> = {
        error: "Error",
        success: "Success",
        warning: "Warning",
    }
</script>


<button class={`fixed bottom-[20px] right-[20px] z-10 hover:opacity-50 transition`} transition:slide>
    <div class="flex items-center h-20">
        <div class={`w-[3px] h-full ${color}`}></div>

        <div class="flex items-center justify-center gap-4 px-6 py-4 bg-zinc-900 h-full">
            {#if type === "warning"}
                {@html Warning()}

            {:else if type === "error"}
                {@html Failed()}

            {:else if type === "success"}
                {@html Success()}
            {/if}
            <div class="flex flex-col items-start gap-[2px]">
                <span class="font-semibold text-sm" >{titleValues[type]}</span>
                <p class="text-xs" >{message}</p>
            </div>
        </div>
    </div>
</button>
