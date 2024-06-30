<script>
    import Hero from "$lib/components/Hero.svelte";
    import { PUBLIC_SITE_NAME } from "$env/static/public";
</script>

<svelte:head>
    <title>Home | {PUBLIC_SITE_NAME}</title>
    <meta property="og:title" content={`Svelte Template`}>
    <meta property="og:description" content="Insert description here">
    <meta property="og:image" content="/favicon.png">
</svelte:head>

<Hero />