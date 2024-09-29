import type { CustomResponse } from "../types/misc";
import { AppwriteException } from "appwrite";

export function handleAppwriteException(error: unknown): CustomResponse {
    if (error instanceof AppwriteException) {
        switch (error.code) {
            case 401:
                return {
                    message: "Unauthorized. Please check your credentials and try again.",
                    success: false,
                };

            case 429:
                return {
                    message: "Too many requests",
                    success: false,
                };

            default:
                return {
                    message: error.message,
                    success: false,
                };
        }

    } else {
        return {
            message: String(error),
            success: false,
        };
    }
}