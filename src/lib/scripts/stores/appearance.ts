import { writable } from "svelte/store";

export const theme = writable<string>("dark");

export let textColor = writable<string>("");
export let descriptionColor = writable<string>("");
export let textAccent = writable<string>("");
export let elementAccent = writable<string>("");
export let elementBackgrounds = writable<string>("");
export let background = writable<string>("");
export let logoColor = writable<string>("");
export let buttonColor = writable<string>("");
export let inputBorder = writable<string>("");
export let inputBackground = writable<string>("");
export let scrollbarBackground = writable<string>("");
export let borderColor = writable<string>("");
export let buttonBackground = writable<string>("bg-indigo-700 hover:opacity-50 transition");
export let categoryButton = writable<string>("");
export let dropdownElement = writable<string>("");
export let firstHeaderSection = writable<string>("");
export let secondHeaderSection = writable<string>("");
export let secondHeaderSectionText = writable<string>("");
export let addToCartButton = writable<string>("");
export let dropdownButton = writable<string>("");
export let buttonHover = writable<string>("");

theme.subscribe(value => {
    if (value === "dark"){
        // Dark theme
        borderColor.set("#f1f1f1");
        logoColor.set("#f1f1f1");
        textColor.set("text-[#f1f1f1]");
        descriptionColor.set("text-zinc-300")
        textAccent.set("text-indigo-500");
        elementBackgrounds.set("bg-zinc-900")
        elementAccent.set("bg-indigo-700");
        background.set("rgb(10, 10, 10);");
        inputBorder.set("border border-zinc-700");
        inputBackground.set("bg-zinc-800");
        scrollbarBackground.set("#5d5d5d");
        dropdownElement.set("bg-[#0A0A0A]");
        dropdownButton.set("hover:bg-zinc-600");
        firstHeaderSection.set("bg-[#0f0f0f]");
        secondHeaderSection.set("bg-white");
        secondHeaderSectionText.set("text-black");
        addToCartButton.set("bg-[#ffffff] text-black");
        
    } else {
        // Light theme
        borderColor.set("#000000");
        logoColor.set("#000000");
        textColor.set("text-black");
        background.set("#FFFFFF;");
        descriptionColor.set("text-zinc-500");
        elementBackgrounds.set("bg-white");
        elementAccent.set("bg-indigo-700");
        inputBorder.set("border border-zinc-300");
        inputBackground.set("bg-white");
        scrollbarBackground.set("##2b2b2b");
        dropdownElement.set("bg-[#ffffff]");
        dropdownButton.set("hover:bg-zinc-200");
        firstHeaderSection.set("bg-[#ffffff]");
        secondHeaderSection.set("bg-[#0f0f0f]");
        secondHeaderSectionText.set("text-[#f1f1f1]");
        addToCartButton.set("bg-[#0F0F0F] text-white");
        buttonHover.set("transition hover:bg-[#e0e0e0]")
    }
})