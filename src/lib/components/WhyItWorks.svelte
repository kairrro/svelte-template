<script lang="ts">
  import { SingleTick, Star, Tick } from "$lib/scripts/logos";
    import { 
      buttonBackground,
        descriptionColor, 
        titleColor
    } from "$lib/scripts/stores/appearance";
  import Approval from "./Approval.svelte";
</script>

<section class="flex flex-col items-center gap-4 max-w-[1279px] mx-auto px-4 md:items-start pt-28" id="why-it-works" >
    <h1 class="{$titleColor}" >Why it Works</h1>
    <p class="w-3/4 text-center leading-[30px] {$descriptionColor} md:w-full md:text-left" >
        We help students find serious co-founders to build real startups together.
        No noise, no random matches — just people who actually want to build.
    </p>

</section>