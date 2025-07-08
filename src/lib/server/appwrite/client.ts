import { 
    APPWRITE_API_KEY, 
} from '$env/static/private';

import { 
    PUBLIC_PROJECT_ID,
} from '$env/static/public';

import { Client, Account, Databases } from "node-appwrite";

export const adminClient = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(PUBLIC_PROJECT_ID) 
    .setKey(APPWRITE_API_KEY);

export const account = new Account(adminClient);
export const databases = new Databases(adminClient);