<script>
    import Question from "./Question.svelte";
</script>

<svelte:head>
    <title>Svelte Template | FAQ</title>
</svelte:head>

<section>
    <div class="flex flex-col gap-10 max-w-[1000px] mx-auto px-8 h-[100vh] pb-10">
        <div class="flex flex-col gap-2" >
            <h1 class="text-3xl font-semibold">FAQ</h1>
            <p class="text-zinc-300">This is a section of frequently asked questions.</p>
        </div>

        <div class="flex flex-col gap-2" >
            <Question 
                question = "Is it really free to open a store?"
                answer = "Yes. Opening a store is free, although there are extra features that require payment. Things like domain names, or buying your store fully
                will require payment."
            />

            <Question 
                question = "My website booking got declined, why did this happen?"
                answer = "If we believe that your website doesn't abide by our terms of service, or has little ability to be monetized, we will unfortunately
                have to decline your booking request."
            />

            <Question 
                question = "Do you only develop e-commerce websites?"
                answer = "No. As long as your website sells a product / service and abides by our terms and service, we can develop it."
            />
        </div>
    </div>
</section>