<script lang="ts">
  import { Checkmark, Email, Time } from "$lib/scripts/logos";
  import { descriptionColor, elementBackgrounds, textColor, background } from "$lib/scripts/stores/appearance";
  import Button from "./custom/Button.svelte";
  import Project from "./Project.svelte";

  export let skills: string[] = ["Python", "Svelte", "Node.js", "Git", "React", "Typescript"];
</script>

<div class="flex flex-col items-start gap-8 {$elementBackgrounds} p-4 rounded-lg w-3/4 lg:w-full">
    <div class="flex items-start justify-between w-full md:flex-col md:items-start md:gap-6" >
        <div class="flex flex-col items-start gap-4" >
            <div class="flex items-center gap-4" > 
                <img 
                    src="https://i.pinimg.com/1200x/99/97/7a/99977a438e26a9c98a94a8304b450569.jpg"
                    alt="avatar"
                    class="rounded-full h-24 w-24 object-cover"
                />

                <div class="flex flex-col gap-[6px]" >
                    <div class="flex items-center gap-[6px]" >
                        <p class="text-xl font-medium {$textColor}" >John Doe</p>
                        {@html Checkmark(undefined, "20px")}
                    </div>
                    <p class="text-sm {$descriptionColor}" >Backend Developer</p>
                    <p class="text-sm {$descriptionColor} md:hidden" >20 year old developer from UTSA studying computer science</p>
                </div>
            </div>

            <p class="text-sm {$descriptionColor} hidden md:flex leading-[25px]" >20 year old developppppper from UTSA studying computer science</p>
        </div>

        <div class="pt-4">
            <Button 
                text="Contact"
            />
        </div>
    </div>
    
    <div class="flex items-center gap-2 w-full md:flex-col {$textColor}" >
        <div class="flex items-center gap-2 justify-center {$background} text-sm rounded-lg p-2 w-full md:justify-start" >
            {@html Email()}
            <p>Verified .edu email</p>
        </div>

        <div class="flex items-center gap-2 justify-center {$background} text-sm rounded-lg p-2 w-full md:justify-start" >
            {@html Time()}
            <p>Hours per week: 10-15</p>
        </div>

        <div class="flex items-center gap-2 justify-center {$background} text-sm rounded-lg p-2 w-full md:justify-start" >
            {@html Time()}
            <p>Duration: 6 months</p>
        </div>
    </div>

    <div class="flex flex-col gap-2" >
        <p class="text-xl {$textColor}" >Skills</p>
        <div class="flex flex-wrap gap-[6px] text-sm" >
            {#if skills.length > 3}
                {#each skills.slice(0, 3) as skill}
                    <p class=" {$background} rounded-lg py-[6px] px-6 max-w-fit {$textColor}" >{skill}</p>
                {/each}
                <p class="{$background} rounded-lg py-[6px] px-2 max-w-fit {$textColor}" >+{skills.length - 3}</p>
            {:else}
                {#each skills as skill}
                    <p class="{$background} rounded-lg py-[6px] px-6 max-w-fit {$textColor}" >{skill}</p>
                {/each}
            {/if}
        </div>
    </div>

    <div class="flex flex-col gap-4 w-full" >
        <p class="text-xl {$textColor}" >Past Projects</p>

        <Project 
            title="Flova"
            description="A platform where committed students match to build real startups, not side projects."
        />
    </div>
</div>