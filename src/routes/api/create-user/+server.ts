import type { RequestHandler } from "@sveltejs/kit";
import { createUser } from "$lib/server/appwrite/functions";
import type { CustomResponse } from "$lib/scripts/types/misc";

export const POST: RequestHandler = async ({ request }) => {
    const { userID, name, email } = await request.json();

    const result = await createUser(userID, name, email);

    let payload: CustomResponse;

    if (result.success){
        payload = {
            message: "Account successfully created",
            success: true,
        }

    } else {
        payload = {
            message: result.message,
            success: false,
        }
    }

    return new Response(JSON.stringify(payload), {
        status: result.success ? 200 : 400,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}