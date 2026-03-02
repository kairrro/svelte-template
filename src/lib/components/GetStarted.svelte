<script lang="ts">
  import { writable } from "svelte/store";

  // Reactive form fields
  let name = "";
  let company = "";
  let email = "";
  let phone = "";
  let message = "";

  // State
  const submitting = writable(false);
  const successMessage = writable("");
  const errorMessage = writable("");

  async function handleSubmit() {
    submitting.set(true);
    successMessage.set("");
    errorMessage.set("");

    if (!name || !email) {
      errorMessage.set("Please enter your name and email.");
      submitting.set(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          message
        })
      });

      const data = await res.json();

      if (data.success) {
        successMessage.set("Thank you! Your information has been sent.");
        // Reset form
        name = "";
        company = "";
        email = "";
        phone = "";
        message = "";
      } else {
        errorMessage.set("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      errorMessage.set("Error sending your info. Check console for details.");
    } finally {
      submitting.set(false);
    }
  }
</script>

<div class="min-h-screen bg-gray-50 flex items-center justify-center p-8 md:px-4" id="get-started">
  <div class="flex flex-col w-full max-w-[800px] bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden p-12 px-8 md:flex-col">
    
    <div>
      <h1 class="text-gray-900 text-4xl font-extrabold tracking-tight mb-4">Ready to Grow?</h1>
      <p class="text-gray-600 text-sm leading-[25px] mb-10 pr-4">
        Schedule a free 15-minute strategy call. We'll review your current online presence and show you exactly how we can help you get more jobs.
      </p>
    </div>

    <!-- Form -->
    <form class="flex flex-col gap-6" on:submit|preventDefault={handleSubmit}>
      <div class="w-full">
        <label class="block text-gray-600 text-[13px] font-medium mb-1.5" for="full-name">Full Name</label>
        <input id="first-name" type="text" bind:value={name} class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-sky-400"/>
      </div>

      <div>
        <label class="block text-gray-600 text-[13px] font-medium mb-1.5" for="company-name">Company Name</label>
        <input id="company-name" type="text" bind:value={company} class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-sky-400"/>
      </div>

      <div class="flex gap-4 md:flex-col">
        <div class="w-full">
          <label class="block text-gray-600 text-[13px] font-medium mb-1.5" for="email">Email Address</label>
          <input id="email" type="email" bind:value={email} class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-sky-400"/>
        </div>
        <div class="w-full">
          <label class="block text-gray-600 text-[13px] font-medium mb-1.5" for="phone">Phone Number</label>
          <input id="phone" type="tel" bind:value={phone} class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-sky-400"/>
        </div>
      </div>

      <div class="mb-8">
        <label class="block text-gray-600 text-[13px] font-medium mb-1.5" for="challenge">What's your biggest challenge right now?</label>
        <input id="challenge" type="text" bind:value={message} class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 text-sm font-medium focus:outline-none focus:border-sky-400"/>
      </div>

      <button type="submit" class="w-full bg-sky-400 text-white font-bold py-3.5 rounded-lg text-sm transition-colors hover:bg-sky-500" disabled={$submitting}>
        {#if $submitting}Submitting...{/if}
        {#if !$submitting}Get My Free Consultation{/if}
      </button>

      {#if $successMessage}
        <p class="text-green-600 text-center text-sm mt-2">{$successMessage}</p>
      {/if}

      {#if $errorMessage}
        <p class="text-red-600 text-center text-sm mt-2">{$errorMessage}</p>
      {/if}

      <p class="text-center text-gray-500 text-[11px]">
        No pressure sales. Just honest advice for your business.
      </p>
    </form>
  </div>
</div>