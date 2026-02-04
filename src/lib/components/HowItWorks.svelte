<script lang="ts">
  import { Account, Build, Business } from "$lib/scripts/logos";
    import { 
        descriptionColor,   
        titleColor
    } from "$lib/scripts/stores/appearance";
  import Steps from "./Steps.svelte";
</script>

<section class="flex flex-col items-center gap-10 max-w-[1279px] mx-auto px-4 md:items-start pt-28" id="how-it-works" >
    <div class="flex flex-col items-center gap-4 md:items-start" >
        <h1 class="{$titleColor}" >How it Works</h1>
        <p class="w-3/4 text-center leading-[30px] {$descriptionColor} md:w-full md:text-left" >
            We help students find serious co-founders to build real startups together.
            No noise, no random matches — just people who actually want to build.
        </p>
    </div>

    <div class="flex flex-col items-center gap-4 w-full" >
        <Steps 
            title="Create Your Account" 
            description="Join the platform with your verified credentials. 
            Only serious builders are accepted, so everyone on the network is committed to creating something real."
            icon={Account} 
        />
        <Steps 
            title="Build your Profile" 
            description="Share your skills, experience, and interests. This helps the system match you with 
            cofounders who complement your strengths and understand your goals." 
            icon={Build} 
        />
        <Steps 
            title="Find your Match" 
            description="Browse and connect with other founders who are actively building in tech. The platform prioritizes 
            high-quality, actionable connections over casual networking." 
            icon={Business} 
        />
    </div>
</section>