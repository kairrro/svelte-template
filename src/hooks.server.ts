import type { Handle } from "@sveltejs/kit";
import { DISCORD_WEBHOOK } from '$env/static/private';

export function backTick(text: string){
    return "```" + text + "```";
}

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    if (DISCORD_WEBHOOK){
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');

        const ip = event.getClientAddress();
        const route = String(event.route.id || "Route not found").slice(6) || "/";
        const dateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        const embed = {
            title: ':newspaper:  New Logs',
            description: `Someone visited your site`,
            fields: [
                {
                    name: 'IP Address',
                    value: backTick(ip),
                },
                {
                    name: 'Route',
                    value: backTick(route),
                },
                {
                    name: 'Time of request',
                    value: backTick(dateAndTime),
                },
            ]
        };

        const payload = {
            embeds: [embed],
        }

        const webhookResponse = await fetch(DISCORD_WEBHOOK, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        return response;
    }

    return response;
}