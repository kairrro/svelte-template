<script lang="ts">
    export let title: string = "";
    export let rules: string[] = [];
</script>

<div class="flex flex-col gap-4" >
    <h2 class="font-semibold text-2xl" >{title}</h2>
    <div class="flex flex-col gap-6 text-zinc-300" >
        {#each rules as rule}
        <p>
            {rule}
        </p>
        {/each}
    </div>
</div>