<script>
    import Hero from "$lib/components/Hero.svelte";
    import { SITE_NAME } from "$lib/scripts/globals/misc";
    import { description } from "$lib/scripts/globals/misc";
    import Content from "$lib/components/custom/Content.svelte";
  import JoinWaitlist from "$lib/components/JoinWaitlist.svelte";
  import HowItWorks from "$lib/components/HowItWorks.svelte";
  import WhyItWorks from "$lib/components/WhyItWorks.svelte";
</script>

<svelte:head>
    <title>{SITE_NAME}</title>
    <meta property="og:title" content={SITE_NAME}>
    <meta property="og:description" content={description}>
    <meta property="og:type" content="website">
    <meta property="og:image" content="./favicon.png">
    <meta name="description" content={description}>
</svelte:head>

<Hero />
<HowItWorks />
<WhyItWorks />
<JoinWaitlist />