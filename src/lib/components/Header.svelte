<script>
    import { Hamburger } from "$lib/scripts/logos";
    import { slide } from "svelte/transition";

    let dropdownOpen = false;

    function toggleDropdown(){
        dropdownOpen = !dropdownOpen;
    }
</script>

<header>
    <div class="relative flex items-center justify-between box-sizing">
        <a href="/" class="transition hover:scale-110">
            <img src="/assets/logo.jpg" alt="logo" width="60px" height="60px" class="rounded-lg" />
        </a>
    
        <div class="flex items-center gap-12 md:hidden">
            <a href="/" class="hover:underline underline-offset-4 transition">Home</a>
            <a href="/" class="hover:underline underline-offset-4 transition">Placeholder</a>
            <a href="/" class="hover:underline underline-offset-4 transition">Placeholder</a>
        </div>

        <button class="hidden md:flex p-2" on:click={() => toggleDropdown()} >
            {@html Hamburger()}
        </button>

        {#if dropdownOpen}
            <div class="hidden md:flex flex-col absolute top-[83px] right-0 z-20 shadow-xl bg-zinc-900 rounded-lg w-full border-zinc-700 border-[1px]" transition:slide >
                <a class="flex items-center h-12 hover:bg-zinc-600 px-4 transition transition-300" href="/" on:click={() => toggleDropdown()} >Placeholder</a>
                <a class="flex items-center h-12 hover:bg-zinc-600 px-4 transition transition-300 border-zinc-700 border-t-[1px]" href="/" on:click={() => toggleDropdown()} >Placeholder</a>
                <a class="flex items-center h-12 hover:bg-zinc-600 px-4 transition transition-300 border-zinc-700 border-t-[1px]" href="/" on:click={() => toggleDropdown()} >Placeholder</a>
            </div>
        {/if}
    </div>
</header>