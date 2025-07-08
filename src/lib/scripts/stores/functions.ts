import { notificationState } from "./values";

export function closeNotification(){
    setTimeout(() => {
        notificationState.set(false)
    }, 3000);
}