import type { RequestHandler } from "@sveltejs/kit";
import type { CustomResponse } from "$lib/scripts/types/misc";

const webhook = "https://discord.com/api/webhooks/1342349615231533167/knI_3KuU_KqCX3Fd0zY8qJKa4diSmRZgwvkVq335wj_HkB4pBaY4id5jnH-ZpXPSlzq-"

export const POST: RequestHandler = async ({ request }) => {
    const { email } = await request.json();

    try {
        const payload: CustomResponse = {
            success: true,
            message: `${email} added to email list`,
        };


        const response = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: `New email added: ${email}`,
            }),
        });
        

        return new Response(JSON.stringify(payload), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        })

    } catch (error) {
        const payload: CustomResponse = {
            success: false,
            message: "Error happened",
        };

        return new Response(JSON.stringify(payload), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}