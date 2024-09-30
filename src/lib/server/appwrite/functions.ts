import { 
    APPWRITE_DATABASE_ID,
} from '$env/static/private';

import { 
    PUBLIC_USERS_ID
} from '$env/static/public';

import { handleAppwriteException } from '$lib/scripts/appwrite/misc';
import type { CustomResponse } from '$lib/scripts/types/misc';
import { databases } from './client';

export async function createUser(userID: string, name: string, email: string): Promise<CustomResponse>{
    try {
        const result = await databases.createDocument(
            APPWRITE_DATABASE_ID,
            PUBLIC_USERS_ID,
            userID,
            {
                name: name,
                email: email
            }
        );

        return {
            message: result,
            success: true,
        };

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function getUserInfo(userID: string): Promise<CustomResponse>{
    try {
        const result = await databases.getDocument(
            APPWRITE_DATABASE_ID,
            PUBLIC_USERS_ID,
            userID,
        );

        const userInfo: any = result;

        return {
            message: {
                userID: userInfo.$id,
                email: userInfo.email,
                name: userInfo.name,
                shippingAddress: userInfo.shippingAddress,
                wishlist: userInfo.wishlist,
                orders: userInfo.orders,
                country: userInfo.country,
            },
            success: true,
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function updateAccountDetails(userID: string, name: string): Promise<CustomResponse>{
    try {
        const result = await databases.updateDocument(
            APPWRITE_DATABASE_ID,
            PUBLIC_USERS_ID,
            userID,
            {
                name: name,
            }
        );

        if (result.$id){
            return {
                success: true,
                message: "Account info updated successfully"
            }

        } else {
            return {
                message: "An error occured while updating your account details", 
                success: false,
            }
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}
