<script>
    import "../../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="flex flex-col gap-20 mx-auto">
    <Header />
    <slot />
    <Footer />
</div>