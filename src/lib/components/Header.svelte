<script>
    import { Hamburger, Info, Profile, Star, Settings, Cancel } from "$lib/scripts/logos";
    import { descriptionColor } from "$lib/scripts/stores/appearance";
    import { clickOutside } from "$lib/scripts/functions/misc";
    import { slide } from "svelte/transition";

    let dropdownOpen = true;

    function toggleDropdown(){
        dropdownOpen = !dropdownOpen;
    }

    function closeDropdown(){
        dropdownOpen = false;
    }
</script>

<header class="relative flex items-center justify-between box-sizing w-full text-sm z-10 px-4 py-4">
    <a href="/" class="transition hover:scale-110">
        <img src="/assets/logo.png" alt="logo" width="60px" height="60px" class="rounded-lg" />
    </a>

    <div class="flex items-center gap-12 md:hidden">
        <a href="/" class="hover:underline underline-offset-4 transition">Home</a>
        <a href="/" class="hover:underline underline-offset-4 transition">Placeholder</a>
    </div>

    <button class="hidden md:flex p-2" on:click={() => toggleDropdown()} >
        {@html Hamburger()}
    </button>  
</header>

{#if dropdownOpen}
    <div 
        class="fixed hidden md:flex flex-col justify-between h-full gap-2 h-screen w-full max-w-[300px] bg-[#0f0f0f] z-20 py-4 left-0 {$descriptionColor}" 
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
                    class="flex items-center gap-2 w-full py-2"  
                    on:click={closeDropdown}
                >
                    {@html Profile(undefined, "22px")}
                    <p>Home</p>
                </a>
                <a
                    href="/"  
                    class="flex items-center gap-2 w-full py-2"  
                    on:click={closeDropdown}
                >
                    {@html Star("#f1f1f1", "22px")}
                    <p>Placeholder</p>
                </a>
            </div>
        </div>

        <div class="flex flex-col gap-4 text-sm" >
            <div class="border-[1px] border-zinc-700 w-full" ></div>

            <div class="flex flex-col px-4" >
                <a
                    href="/"    
                    class="flex items-center gap-2 w-full py-2" 
                    on:click={closeDropdown}
                >

                    {@html Settings("#818097", "22px")}
                    <p>Settings</p>
                </a>

                <a
                    href="/"    
                    class="flex items-center gap-2 w-full py-2"  
                    on:click={closeDropdown}
                >
                    {@html Info(undefined, "22px")}
                    <p>Help</p>
                </a>
            </div>
        </div>
    </div>

    <div class="hidden md:flex fixed bg-black opacity-50 h-screen w-screen z-10" >

    </div>
{/if}