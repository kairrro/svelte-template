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
                question = "Question 1"
                answer = "Answer to question"
            />

            <Question 
                question = "Question 2"
                answer = "Answer to question"
            />

            <Question 
                question = "Question 3"
                answer = "Answer to question"
            />
        </div>
    </div>
</section>