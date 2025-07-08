import { Account, Client, Databases } from "appwrite";
import { PUBLIC_PROJECT_ID } from '$env/static/public';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(PUBLIC_PROJECT_ID); 

export const account = new Account(client);
export const databases = new Databases(client);