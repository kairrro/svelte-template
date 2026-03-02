<script>
    import { SITE_NAME } from "$lib/scripts/globals/misc";
    import { descriptionColor, textColor } from "$lib/scripts/stores/appearance";
    import FooterColumn from "./FooterColumn.svelte";
</script>

<footer class="flex flex-col gap-8 w-full max-w-[1279px] mx-auto pb-20 py-16 px-6 md:px-4" >
    <div class="flex justify-between items-start gap-20 md:flex-col md:gap-10 md:items-start {$textColor}">
        <div class="flex flex-col items-start gap-2 md:items-start md:gap-4">
            <a 
                class="flex items-center gap-2 hover:scale-105 transition md:items-start md:flex-col md:gap-4" 
                href="/"
            >
                <img 
                    src="/favicon.png" 
                    alt="logo"
                    class="w-16"
                />
                <h2 class="text-2xl font-semibold" >{SITE_NAME}</h2> 
            </a>
            <p class="text-sm {$descriptionColor} max-w-[380px] leading-[28px]" >
                We help roofing companies build their brand, dominate local search, and book more jobs with high-converting websites.
            </p>
        </div>
        
        <FooterColumn
            title="Legal"
            links={[
                { href: "/privacy", text: "Privacy" },
                { href: "/tos", text: "Terms of Service" }
            ]}
        />

        <FooterColumn
            title="Resources"
            links={[
                { href: "/#services", text: "Services" },
                { href: "/#how-it-works", text: "How it Works" },
                { href: "/#get-started", text: "Get Started" }
            ]}
        />  
    </div>

    <div class="w-full h-[1px] bg-zinc-800" ></div>

    <div class="flex items-center justify-between gap-4 md:flex-col md:items-start " >
        <p class="text-sm {$descriptionColor}" >
            {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
    </div>
</footer>