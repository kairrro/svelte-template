<script lang="ts">
    import Input from "../custom/Input.svelte";
    import { goto } from "$app/navigation";
    import { signInWithEmail, getSession } from "$lib/scripts/appwrite/auth";
    import { onMount } from "svelte";
    import { Loading } from "$lib/scripts/logos";
    import { isValidEmail } from "$lib/scripts/functions/misc";
    import Notification from "../custom/Notification.svelte";
    import { notificationMessage, notificationState, notificationType } from "$lib/scripts/stores/values";
    import { 
        descriptionColor,
        buttonBackground
    } from "$lib/scripts/stores/appearance";
    import { SITE_NAME } from "$lib/scripts/globals/misc";

    let email: string = "";
    let password: string = "";

    let buttonDisabled: boolean = true;
    let sendingRequest: boolean = false;

    async function signIn(){
        try {
            if (!email || !password){
                return;
            }

            notificationState.set(false);
            
            sendingRequest = true;
            buttonDisabled = true;

            const result = await signInWithEmail(email, password); 

            if (result.success){
                goto("/account");
              
            } else {
                notificationState.set(true)
                notificationMessage.set(result.message);
                notificationType.set("error");
            } 

        } catch (error){
            console.error(error);

        } finally {
            sendingRequest = false;
            buttonDisabled = false;

            setTimeout(() => {
                notificationState.set(false);
            }, 3000);
        }
    }

    onMount(async () => {
        const session = await getSession();
        
        if (session.success){
            goto("/account");
        }
    });

    $: buttonDisabled = !(isValidEmail(email) && password.length >= 8);
</script>

{#if $notificationState}
    <Notification 
        message={$notificationMessage} 
        type={$notificationType} 
    />
{/if}

<svelte:head>
    <title> Login | {SITE_NAME}</title>
    <meta property="og:title" content={SITE_NAME}>
</svelte:head>

<section>
    <form>
        <div class="flex flex-col gap-6 z-10 mx-auto authorize max-w-[450px] px-4 h-screen mt-40" >
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-medium" >Login</h1>
                <p class={`text-sm md:text-xs ${$descriptionColor}`} >Enter in your credentials and access your account.</p>
            </div>
    
            <div class="flex flex-col gap-6" >
                <Input 
                    name="Email"
                    id="email"
                    bind:value={email}
                />
    
                <div class="flex flex-col gap-2" >
                    <Input 
                        name="Password"
                        id="password"
                        bind:value={password}
                        type="password"
                    />
    
                    <a href="/forgot-password" class={`${$descriptionColor} text-xs transition hover:underline`} >
                        Forgot your password?
                    </a>
                </div>
            </div>
    
            <button 
                disabled={buttonDisabled} 
                class={`flex items-center justify-center ${$buttonBackground} text-white py-2 px-10 w-full rounded-lg text-sm`} 
                on:click={() => signIn()
            }>
                {#if sendingRequest}
                    {@html Loading(undefined, "20px")}
    
                {:else}
                    Login
                {/if}
            </button>
    
            <a href="/register" class={`${$descriptionColor} text-xs transition hover:underline`} >
                Don't have an account? Sign up
            </a>
        </div>
    </form>
</section>

<style>
    button:disabled {
        opacity: 0.5;
    }
</style>