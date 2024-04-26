<script>
    import "../../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex flex-col gap-8 mx-auto py-6">
    <Header />
    <slot />
    <Footer />
</div>