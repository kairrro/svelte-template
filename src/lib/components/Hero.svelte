<script lang="ts">
    import { descriptionColor } from "$lib/scripts/stores/appearance";
    import Header from "./Header.svelte";

    export let pictures: string[] = [];

    let index: number = 0;
    let currentPicture: string = pictures[0];
    let isImageVisible: boolean = true;

    const changePicture = () => {
        if (pictures.length > 1){
            setInterval(() => {
                isImageVisible = false;
                setTimeout(() => {
                    index = (index + 1) % pictures.length;
                    currentPicture = pictures[index];
                }, 500);
            }, 4000);
        }
    };

    function imageIsVisible() {
        isImageVisible = true;
    }

    changePicture();
</script>

<section>
    <div 
        class="relative flex flex-col gap-2 justify-evenly w-screen bg-no-repeat h-[90vh]" 
        id="hero"
    >
        <div class="flex flex-col h-full max-w-[1279px] mx-auto w-full z-20">
            <div class="flex flex-col items-center justify-center text-center gap-4 h-full md:mx-auto md:px-4">
                <p class="text-5xl font-semibold md:text-4xl" >Svelte Template</p>
                <p class="{$descriptionColor} leading-loose max-w-[700px]" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <!-- Content Here -->
            </div>
        </div>

        {#if pictures.length > 0}
            <div class="absolute top-0 left-0 w-full h-full opacity-50 bg-black z-10"></div>

            <img 
                src={currentPicture} 
                class:fade-in={isImageVisible}  
                alt="slideshow-pic" 
                class="absolute w-screen h-[90vh] object-cover"
                on:load={imageIsVisible}
            />
        {/if}
    </div>
</section>

<style>
    .fade-in {
        opacity: 1;
        transition: opacity 500ms ease-in-out;
    }
  
    img {
        opacity: 0;
        transition: opacity 500ms ease-in-out;
    }
</style>
