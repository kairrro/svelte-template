<script>
    import { Hamburger, Cancel } from "$lib/scripts/logos";
    import { descriptionColor } from "$lib/scripts/stores/appearance";
    import { clickOutside } from "$lib/scripts/functions/misc";
    import { slide } from "svelte/transition";

    let dropdownOpen = false;

    function toggleDropdown(){
        dropdownOpen = !dropdownOpen;
    }

    function closeDropdown(){
        dropdownOpen = false;
    }
</script>

<header class="fixed w-screen bg-[#0A0A0A] top-0 right-0 left-0 border-b-[1px] border-zinc-800 flex items-center justify-between box-sizing w-full text-sm z-20 px-10 py-[12px] z-30 ">
    <div class="flex items-center justify-between max-w-[1279px] w-full mx-auto" >
        <a href="/" class="transition hover:scale-110">
            <img src="/assets/logo.png" alt="logo" width="40px" height="40px" class="rounded-lg" />
        </a>
    
        <div class="flex items-center gap-12 md:hidden text-xs">
            <a href="/" class="hover:underline underline-offset-4 transition">Home</a>
            <a href="/" class="hover:underline underline-offset-4 transition">Placeholder</a>
        </div>
    
        <button class="hidden md:flex p-2" on:click={() => toggleDropdown()} >
            {@html Hamburger()}
        </button>  
    </div>
</header>

{#if dropdownOpen}
    <div 
        class="fixed hidden md:flex flex-col justify-between h-full gap-2 h-screen w-full max-w-[300px] bg-[#0f0f0f] z-40 py-4 left-0 {$descriptionColor}" 
        use:clickOutside
        on:outside={closeDropdown}
        transition:slide={{ axis: "x" }}
    >   
        <div class="flex flex-col gap-4" >
            <button 
                class="ml-auto mr-4" 
                on:click={closeDropdown}
            >
                {@html Cancel("17px", "#f1f1f1")}
            </button>
    
            <div class="flex flex-col px-4 text-sm" >
                <a
                    href="/"  
                    class="w-full py-2"  
                    on:click={closeDropdown}
                >
                    <p>Home</p>
                </a>
                <a
                    href="/"  
                    class="w-full py-2"  
                    on:click={closeDropdown}
                >
                    <p>Placeholder</p>
                </a>
            </div>
        </div>
    </div>

    <div class="hidden md:flex fixed bg-black opacity-50 h-screen w-screen z-10" ></div>
{/if}