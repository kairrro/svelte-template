<script>
    import { Discord, Twitter } from "$lib/scripts/logos";
    import { descriptionColor, textColor, iconColor } from "$lib/scripts/stores/appearance";
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
                <h2 class="text-2xl font-semibold" >Template</h2> 
            </a>
            <p class="text-sm {$descriptionColor} max-w-[380px] leading-[28px]" >
                Helping students find serious co-founders to build real startups together.
            </p>
        </div>


        <FooterColumn
            title="Company"
            links={[
                { href: "/about", text: "About" },
                { href: "/careers", text: "Careers" },
                { href: "/contact", text: "Contact" }
            ]}
        />
        
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
                { href: "/#how-it-works", text: "How it Works" },
                { href: "/#why-it-works", text: "Why it Works" },
                { href: "/#waitlist", text: "Join Waitlist" }
            ]}
        />  
    </div>

    <div class="w-full h-[1px] bg-gray-200" ></div>

    <div class="flex items-center justify-between gap-4 md:flex-col md:items-start " >
        <p class="text-sm {$descriptionColor}" >
            {new Date().getFullYear()} Template. All rights reserved.
        </p>

        <div class="flex items-center gap-6">
            <a href="/" target="_blank" class="hover:scale-110 transition">
                {@html Discord($iconColor, "34px")}
            </a>

            <a href="/" target="_blank" class="hover:scale-110 transition" >
                {@html Twitter($iconColor, "26px")}
            </a>
        </div>
    </div>
</footer>