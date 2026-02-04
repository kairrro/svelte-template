<script lang="ts">
    import { descriptionColor, textColor } from "$lib/scripts/stores/appearance";
    import FakeProfile from "./FakeProfile.svelte";
</script>

<section>
    <div 
        class="pt-32 gap-2 w-screen" 
        id="hero"
    >
        <div class="flex items-center justify-between h-full max-w-[1279px] gap-20 mx-auto w-full z-20 lg:flex-col px-4">
            <div class="flex flex-col items-start justify-center text-left gap-4 h-full lg:mx-auto lg:items-start lg:w-full">
                <p class="text-6xl font-medium md:text-5xl leading-[70px] md:leading-[65px] {$textColor}" >Find Your Startup<br/>Co-Founder</p>
                <p class="{$descriptionColor} leading-loose max-w-[550px]" >
                    A platform where committed tech founders match to build real startups, not side projects.
                </p>
            </div>

            <FakeProfile />
        </div>
    </div>
</section>

<style>
    .fade-in {
        opacity: 1;
        transition: opacity 500ms ease-in-out;
    }
</style>
