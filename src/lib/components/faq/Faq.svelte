<script lang="ts">
    import Question from "./Question.svelte";
    import { descriptionColor } from "$lib/scripts/stores/appearance";
</script>

<svelte:head>
    <title>Hone | FAQ</title>
</svelte:head>


<section 
    class="flex flex-col gap-10 w-full max-w-[1000px] mx-auto px-8 h-screen mt-40 pb-10"
>
    <div class="flex flex-col gap-2" >
        <h1 class="text-3xl font-semibold">FAQ</h1>
        <p class={`${$descriptionColor} text-sm`}>
            This is a section of frequently asked questions.
        </p>
    </div>

    <div class="flex flex-col gap-2" >
        <Question 
            question = "Question 1"
            answer = "Answer to Question 1"
        />

        <Question 
            question = "Question 2"
            answer = "Answer to Question 2"
        />

        <Question 
            question = "Question 3"
            answer = "Answer to Question 3"
        />
    </div>
</section>