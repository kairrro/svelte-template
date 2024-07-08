import type { clickOutsideAction } from "../types/misc"

export const clickOutside: clickOutsideAction = (element) => {
    function handleClick(event: MouseEvent) {
      const targetEl = event.target as HTMLElement

      if (element && !element.contains(targetEl)) {
        const clickOutsideEvent = new CustomEvent('outside')
        element.dispatchEvent(clickOutsideEvent)
      }
    }

    document.addEventListener('click', handleClick, true)

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true)
      },
    }
}

export function getCookieValue(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
}
