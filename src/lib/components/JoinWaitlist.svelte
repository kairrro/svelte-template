<script lang="ts">
    import { 
        buttonBackground,
        descriptionColor, 
        inputBackground, 
        titleColor,
        textColor

    } from "$lib/scripts/stores/appearance";

    let waitlistFilled: boolean = false;
    let email: string = "";

    function submitEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            waitlistFilled = true;
        }
    }
</script>

<section 
    class="flex flex-col items-center gap-4 max-w-[1279px] mx-auto px-4 pt-24 pb-20 md:items-start" 
    id="waitlist"
>
    <h1 class="{$titleColor}" >Join the Waitlist</h1>
    {#if !waitlistFilled}
        <p class="w-3/4 text-center leading-[30px] {$descriptionColor} md:w-full md:text-left" >
            A co-founder matching platform for university students. Sign up to be notified as soon as we launch!
        </p>
        
        <div class="flex items-center w-[60%] mt-6 md:w-full md:flex-col md:gap-4 md:items-start h-10 md:h-24">
            <input 
                type="email" 
                placeholder="Enter your email" 
                class="{$inputBackground} {$descriptionColor} text-zinc-200 placeholder-zinc-400 px-4 rounded-l-lg w-full outline-none h-full text-sm md:rounded-lg"
                bind:value={email}
            />

            <button 
                class="flex items-center justify-center px-4 text-sm whitespace-nowrap rounded-r-lg h-full md:rounded-lg md:w-full 
                {$buttonBackground}" 
                on:click={() => submitEmail(email)}
            > 
                Submit email
            </button>
        </div>

    {:else}
        <p class="w-3/4 text-center leading-[30px] {$descriptionColor} md:w-full md:text-left" >
            Thank you for joining the waitlist!
        </p>
    {/if}
</section>