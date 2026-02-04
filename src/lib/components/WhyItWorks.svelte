<script lang="ts">
  import { SingleTick, Star, Tick } from "$lib/scripts/logos";
    import { 
      buttonBackground,
        descriptionColor, 
        titleColor

    } from "$lib/scripts/stores/appearance";
  import Approval from "./Approval.svelte";
</script>

<section class="flex flex-col items-center gap-4 max-w-[1279px] mx-auto px-4 md:items-start pt-28" id="why-it-works" >
    <h1 class="{$titleColor}" >Why it Works</h1>
    <p class="w-3/4 text-center leading-[30px] {descriptionColor} md:w-full md:text-left" >
        We help students find serious co-founders to build real startups together.
        No noise, no random matches — just people who actually want to build.
    </p>

    <div class="flex items-center gap-4 mt-10 w-full md:flex-col md:gap-20" >
        <div class="flex flex-col gap-6 w-full" >
            <div class="flex flex-col gap-2 rounded-lg" >
                <Approval 
                    name="John"
                    src="https://media.istockphoto.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=Hr5Rn3WlBied-o4Qu2LiRc6wP_eHI8UMG9rl1v-_a9s="
                    approved={true}
                    role="DevOps Engineer"
                />

                <Approval 
                    name="Adam"
                    src="https://media.istockphoto.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=Hr5Rn3WlBied-o4Qu2LiRc6wP_eHI8UMG9rl1v-_a9s="
                    approved={true}
                    role="Frontend Developer"
                />

                <Approval 
                    name="Ashley"
                    src="https://www.themarketingblog.co.uk/wp-content/uploads/2016/07/shutterstock_128709044.jpg"
                    approved={false}
                    role="Marketer"
                />
            </div>
            
            <div class="flex flex-col items-start gap-2 text-left w-full" >
                <h2 class="text-lg font-medium" >We review every signup</h2>
                <p class="text-left leading-[27px] {descriptionColor}" >
                    We make sure people joining are serious about building, not just browsing or idea-dumping.
                </p>
            </div>
        </div>

        <div class="flex flex-col items-start gap-2 w-full" >
            <div class="flex flex-col items-start gap-6 p-2 py-4 rounded-lg w-full bg-zinc-900 border-[2px] border-zinc-800" >
                <div class="flex flex-col gap-4"  >
                    <div class="flex flex-col items-start gap-2" >
                        <p class="text-lg" >Terms and Conditions</p>
                        <p class="text-sm {$descriptionColor} leading-[25px]" > 
                            Founders agree to non-disclosure, clear expectations, and ownership rules.
                        </p>
                    </div>
                    <div class="flex items-center gap-2 text-sm" >
                        <div class="flex items-center justify-center rounded-lg bg-white p-[1px]" >
                            <p>{@html SingleTick("#000000", "22px")}</p>
                        </div>

                        <p>Shareholder's Agreement</p>
                    </div>

                    <div class="flex items-center gap-2 text-sm" >
                        <div class="flex items-center justify-center rounded-lg bg-white p-[1px]" >
                            <p>{@html SingleTick("#000000", "22px")}</p>
                        </div>

                        <p>Non Disclosure Agreement</p>
                    </div>

                    <div class="flex items-center gap-2 text-sm" >
                        <div class="flex items-center justify-center rounded-lg bg-white p-[1px]" >
                            <p>{@html SingleTick("#000000", "22px")}</p>
                        </div>

                        <p>Intellectual Property Assignment (IP)</p>
                    </div>
                </div>

                <div class="flex items-center gap-2" >
                    <button class="text-sm rounded-full px-10 py-2 {$buttonBackground}" >
                        Accept
                    </button>
                </div>
            </div>

            <div class="flex flex-col items-start gap-2 text-left">
                <h2 class="text-lg font-medium" >Clear expectations</h2>
                <p class="text-left leading-[27px] {descriptionColor}" >
                    Founders can agree on ownership, roles, and goals early so everyone is on the same page.
                </p>
            </div>
        </div>

        <div class="flex flex-col items-start gap-2 text-left w-full" >
            <h2 class="text-lg font-medium" >Tech Only Focus</h2>
            <p class="text-left leading-[27px] {descriptionColor}" >
                You only see people building software or technical products. That means fewer bad matches and faster conversations.
            </p>
        </div>
    </div>
</section>