<script>

  import { buttonBackground, descriptionColor, textColor } from "$lib/scripts/stores/appearance";

</script>
<div class="flex flex-col items-center mt-32 text-[#f1f1f1]">
    <div class="flex flex-col items-center gap-4">
        <h1 class="text-8xl font-semibold {$textColor}" >404</h1>
        <p class="{$descriptionColor} text-sm" >Looks like this page does not exist...</p>
    </div>

    <a href="/" class="mt-10 border-[#f1f1f1] rounded-full text-sm py-2 px-6 {$buttonBackground} hover:font-medium transition">
        Return to home
    </a>
</div>