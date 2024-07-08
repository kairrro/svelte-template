<script>
    import Hero from "$lib/components/Hero.svelte";
    import { PUBLIC_SITE_NAME } from "$env/static/public";
    import { description } from "$lib/scripts/globals/misc";
</script>

<svelte:head>
    <title>{PUBLIC_SITE_NAME}</title>
    <meta property="og:title" content={PUBLIC_SITE_NAME}>
    <meta property="og:description" content={description}>
    <meta property="og:type" content="website">
    <meta property="og:image" content="./favicon.png">
    <meta name="description" content={description}>
</svelte:head>

<Hero
  pictures={[
    "https://i.pinimg.com/originals/b4/f5/2d/b4f52d2709f32a86431ea6ed79902551.jpg",
  ]}
/>