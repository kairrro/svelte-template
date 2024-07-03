<script>
    import "../../app.css";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex flex-col gap-20 mx-auto">
    <slot />
    <Footer />
</div>