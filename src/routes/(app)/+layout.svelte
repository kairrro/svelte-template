<script>
    import "../../app.css";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="flex flex-col gap-20 max-w-[1279px] mx-auto px-10 py-6">
    <Header />
    <slot />
</div>
