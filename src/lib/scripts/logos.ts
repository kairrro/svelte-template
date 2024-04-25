

export function Hamburger( dimensions: string = "30px" ){
    return `
        <svg viewBox="-0.5 0 25 25" width=${dimensions} height=${dimensions}  fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f1f1f1">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M2 12.32H22" stroke="#f1f1f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 18.32H22" stroke="#f1f1f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6.32001H22" stroke="#f1f1f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}