<script lang="ts">
    import Input from "../custom/Input.svelte";
    import { isValidEmail } from "$lib/scripts/functions/misc";
    import { createAccount, getSession, signInWithEmail } from "$lib/scripts/appwrite/auth";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { Loading } from "$lib/scripts/logos";
    import Notification from "../custom/Notification.svelte";
    import { notificationType, notificationMessage, notificationState } from "$lib/scripts/stores/values";
    import { SITE_NAME } from "$lib/scripts/globals/misc";
    import { 
        buttonBackground,
        descriptionColor 
    } from "$lib/scripts/stores/appearance";
    import type { CustomResponse } from "$lib/scripts/types/misc";
    import { closeNotification } from "$lib/scripts/stores/functions";

    let name: string = "";
    let email: string = "";
    let password: string = "";
    let confirmPassword: string = "";

    let buttonDisabled: boolean = false;
    let sendingRequest: boolean = false;

    async function createUserInCollection(): Promise<CustomResponse>{
        try {
            const payload = {
                name: name,
                email: email,
            };

            const response = await fetch("/api/create-user/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok){
                return {
                    success: true,
                }

            } else {
                return {
                    success: false,
                    message: "Error while creating user",
                }
            }

        } catch (error){
            return {
                success: false,
                message: `An unknown error occurred: ${error}`
            }
        }
    };

    async function signUp(){
        try {
            if (!name || !email || !password ){
                notificationState.set(true)
                notificationMessage.set("Your must fill out all boxes");
                notificationType.set("error");
                
                closeNotification();
                return;
            }

            if (password !== confirmPassword){
                notificationState.set(true)
                notificationMessage.set("Your passwords do not match");
                notificationType.set("error");
                
                closeNotification();
                return;
            }

            notificationState.set(false);

            buttonDisabled = true;
            sendingRequest = true;

            const result = await createAccount(name, email, password);

            if (result.success){
                const result = await createUserInCollection();
                
                if (result.success){
                    const result = await signInWithEmail(email, password);

                    if (result.success){
                        goto("/account");
                    }
                }

            } else {
                notificationState.set(true)
                notificationMessage.set(result.message);
                notificationType.set("error");
            }

        } catch (error){
            console.error(error);

        } finally {
            buttonDisabled = false;
            sendingRequest = false;

            closeNotification();
        }
    }

    onMount(async () => {
        const session = await getSession();
        
        if (session.success){
            goto("/dashboard");
        }
    });

    $: buttonDisabled = !(isValidEmail(email) && password.length >= 8 && confirmPassword.length >= 8 && name.length >= 2 );
</script>

{#if $notificationState}
    <Notification 
        message={$notificationMessage} 
        type={$notificationType} 
    />
{/if}

<svelte:head>
    <title> Register | {SITE_NAME}</title>
    <meta property="og:title" content={SITE_NAME}>
    <meta property="og:description" content="Create an account at {SITE_NAME}">
</svelte:head>

<section>
    <form>
        <div class="flex flex-col gap-6 z-10 mx-auto authorize max-w-[450px] px-4 mt-40 h-screen" >
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-medium" >Register</h1>
                <p class={`${$descriptionColor} text-sm md:text-xs`} >Create your account here.</p>
            </div>
    
            <div class="flex flex-col gap-6" >
                <Input 
                    name="Name"
                    id="name"
                    bind:value={name}
                />
    
                <Input 
                    name="Email"
                    id="email"
                    bind:value={email}
                />
    
                <Input 
                    name="Password"
                    id="password"
                    type="password"
                    bind:value={password}
                />
    
                <Input 
                    name="Confirm Password"
                    id="confirm-password"
                    type="password"
                    bind:value={confirmPassword}
                />
            </div>
    
            <button 
                disabled={buttonDisabled} 
                class={`flex text-white items-center justify-center ${$buttonBackground} py-2 px-10 w-full rounded-lg text-sm`} 
                on:click={() => signUp()
            }>
                {#if sendingRequest}
                    {@html Loading(undefined, "20px")}
    
                {:else}
                    Register
                {/if}
            </button>
    
            <a href="/login" class={`${$descriptionColor} text-xs transition hover:text-indigo-700 hover:underline`}>
                Have an account already? Sign in.
            </a>
        </div>
    </form>
</section>

<style>
    button:disabled {
        opacity: 0.5;
    }
</style>