import { ID } from "appwrite";
import type { CustomResponse } from "../types/misc";
import { account } from "./client";
import { handleAppwriteException } from "./misc";
import { siteURL } from "../globals/misc";

export async function signInWithEmail(email: string, password: string){
    try {
        const session = await account.createEmailPasswordSession(
            email, 
            password,
        );
    
        if (session.$id){
            return {
                success: true,
            }

        } else {
            return {
                message: "An error occurred",
                success: false,
            }
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function getUserData(): Promise<CustomResponse>{
    try {
        const data = await account.get();
        
        return {
            message: data,
            success: true,
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function getSession(): Promise<CustomResponse>{
    try {
        const result = await account.getSession('current');

        return {
            message: result,
            success: true,
        }
        
    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function Logout(): Promise<CustomResponse>{
    try {
        const result = await account.deleteSession('current');
        
        return {
            message: result,
            success: true,
        };

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function createAccount(name: string, email: string, password: string): Promise<CustomResponse>{
    try {
        const userID = ID.unique()

        await account.create(
            userID,
            email, 
            password,
            name,
        );

        return {
            success: true,
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<CustomResponse>{
    try {
        const result = await account.updatePassword(newPassword, oldPassword);

        return {
            message: result,
            success: true,
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function forgotPassword(email: string): Promise<CustomResponse>{
    try {
        await account.createRecovery(
            email,
            `${siteURL}/reset-password/`
        );

        return {
            success: true,
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}

export async function resetPassword(userID: string, secretKey: string, password: string): Promise<CustomResponse>{
    try {
        await account.updateRecovery(
            userID,
            secretKey,
            password
        );

        return {
            success: true,
        }

    } catch (error){
        return handleAppwriteException(error);
    }
}