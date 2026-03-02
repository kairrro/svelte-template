<script>
  import { Thunder, Search, Money } from "$lib/scripts/logos";
  import Feature from "./Feature.svelte";
</script>

<section class="relative min-h-screen bg-white text-gray-900 overflow-hidden pt-12" id="services">
  <div class="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-400/20 blur-[160px] rounded-full"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-4 py-28 grid grid-cols-2 gap-20 items-center md:grid-cols-1">
    <div>
      <h1 class="text-5xl font-bold leading-tight">
        Stop Losing Jobs to <br />
        <span class="text-sky-600">"The Other Guys"</span>
      </h1>

      <p class="mt-6 text-gray-600 leading-relaxed max-w-xl">
        Most roofing websites are just digital brochures. They look okay,
        but they don't do the one thing you need them to do:
        <span class="font-medium">make the phone ring.</span>
      </p>

      <div class="mt-12 space-y-10">
        <Feature 
            title="Built for Speed & Conversion"
            description="We don't just make it pretty. We build sites that load fast and guide homeowners to call you immediately."
            src={Thunder("#0284C7", "24px")}
        />
        <Feature 
            title="Dominate Local Search"
            description="When someone in your town Googles &quot;roof repair,&quot; we make sure your name shows up first."
            src={Search("#0284C7", "24px")}
        />
        <Feature 
            title="More High Quality Leads"
            description="Get exclusive leads directly to your phone. No sharing with other contractors like Angi or HomeAdvisor."
            src={Money("#0284C7", "24px")}
        />
      </div>
    </div>

    <div class="relative">
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-xl">
        <div class="flex items-center justify-between mb-8">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="w-48 h-3 bg-gray-300 rounded"></div>
        </div>

        <div class="flex items-start justify-between mb-6">
          <div>
            <p class="text-gray-500 text-sm">Monthly Leads</p>
            <div class="flex items-center gap-3">
              <h2 class="text-4xl font-bold text-gray-900">142</h2>
              <span class="text-green-600 text-sm font-medium">↑ 24%</span>
            </div>
          </div>

          <div class="w-10 h-10 bg-sky-400/20 rounded-lg flex items-center justify-center">
            👥
          </div>
        </div>

        <div class="bg-gray-100 border border-gray-200 rounded-xl p-6 flex items-end gap-4">
          <div class="w-full bg-sky-200/60 rounded h-[40px]"></div>
          <div class="w-full bg-sky-300/60 rounded h-[120px]"></div>
          <div class="w-full bg-sky-200/60 rounded h-[80px]"></div>
          <div class="w-full bg-sky-300/60 rounded h-[140px]"></div>
          <div class="w-full bg-sky-400/70 rounded h-[160px]"></div>
          <div class="w-full bg-sky-500 rounded h-[180px]"></div>
        </div>

        <div class="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <div>
            <p class="text-gray-400 text-xs tracking-widest">REVENUE EST.</p>
            <p class="font-semibold text-lg mt-1 text-gray-900">$284,000</p>
          </div>
          <div>
            <p class="text-gray-400 text-xs tracking-widest">AVG. JOB SIZE</p>
            <p class="font-semibold text-lg mt-1 text-gray-900">$12,500</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>