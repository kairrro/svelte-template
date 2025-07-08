

export function Hamburger( color: string = "#f1f1f1", dimensions: string = "30px" ){
    return `
        <svg viewBox="-0.5 0 25 25" width=${dimensions} height=${dimensions}  fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f1f1f1">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M2 12.32H22" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 18.32H22" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6.32001H22" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Warning( dimensions: string = "25px", color: string = "#fde10d" ){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M18.2202 21.25H5.78015C5.14217 21.2775 4.50834 21.1347 3.94373 20.8364C3.37911 20.5381 2.90402 20.095 2.56714 19.5526C2.23026 19.0101 2.04372 18.3877 2.02667 17.7494C2.00963 17.111 2.1627 16.4797 2.47015 15.92L8.69013 5.10999C9.03495 4.54078 9.52077 4.07013 10.1006 3.74347C10.6804 3.41681 11.3346 3.24518 12.0001 3.24518C12.6656 3.24518 13.3199 3.41681 13.8997 3.74347C14.4795 4.07013 14.9654 4.54078 15.3102 5.10999L21.5302 15.92C21.8376 16.4797 21.9907 17.111 21.9736 17.7494C21.9566 18.3877 21.7701 19.0101 21.4332 19.5526C21.0963 20.095 20.6211 20.5381 20.0565 20.8364C19.4919 21.1347 18.8581 21.2775 18.2202 21.25V21.25Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.8809 17.15C10.8809 17.0021 10.9102 16.8556 10.9671 16.7191C11.024 16.5825 11.1074 16.4586 11.2125 16.3545C11.3175 16.2504 11.4422 16.1681 11.5792 16.1124C11.7163 16.0567 11.8629 16.0287 12.0109 16.03C12.2291 16.034 12.4413 16.1021 12.621 16.226C12.8006 16.3499 12.9398 16.5241 13.0211 16.7266C13.1023 16.9292 13.122 17.1512 13.0778 17.3649C13.0335 17.5786 12.9272 17.7745 12.7722 17.9282C12.6172 18.0818 12.4203 18.1863 12.2062 18.2287C11.9921 18.2711 11.7703 18.2494 11.5685 18.1663C11.3666 18.0833 11.1938 17.9426 11.0715 17.7618C10.9492 17.5811 10.8829 17.3683 10.8809 17.15ZM11.2409 14.42L11.1009 9.20001C11.0876 9.07453 11.1008 8.94766 11.1398 8.82764C11.1787 8.70761 11.2424 8.5971 11.3268 8.5033C11.4112 8.40949 11.5144 8.33449 11.6296 8.28314C11.7449 8.2318 11.8697 8.20526 11.9959 8.20526C12.1221 8.20526 12.2469 8.2318 12.3621 8.28314C12.4774 8.33449 12.5805 8.40949 12.6649 8.5033C12.7493 8.5971 12.8131 8.70761 12.852 8.82764C12.8909 8.94766 12.9042 9.07453 12.8909 9.20001L12.7609 14.42C12.7609 14.6215 12.6808 14.8149 12.5383 14.9574C12.3957 15.0999 12.2024 15.18 12.0009 15.18C11.7993 15.18 11.606 15.0999 11.4635 14.9574C11.321 14.8149 11.2409 14.6215 11.2409 14.42Z" fill=${color}></path> </g>
        </svg>
    `
}

export function Failed( dimensions: string = "25px", color: string = "#EF4444" ){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Success( dimensions: string = "25px", color: string = "#4ADE80" ){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0">
            </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path fill=${color} d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></g>
        </svg>
    `
}

export function Cart(color: string = "#F1F1F1", dimensions: string = "28px" ){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M8 11.01V11M16 11.01V11M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8M8 8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16M8 8H16" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Trash(color: string = "#ff5c5c", dimensions: string = "20px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="-6.7 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"></path> </g> </g></svg>
    `
}

export function Cancel(dimensions: string = "16px", color: string = "#000000"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke=${color} fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
            <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"/>
            <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"/>
            </g>
        </svg>
    `
}

export function Dropdown(color: string = "#f1f1f1", dimensions: string = "16px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill=${color}></path> </g>
        </svg>
    `
}

export function Verified(color: string = "#22C55E", dimensions: string = "16px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.709 31.709" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M10.595,25.719H4.696c-1.127,0-2.06-0.886-2.06-2.013V5.42c0-1.127,0.933-2.006,2.06-2.006h14.277 c1.127,0,2.047,0.879,2.047,2.006v15.323l2.637-3.135V3.462c0-1.482-1.172-2.684-2.652-2.684H2.559C1.136,0.778,0,1.932,0,3.354 v22.382c0,1.482,1.185,2.688,2.669,2.688h10.358l-1.224-1.063C11.267,26.896,10.864,26.327,10.595,25.719z"></path> <path d="M17.875,6.794H6.034c-0.728,0-1.314,0.591-1.314,1.318c0,0.726,0.587,1.317,1.314,1.317h11.84 c0.728,0,1.312-0.591,1.312-1.317C19.188,7.386,18.602,6.794,17.875,6.794z"></path> <path d="M17.875,11.187H6.034c-0.728,0-1.314,0.59-1.314,1.318c0,0.724,0.587,1.318,1.314,1.318h11.84 c0.728,0,1.312-0.594,1.312-1.318C19.188,11.777,18.602,11.187,17.875,11.187z"></path> <path d="M17.875,15.581H6.034c-0.728,0-1.314,0.558-1.314,1.286c0,0.725,0.587,1.282,1.314,1.282h11.84 c0.728,0,1.312-0.56,1.312-1.282C19.188,16.139,18.602,15.581,17.875,15.581z"></path> <path d="M4.719,21.056c0,0.727,0.587,1.283,1.314,1.283h4.418c0.185-0.473,0.469-1.022,0.857-1.479 c0.408-0.473,0.889-0.82,1.412-1.092H6.034C5.306,19.771,4.719,20.331,4.719,21.056z"></path> <path d="M17.875,19.771h-0.988c0.324,0.137,0.633,0.366,0.916,0.611l1.312,1.123c0.05-0.135,0.076-0.28,0.076-0.437 C19.188,20.346,18.602,19.771,17.875,19.771z"></path> <path d="M30.898,16.249c-0.965-0.828-2.42-0.71-3.246,0.26l-7.564,8.867l-3.781-3.248c-0.968-0.826-2.421-0.717-3.248,0.248 c-0.829,0.967-0.717,2.418,0.248,3.246l5.533,4.752c0.422,0.358,0.951,0.557,1.5,0.557c0.062,0,0.119-0.002,0.182-0.008 c0.607-0.047,1.176-0.336,1.572-0.801l9.066-10.627C31.982,18.528,31.869,17.077,30.898,16.249z"></path> </g> </g> </g>
        </svg>
    `
}

export function Star(color: string = "#4338CA", dimensions: string = "20px"){
    return `
        <svg fill=${color} width=${dimensions} height=${dimensions} viewBox="0 0 24 24" class="star-svg" style="display: inline;">
            <path fill=${color} stroke="none" stroke-miterlimit="10" stroke-width="0" d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"></path>
        </svg>
    `
}

export function EmptyStar(color: string = "#F1F1F1", dimensions: string = "20px"){
    return `
        <svg fill=${color} width=${dimensions} height=${dimensions} viewBox="0 0 24 24" class="star-svg" style="display: inline;">
            <path fill="currentColor" stroke="none" stroke-miterlimit="10" stroke-width="0" d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"></path>
        </svg>
    `
}

export function ProductLogo(color: string = "#F1F1F1", dimensions: string = "160px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M13.05 12.082C13.05 11.6678 12.7142 11.332 12.3 11.332C11.8858 11.332 11.55 11.6678 11.55 12.082H13.05ZM12.3 19H11.55C11.55 19.249 11.6736 19.4818 11.8799 19.6213C12.0862 19.7608 12.3483 19.7888 12.5794 19.696L12.3 19ZM18.044 16.694L18.3234 17.39C18.6077 17.2759 18.794 17.0003 18.794 16.694H18.044ZM18.794 11.9C18.794 11.4858 18.4582 11.15 18.044 11.15C17.6298 11.15 17.294 11.4858 17.294 11.9H18.794ZM12.7554 11.4861C12.4263 11.2346 11.9556 11.2975 11.7041 11.6266C11.4526 11.9557 11.5155 12.4264 11.8446 12.6779L12.7554 11.4861ZM14.348 13.647L13.8926 14.2429C14.1156 14.4133 14.415 14.445 14.6687 14.325L14.348 13.647ZM18.3617 12.578C18.7361 12.4008 18.8961 11.9537 18.719 11.5793C18.5418 11.2049 18.0947 11.0449 17.7203 11.222L18.3617 12.578ZM12.0206 11.386C11.6362 11.5403 11.4497 11.977 11.604 12.3614C11.7583 12.7458 12.195 12.9323 12.5794 12.778L12.0206 11.386ZM18.3234 10.472C18.7078 10.3177 18.8943 9.88097 18.74 9.49658C18.5857 9.11219 18.149 8.92567 17.7646 9.07999L18.3234 10.472ZM17.7647 10.472C18.1491 10.6263 18.5858 10.4397 18.74 10.0553C18.8943 9.6709 18.7077 9.23421 18.3233 9.07995L17.7647 10.472ZM12.5793 6.77495C12.1949 6.62069 11.7582 6.80727 11.604 7.19168C11.4497 7.5761 11.6363 8.01279 12.0207 8.16705L12.5793 6.77495ZM18.4115 9.12322C18.0505 8.92024 17.5932 9.0484 17.3902 9.40947C17.1872 9.77054 17.3154 10.2278 17.6765 10.4308L18.4115 9.12322ZM20.095 10.93L20.4153 11.6082C20.669 11.4884 20.8346 11.237 20.8445 10.9566C20.8545 10.6762 20.7071 10.4137 20.4625 10.2762L20.095 10.93ZM17.7207 11.2218C17.3462 11.3987 17.1859 11.8457 17.3628 12.2203C17.5397 12.5948 17.9867 12.7551 18.3613 12.5782L17.7207 11.2218ZM17.4849 9.27273C17.207 9.57984 17.2306 10.0541 17.5377 10.3321C17.8448 10.61 18.3191 10.5864 18.5971 10.2793L17.4849 9.27273ZM20.5 7.059L21.0561 7.56227C21.2259 7.37459 21.2897 7.11388 21.2255 6.86901C21.1614 6.62413 20.9781 6.42812 20.738 6.34778L20.5 7.059ZM14.348 5L14.586 4.28878C14.2926 4.19056 13.9689 4.28268 13.7711 4.52071L14.348 5ZM11.7181 6.99171C11.4534 7.31031 11.4971 7.78317 11.8157 8.04787C12.1343 8.31258 12.6072 8.26889 12.8719 7.95029L11.7181 6.99171ZM6.27168 9.07995C5.88727 9.23421 5.70069 9.6709 5.85495 10.0553C6.00921 10.4397 6.4459 10.6263 6.83032 10.472L6.27168 9.07995ZM12.5743 8.16705C12.9587 8.01279 13.1453 7.5761 12.991 7.19168C12.8368 6.80727 12.4001 6.62069 12.0157 6.77495L12.5743 8.16705ZM6.91853 10.4298C7.2796 10.2268 7.40776 9.76954 7.20478 9.40847C7.00179 9.0474 6.54454 8.91924 6.18347 9.12222L6.91853 10.4298ZM4.5 10.929L4.13247 10.2752C3.88802 10.4126 3.74065 10.675 3.75046 10.9552C3.76027 11.2355 3.92561 11.4869 4.17908 11.6069L4.5 10.929ZM6.23008 12.5779C6.60445 12.7551 7.05163 12.5953 7.22887 12.2209C7.40611 11.8465 7.2463 11.3994 6.87192 11.2221L6.23008 12.5779ZM6.83042 9.07999C6.44603 8.92567 6.00931 9.11219 5.85499 9.49658C5.70067 9.88097 5.88719 10.3177 6.27158 10.472L6.83042 9.07999ZM12.0156 12.778C12.4 12.9323 12.8367 12.7458 12.991 12.3614C13.1453 11.977 12.9588 11.5403 12.5744 11.386L12.0156 12.778ZM5.9907 10.2746C6.26604 10.584 6.74011 10.6116 7.04956 10.3363C7.35901 10.061 7.38665 9.58689 7.1113 9.27744L5.9907 10.2746ZM4.5 7.471L4.20362 6.78205C3.98226 6.87727 3.82014 7.07305 3.76786 7.30828C3.71558 7.54351 3.77951 7.78954 3.9397 7.96956L4.5 7.471ZM10.244 5L10.8211 4.52099C10.6087 4.26508 10.2531 4.17962 9.94762 4.31105L10.244 5ZM11.7179 7.95001C11.9824 8.26874 12.4553 8.31265 12.774 8.0481C13.0927 7.78355 13.1367 7.31071 12.8721 6.99199L11.7179 7.95001ZM13.045 12.083C13.045 11.6688 12.7092 11.333 12.295 11.333C11.8808 11.333 11.545 11.6688 11.545 12.083H13.045ZM12.295 19L12.0156 19.696C12.2467 19.7888 12.5088 19.7608 12.7151 19.6213C12.9214 19.4818 13.045 19.249 13.045 19H12.295ZM6.551 16.694H5.801C5.801 17.0003 5.9873 17.2759 6.27158 17.39L6.551 16.694ZM7.301 11.9C7.301 11.4858 6.96521 11.15 6.551 11.15C6.13679 11.15 5.801 11.4858 5.801 11.9H7.301ZM12.75 12.6782C13.0793 12.427 13.1425 11.9563 12.8912 11.627C12.64 11.2977 12.1693 11.2345 11.84 11.4858L12.75 12.6782ZM10.244 13.647L9.92328 14.325C10.1768 14.4449 10.476 14.4134 10.699 14.2432L10.244 13.647ZM6.87172 11.222C6.49729 11.0449 6.05016 11.2049 5.87303 11.5793C5.6959 11.9537 5.85585 12.4008 6.23028 12.578L6.87172 11.222ZM11.55 12.082V19H13.05V12.082H11.55ZM12.5794 19.696L18.3234 17.39L17.7646 15.998L12.0206 18.304L12.5794 19.696ZM18.794 16.694V11.9H17.294V16.694H18.794ZM11.8446 12.6779L13.8926 14.2429L14.8034 13.0511L12.7554 11.4861L11.8446 12.6779ZM14.6687 14.325L18.3617 12.578L17.7203 11.222L14.0273 12.969L14.6687 14.325ZM12.5794 12.778L18.3234 10.472L17.7646 9.07999L12.0206 11.386L12.5794 12.778ZM18.3233 9.07995L12.5793 6.77495L12.0207 8.16705L17.7647 10.472L18.3233 9.07995ZM17.6765 10.4308L19.7275 11.5838L20.4625 10.2762L18.4115 9.12322L17.6765 10.4308ZM19.7747 10.2518L17.7207 11.2218L18.3613 12.5782L20.4153 11.6082L19.7747 10.2518ZM18.5971 10.2793L21.0561 7.56227L19.9439 6.55573L17.4849 9.27273L18.5971 10.2793ZM20.738 6.34778L14.586 4.28878L14.11 5.71122L20.262 7.77022L20.738 6.34778ZM13.7711 4.52071L11.7181 6.99171L12.8719 7.95029L14.9249 5.47929L13.7711 4.52071ZM6.83032 10.472L12.5743 8.16705L12.0157 6.77495L6.27168 9.07995L6.83032 10.472ZM6.18347 9.12222L4.13247 10.2752L4.86753 11.5828L6.91853 10.4298L6.18347 9.12222ZM4.17908 11.6069L6.23008 12.5779L6.87192 11.2221L4.82092 10.2511L4.17908 11.6069ZM6.27158 10.472L12.0156 12.778L12.5744 11.386L6.83042 9.07999L6.27158 10.472ZM7.1113 9.27744L5.0603 6.97244L3.9397 7.96956L5.9907 10.2746L7.1113 9.27744ZM4.79638 8.15995L10.5404 5.68895L9.94762 4.31105L4.20362 6.78205L4.79638 8.15995ZM9.6669 5.47901L11.7179 7.95001L12.8721 6.99199L10.8211 4.52099L9.6669 5.47901ZM11.545 12.083V19H13.045V12.083H11.545ZM12.5744 18.304L6.83042 15.998L6.27158 17.39L12.0156 19.696L12.5744 18.304ZM7.301 16.694V11.9H5.801V16.694H7.301ZM11.84 11.4858L9.78904 13.0508L10.699 14.2432L12.75 12.6782L11.84 11.4858ZM10.5647 12.969L6.87172 11.222L6.23028 12.578L9.92328 14.325L10.5647 12.969Z" fill=${color}></path> </g>
        </svg>
    `
}

export function Loading(color: string = "#0f0f0f", dimensions: string = "100px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill=${color}>
            <circle cx="15" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                <animate attributeName="r" from="9" to="9"
                        begin="0s" dur="0.8s"
                        values="9;15;9" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="0.5" to="0.5"
                        begin="0s" dur="0.8s"
                        values=".5;1;.5" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </circle>
        </svg>
    `
}

export function Profile(color: string = "#F1F1F1", dimensions: string = "28px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
            </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <title></title> <g id="about"> <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"></path> <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"></path> </g> </g>
        </svg>
    `
}

export function Heart(color: string = "#F1F1F1", dimensions: string = "28px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Info(color: string = "#F1F1F1", dimensions: string = "14px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z" fill=${color}></path> </g>
        </svg>
    `
}

export function Moon(color: string = "#F1F1F1", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <title>moon-stars</title> <path d="M29.662 23.93c-0.193-0.456-0.638-0.771-1.155-0.771-0.172 0-0.336 0.035-0.486 0.098l0.008-0.003c-1.219 0.521-2.638 0.824-4.127 0.824-5.937 0-10.751-4.813-10.751-10.751 0-4.458 2.713-8.282 6.579-9.911l0.071-0.026 0.221-0.093c0.444-0.199 0.747-0.636 0.747-1.145 0-0.625-0.458-1.142-1.057-1.235l-0.007-0.001c-0.676-0.106-1.455-0.167-2.249-0.167-8.421 0-15.248 6.827-15.248 15.248s6.827 15.248 15.248 15.248c4.91 0 9.278-2.321 12.067-5.925l0.026-0.035c0.161-0.208 0.258-0.473 0.258-0.76 0-0.197-0.046-0.383-0.127-0.548l0.003 0.007zM22.326 27.779c-1.44 0.612-3.115 0.968-4.873 0.968-7.041 0-12.75-5.708-12.75-12.75 0-6.189 4.41-11.349 10.26-12.507l0.081-0.013c-2.694 2.435-4.379 5.942-4.379 9.843 0 7.319 5.933 13.252 13.252 13.252 0.242 0 0.482-0.006 0.72-0.019l-0.033 0.001c-0.655 0.45-1.404 0.86-2.194 1.193l-0.084 0.031zM28.922 4.996h-2.998v-3c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 3h-3c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h3v2.999c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-2.999h2.998c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM20 9.75c-0.69 0-1.25 0.56-1.25 1.25v0.75h-0.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h0.75v0.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-0.75h0.75c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-0.75v-0.75c-0-0.69-0.56-1.25-1.25-1.25h-0z"></path> </g>
        </svg>
    `
}

export function Sun(color: string = "#F1F1F1", dimensions: string = "26px"){
    return `
        <svg width=${dimensions} height=${dimensions} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill=${color}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M31.998,14.002c-9.941,0-18,8.059-18,18s8.059,18,18,18 s18-8.059,18-18S41.939,14.002,31.998,14.002z M42.998,33.002c-0.553,0-1-0.447-1-1c0-5.523-4.478-10-10-10c-0.553,0-1-0.447-1-1 s0.447-1,1-1c6.627,0,12,5.373,12,12C43.998,32.555,43.551,33.002,42.998,33.002z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M63,31H53c-0.553,0-1,0.447-1,1s0.447,1,1,1h10 c0.553,0,1-0.447,1-1S63.553,31,63,31z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M11.457,36.47l-3.863,1.035c-0.534,0.144-0.851,0.692-0.707,1.226 c0.143,0.533,0.69,0.85,1.225,0.706l3.863-1.035c0.533-0.143,0.85-0.69,0.707-1.225C12.539,36.644,11.99,36.327,11.457,36.47z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M49.32,22c0.277,0.479,0.888,0.643,1.367,0.366l8.66-5 c0.479-0.276,0.643-0.888,0.365-1.366c-0.275-0.479-0.887-0.642-1.365-0.365l-8.66,5C49.208,20.912,49.045,21.521,49.32,22z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M17.858,46.143c-0.39-0.391-1.023-0.389-1.414,0l-2.828,2.828 c-0.391,0.391-0.39,1.025,0.001,1.415c0.39,0.391,1.022,0.39,1.413-0.001l2.828-2.828C18.249,47.168,18.249,46.534,17.858,46.143z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M42,14.68c0.479,0.276,1.09,0.113,1.367-0.366l5-8.66 C48.644,5.175,48.48,4.563,48,4.287c-0.478-0.276-1.088-0.112-1.365,0.366l-4.999,8.661C41.358,13.793,41.522,14.403,42,14.68z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M26.824,51.318c-0.532-0.143-1.08,0.176-1.225,0.707l-1.035,3.863 c-0.143,0.535,0.176,1.083,0.709,1.226c0.533,0.144,1.08-0.173,1.223-0.708l1.035-3.863C27.676,52.012,27.359,51.463,26.824,51.318 z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M32,12c0.554,0,1.001-0.446,1.002-1V1c0-0.553-0.447-1-1.002-1 c-0.551,0-0.998,0.447-0.999,1l0.001,10C31.002,11.553,31.449,12,32,12z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M38.402,52.025c-0.141-0.532-0.689-0.85-1.225-0.707 c-0.533,0.143-0.848,0.692-0.707,1.225l1.035,3.863c0.144,0.535,0.693,0.85,1.227,0.707s0.849-0.689,0.705-1.225L38.402,52.025z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M20.637,14.312c0.275,0.479,0.887,0.643,1.363,0.367 c0.48-0.277,0.645-0.887,0.368-1.367l-5-8.66C17.092,4.174,16.48,4.01,16,4.287c-0.477,0.275-0.641,0.887-0.365,1.365 L20.637,14.312z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M47.558,46.142c-0.388-0.39-1.022-0.39-1.414,0 c-0.391,0.39-0.388,1.024,0,1.414l2.828,2.828c0.392,0.392,1.025,0.389,1.415-0.001c0.391-0.39,0.391-1.021-0.001-1.413 L47.558,46.142z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M4.654,17.365l8.662,4.999c0.477,0.276,1.088,0.113,1.363-0.364 c0.277-0.479,0.115-1.09-0.364-1.367l-8.661-5C5.176,15.356,4.564,15.52,4.287,16C4.013,16.477,4.176,17.089,4.654,17.365z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M52.027,38.4l3.863,1.035c0.535,0.145,1.082-0.176,1.225-0.709 c0.144-0.532-0.172-1.079-0.707-1.223l-3.863-1.035c-0.531-0.145-1.081,0.173-1.225,0.707C51.176,37.709,51.496,38.256,52.027,38.4 z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M12,32c0.001-0.554-0.445-1-0.998-1.002L1,31 c-0.552,0-1,0.445-1,1c0.001,0.551,0.448,1,1.001,1l10.001-0.002C11.553,32.998,12.001,32.552,12,32z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M52.545,27.529l3.863-1.035c0.535-0.143,0.85-0.693,0.706-1.227 c-0.142-0.531-0.688-0.848-1.224-0.705l-3.863,1.035c-0.533,0.141-0.85,0.691-0.707,1.225 C51.461,27.356,52.012,27.67,52.545,27.529z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M14.68,42c-0.275-0.48-0.886-0.644-1.365-0.368l-8.661,5.002 C4.176,46.91,4.01,47.52,4.287,48c0.277,0.477,0.889,0.641,1.367,0.365l8.66-5.002C14.791,43.088,14.957,42.479,14.68,42z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M46.144,17.856c0.389,0.392,1.022,0.388,1.414,0l2.828-2.828 c0.392-0.392,0.39-1.024-0.002-1.415c-0.388-0.39-1.021-0.391-1.412,0.001l-2.828,2.828C45.752,16.83,45.754,17.466,46.144,17.856z "></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M22,49.32c-0.479-0.277-1.088-0.113-1.365,0.364l-5,8.663 c-0.275,0.478-0.115,1.088,0.365,1.365c0.479,0.274,1.09,0.11,1.367-0.367l4.998-8.662C22.641,50.207,22.48,49.597,22,49.32z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M37.178,12.68c0.531,0.145,1.078-0.176,1.225-0.707l1.035-3.863 c0.143-0.535-0.176-1.083-0.709-1.225c-0.531-0.144-1.08,0.172-1.223,0.707l-1.035,3.863C36.324,11.986,36.645,12.536,37.178,12.68 z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M32,52c-0.553-0.002-0.998,0.446-1,0.998l0.002,10.004 C31.002,63.552,31.445,64,32,64c0.553,0,1-0.449,1.001-1l-0.003-10.002C32.998,52.447,32.555,52,32,52z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#F1F1F1" d="M25.6,11.973c0.139,0.533,0.691,0.85,1.225,0.707 c0.532-0.141,0.846-0.691,0.707-1.225l-1.035-3.863c-0.145-0.535-0.693-0.851-1.227-0.706c-0.531,0.142-0.85,0.688-0.705,1.224 L25.6,11.973z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M43.363,49.687c-0.275-0.478-0.883-0.644-1.363-0.365 c-0.479,0.274-0.641,0.885-0.367,1.364l5.004,8.661c0.275,0.478,0.883,0.644,1.363,0.366c0.479-0.277,0.642-0.889,0.367-1.367 L43.363,49.687z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M16.443,17.856c0.387,0.394,1.023,0.39,1.414,0 c0.391-0.388,0.387-1.021,0-1.414l-2.828-2.828c-0.393-0.392-1.025-0.39-1.415,0.002c-0.39,0.388-0.392,1.021,0.001,1.412 L16.443,17.856z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M59.348,46.633l-8.663-4.997 c-0.478-0.276-1.087-0.116-1.363,0.366c-0.278,0.477-0.112,1.086,0.364,1.364l8.664,4.999c0.477,0.275,1.086,0.115,1.363-0.365 C59.988,47.521,59.824,46.91,59.348,46.633z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M11.974,25.599L8.11,24.563c-0.536-0.144-1.083,0.175-1.225,0.708 c-0.144,0.531,0.171,1.08,0.707,1.225l3.863,1.034c0.531,0.146,1.081-0.175,1.225-0.707C12.825,26.293,12.505,25.746,11.974,25.599 z"></path> 
            </g> </g>
        </svg>
    `
}

export function Search(color: string = "#d1d1d1", dimensions: string = "22px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Add(color: string = "#b8b8b8", dimensions: string = "20px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Minus(color: string = "#b8b8b8", dimensions: string = "20px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M6 12H18" stroke=${color} stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Arrow(color: string = "#b8b8b8", dimensions: string = "20px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Construction(color: string = "#b8b8b8", dimensions: string = "20px"){
    return `
        <svg width="24px" height="24px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#d9d9d9;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><polyline class="cls-1" points="7.71 18.68 14.86 18.68 14.86 13.91 1.5 13.91 1.5 18.68 3.89 18.68"></polyline><polyline class="cls-1" points="16.77 18.68 14.86 18.68 14.86 7.23 20.59 7.23 22.5 12.96 22.5 18.68 20.59 18.68"></polyline><circle class="cls-1" cx="18.68" cy="18.68" r="1.91"></circle><circle class="cls-1" cx="5.8" cy="18.68" r="1.91"></circle><polygon class="cls-1" points="12 3.41 10.09 5.32 1.5 5.32 1.5 10.09 4.36 13.91 14.86 13.91 14.86 5.32 14.86 3.41 12 3.41"></polygon><line class="cls-1" x1="16.77" y1="3.41" x2="14.86" y2="3.41"></line><line class="cls-1" x1="7.23" y1="7.23" x2="7.23" y2="11.05"></line><line class="cls-1" x1="11.05" y1="7.23" x2="11.05" y2="11.05"></line><line class="cls-1" x1="17.73" y1="12.95" x2="22.5" y2="12.95"></line></g>
        </svg>
    `
}

export function Clothing(color: string = "#b8b8b8", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M47.36 14.75c.08.29-.021.61-.19.86l-5.39 8.02c-.2.31-.62.48-.971.48-.1 0-.38-.02-.489-.05l-4.32-1.06v19c0 .58-.41 1-1 1h-21c-.59 0-1-.42-1-1v-19l-3.88 1.07c-.45.14-.84-.04-1.09-.43l-5.35-8c-.17-.26-.22-.55-.14-.84.07-.3.28-.5.55-.64l10.91-5.16h5c.59 0 1 .41 1 1 0 2.06 2.89 3.52 4.95 3.52s5.05-1.45 5.05-3.52c0-.58.41-1 1-1h5l10.8 5.06c.28.14.48.39.56.69z"></path></g>
        </svg>
    `
}

export function Bed(color: string = "#b8b8b8", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M5 10C3.347656 10 2 11.347656 2 13L2 26.8125C3.296875 25.6875 4.9375 24.777344 7 24.0625L7 20C7 17.339844 11.542969 17 15.5 17C19.457031 17 24 17.339844 24 20L24 22C24.335938 21.996094 24.65625 22 25 22C25.34375 22 25.664063 21.996094 26 22L26 20C26 17.339844 30.542969 17 34.5 17C38.457031 17 43 17.339844 43 20L43 24.03125C45.058594 24.742188 46.691406 25.671875 48 26.8125L48 13C48 11.347656 46.652344 10 45 10 Z M 25 24C5.90625 24 -0.015625 27.53125 0 37L50 37C50.015625 27.46875 44.09375 24 25 24 Z M 0 39L0 50L7 50L7 46C7 44.5625 7.5625 44 9 44L41 44C42.4375 44 43 44.5625 43 46L43 50L50 50L50 39Z"></path></g>
        </svg>
    `
}

export function Shoe(color: string = "#b8b8b8", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 14 14" id="svg2" fill=${color}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <metadata id="metadata8"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title></dc:title> </cc:work> </rdf:rdf> </metadata> <defs id="defs6"></defs> <rect width="14" height="14" x="0" y="0" id="canvas" style="fill:none;stroke:none;visibility:hidden"></rect> <path d="M 0.75,3 C 0.75,3 0,5.25 0,8.25 l 5.5,0 c 0.5,0 1.306389,1 1.3,1 l 7.2,0 C 14,6.25 11,6 10,6 L 8,6 C 7,4 5,3 5,3 L 4.75,3 C 4,4.508412 2.016472,4.508412 1,3 z M 5.5,4 C 5.776142,4 6,4.2238577 6,4.5 6,4.7761423 5.776142,5 5.5,5 5.223858,5 5,4.7761423 5,4.5 5,4.2238577 5.223858,4 5.5,4 z m 1,1 C 6.776142,5 7,5.2238577 7,5.5 7,5.7761423 6.776142,6 6.5,6 6.223858,6 6,5.7761423 6,5.5 6,5.2238577 6.223858,5 6.5,5 z M 0,9 l 0,2 5.25,0 0,-2 z m 7.3,1 c 0,0 0.7,1 1.2,1 l 5.5,0 0,-1 z" id="shoes" style="fill:${color};fill-opacity:1;stroke:none"></path> </g>
        </svg>
    `
}

export function Purse(color: string = "#b8b8b8", dimensions: string = "24px"){
    return `
        <svg fill=${color} width=${dimensions} height=${dimensions} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> 
            <g> <path d="M495.66,201.532h-15.251V92.596c0-21.057-17.07-38.128-38.128-38.128H38.128C17.07,54.468,0,71.538,0,92.596v326.808 c0,21.057,17.07,38.128,38.128,38.128h404.153c21.057,0,38.128-17.07,38.128-38.128V310.468h15.251 c9.024,0,16.34-7.316,16.34-16.34v-76.255C512,208.848,504.684,201.532,495.66,201.532z M409.6,370.383 c0,9.024-7.316,16.34-16.34,16.34H87.149c-9.024,0-16.34-7.316-16.34-16.34V140.528c0-9.024,7.316-16.34,16.34-16.34H393.26 c9.024,0,16.34,7.316,16.34,16.34v61.004h-32.681v-39.217c0-3.008-2.439-5.447-5.447-5.447H108.936 c-3.008,0-5.447,2.439-5.447,5.447v186.281c0,3.008,2.439,5.447,5.447,5.447h262.536c3.008,0,5.447-2.439,5.447-5.447v-38.128 H409.6V370.383z M479.319,277.787c-13.502,0-102.744,0-116.599,0c-12.013,0-21.787-9.774-21.787-21.787 c0-12.013,9.774-21.787,21.787-21.787c13.54,0,103.086,0,116.599,0V277.787z"></path> </g> </g> </g>
        </svg>
    `
}

export function Lingerie(color: string = "#b8b8b8", dimensions: string = "24px"){
    return `
        <svg fill=${color} height=${dimensions} width=${dimensions} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.95 511.95" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M389.523,357.393c-10.078-29.44-22.613-66.074-22.613-101.444c0-37.069,24.542-89.711,24.798-90.232 c1.297-2.773,1.015-6.024-0.734-8.533c-7.893-11.255-13.491-44.535-15.556-72.525c-1.656-22.588,8.235-65.271,8.337-65.698 c1.058-4.54-1.715-9.097-6.246-10.223l-34.133-8.533c-0.043-0.017-0.085,0.009-0.137,0c-1.135-0.273-2.295-0.256-3.439-0.051 c-0.196,0.034-0.375,0.068-0.572,0.12c-0.964,0.239-1.911,0.597-2.756,1.178c-0.35,0.247-35.49,24.098-80.495,24.098 c-44.783,0-80.145-23.859-80.495-24.098c-0.845-0.572-1.775-0.922-2.731-1.169c-0.205-0.051-0.401-0.085-0.606-0.119 c-1.135-0.213-2.295-0.222-3.43,0.043c-0.043,0.009-0.094-0.017-0.137,0L134.445,8.74c-4.523,1.126-7.296,5.683-6.238,10.223 c0.094,0.427,9.992,43.11,8.328,65.698c-2.057,27.989-7.654,61.269-15.548,72.525c-1.749,2.509-2.031,5.769-0.734,8.533 c0.247,0.521,24.789,53.103,24.789,90.232c0,35.371-12.527,72.004-22.605,101.444c-6.443,18.816-11.529,33.681-11.529,43.622 c0,3.396,2.022,6.468,5.137,7.825c31.795,13.833,114.33,57.788,114.33,94.575c0,4.71,3.823,8.533,8.533,8.533h34.133 c4.719,0,8.533-3.823,8.533-8.533c0-36.787,82.534-80.742,114.338-94.575c3.115-1.357,5.129-4.429,5.129-7.825 C401.043,391.074,395.966,376.209,389.523,357.393z M205.246,108.783c-11.81-12.169-19.635-30.071-23.467-53.419 c22.852,11.29,32.785,38.323,32.623,61.056C211.117,114.185,208.045,111.667,205.246,108.783z M306.716,108.783 c-2.756,2.842-5.777,5.316-9.003,7.526c-0.162-22.699,9.728-49.664,32.469-60.945C326.351,78.712,318.517,96.615,306.716,108.783z M332.742,27.486c-0.094,2.987-0.299,5.837-0.495,8.695c-39.023,12.194-54.161,55.748-51.217,88.132 c-0.35,0.111-0.7,0.23-1.05,0.341c-3.319,0.973-6.827,1.758-10.496,2.295c-0.427,0.06-0.879,0.102-1.314,0.154 c-7.885,1.024-16.23,1.033-24.115,0.034c-0.503-0.06-1.015-0.111-1.51-0.179c-3.627-0.521-7.108-1.297-10.394-2.253 c-0.358-0.102-0.708-0.23-1.067-0.341c2.935-32.401-12.254-75.972-51.371-88.201c-0.196-2.85-0.401-5.692-0.495-8.67 c-0.026-0.811-0.077-1.579-0.094-2.398c-0.017-0.597,0.017-1.263,0-1.86c15.633,8.021,43.631,19.379,76.851,19.379 c33.22,0,61.218-11.358,76.851-19.379c-0.009,0.606,0.026,1.263,0.009,1.86C332.819,25.916,332.768,26.684,332.742,27.486z"></path> </g> </g> </g>
        </svg>
    `
}

export function Handbag(color: string = "#b8b8b8", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} fill=${color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
            </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M20,7H17.91A5.993,5.993,0,0,0,6.09,7H4A2,2,0,0,0,2,9v2l1.4,7.716A4,4,0,0,0,7.338,22h9.324A4,4,0,0,0,20.6,18.716L22,11V9A2,2,0,0,0,20,7ZM12,4a4.006,4.006,0,0,1,3.873,3H8.127A4.006,4.006,0,0,1,12,4Zm8,6.82-.4,2.218-5.741,2.3a4.977,4.977,0,0,1-3.712,0L4.4,13.038,4,10.82v-.1l6.886,2.754a2.985,2.985,0,0,0,2.228,0L20,10.723Z"></path></g>
        </svg>
    `
}

export function Shop(color: string = "#000000", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M15 14V17.6C15 18.4401 15 18.8601 14.8365 19.181C14.6927 19.4632 14.4632 19.6927 14.181 19.8365C13.8601 20 13.4401 20 12.6 20H7.40001C6.55994 20 6.1399 20 5.81903 19.8365C5.53679 19.6927 5.30731 19.4632 5.1635 19.181C5.00001 18.8601 5.00001 18.4401 5.00001 17.6V10M19 10V20M5.00001 16H15M5.55778 4.88446L3.5789 8.84223C3.38722 9.22559 3.29138 9.41727 3.3144 9.57308C3.3345 9.70914 3.40976 9.8309 3.52246 9.90973C3.65153 10 3.86583 10 4.29444 10H19.7056C20.1342 10 20.3485 10 20.4776 9.90973C20.5903 9.8309 20.6655 9.70914 20.6856 9.57308C20.7086 9.41727 20.6128 9.22559 20.4211 8.84223L18.4422 4.88446C18.2817 4.5634 18.2014 4.40287 18.0817 4.28558C17.9758 4.18187 17.8482 4.10299 17.7081 4.05465C17.5496 4 17.3701 4 17.0112 4H6.98887C6.62991 4 6.45043 4 6.29198 4.05465C6.15185 4.10299 6.02422 4.18187 5.91833 4.28558C5.79858 4.40287 5.71832 4.5634 5.55778 4.88446Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Newsletter(dimensions: string = "90px"){
    return `
        <svg width=${dimensions} height=${dimensions} version="1.1" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#C0874A;" points="511.401,173.663 502.513,179.269 458.244,207.066 268.606,326.073 266.213,327.652 265.699,327.968 256.043,334.048 255.701,334.207 247.753,329.232 246.299,328.284 66.659,215.516 54.439,207.856 0.598,174.057 0,173.663 54.439,139.469 249.548,16.988 261.854,16.988 458.244,140.258 464.74,144.365 "></polygon> <path style="fill:#69B25F;" d="M467.859,16.065v383.862c0,8.807-7.88,15.985-17.641,15.985H62.29 c-9.671,0-17.551-7.178-17.551-15.985V16.065C44.739,7.176,52.619,0,62.29,0h387.928C459.978,0,467.859,7.176,467.859,16.065z"></path> <g> <g> <rect x="110.787" y="75.101" style="fill:#A2CC86;" width="190.508" height="25.378"></rect> <rect x="110.787" y="71.093" style="fill:#53A654;" width="190.508" height="25.378"></rect> </g> <g> <rect x="110.787" y="214.682" style="fill:#A2CC86;" width="289.501" height="25.378"></rect> <rect x="110.787" y="210.675" style="fill:#53A654;" width="289.501" height="25.378"></rect> </g> <g> <rect x="110.787" y="284.473" style="fill:#A2CC86;" width="289.501" height="25.378"></rect> <rect x="110.787" y="280.466" style="fill:#53A654;" width="289.501" height="25.378"></rect> </g> <g> <rect x="110.787" y="144.891" style="fill:#A2CC86;" width="289.501" height="25.378"></rect> <rect x="110.787" y="140.884" style="fill:#53A654;" width="289.501" height="25.378"></rect> </g> 
            </g> <polygon style="fill:#F0BA7D;" points="256.299,322.118 253.308,323.881 195.45,357.662 188.356,361.847 12.392,464.583 0.598,471.413 0.598,172.824 71.446,214.169 246.642,316.464 248.009,317.272 256.043,321.971 "></polygon> <g> <path style="fill:#E5A864;" d="M510.236,167.293c0.97-0.567,1.764-0.111,1.764,1.013v294.576c0,1.124-0.019,2.027-0.043,2.006 s-0.139-0.103-0.257-0.184c-0.118-0.081-0.291-0.197-0.385-0.257c-0.094-0.061-0.19-0.11-0.214-0.11 c-0.024,0-0.837-0.464-1.807-1.03L265.498,320.993c-0.97-0.566-2.556-1.497-3.524-2.068l-0.839-0.495 c-0.968-0.571-2.452-1.451-3.298-1.956c-0.846-0.505-0.743-1.379,0.229-1.944l6.209-3.604c0.972-0.564,1.825-1.059,1.895-1.099 c0.071-0.04,0.186-0.107,0.257-0.147c0.071-0.04,0.923-0.535,1.895-1.1l5.44-3.161c0.972-0.564,2.56-1.49,3.531-2.057 L510.236,167.293z"></path> </g> <circle style="opacity:0.68;fill:#EEF3CA;" cx="377.142" cy="75.101" r="38.186"></circle> <path style="fill:#C0874A;" d="M512,425.251v45.808h-0.513l-7.35,0.342H27.689l-0.341-7.094 c8.632-5.896,20.082-13.845,27.518-18.887l1.025-0.684l24.956-17.178l38.97-26.92l11.28-7.777l118.365-81.615l7.947-5.556 c1.88-1.195,4.017-2.222,6.324-2.904c2.735-0.941,5.726-1.539,8.717-1.795c1.025-0.086,1.965-0.171,2.991-0.086 c1.025-0.171,2.052-0.171,3.077-0.171c2.735-0.085,5.385,0.171,7.948,0.683c2.734,0.513,5.213,1.369,7.435,2.564l89.735,49.91 l44.354,24.697l11.538,6.41l41.79,23.245l27.518,15.298c0.77,0.428,1.624,0.855,2.479,1.368 C511.487,424.995,511.743,425.166,512,425.251z"></path> <path style="fill:#ECB168;" d="M512,441.404v29.997H0.598v-29.997c8.974-5.471,20.768-12.905,28.459-17.52l1.025-0.684 l25.724-15.98l40.252-24.955l11.623-7.264l122.125-75.805l8.204-5.127c4.273-2.564,9.828-3.846,15.298-3.932 c1.025-0.086,1.965-0.086,2.991,0c1.026-0.086,2.051-0.086,3.077,0c2.393,0,4.701,0.257,6.923,0.769 c3.077,0.599,5.896,1.71,8.29,3.163l11.879,7.349l75.377,46.834l43.073,26.75l11.196,7.007l40.68,25.212l26.748,16.665 c0.77,0.428,1.539,0.854,2.393,1.367c5.47,3.505,12.477,7.864,19.058,11.88C507.385,438.669,509.778,440.122,512,441.404z"></path> <path style="opacity:0.2;fill:#BADB9E;" d="M467.816,16.066v4.273c0-8.887-7.863-16.066-17.605-16.066H62.301 c-9.656,0-17.604,7.178-17.604,16.066v-4.273C44.696,7.178,52.645,0,62.301,0h387.911C459.953,0,467.816,7.178,467.816,16.066z"></path> </g> </g>
        </svg>
    `
}

export function UndoHeart(color: string = "#000000", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M4.79501 5C4.62688 5.13993 4.46746 5.29304 4.31803 5.45838C3.90017 5.92074 3.56869 6.46964 3.34255 7.07374C3.1164 7.67785 3 8.32532 3 8.9792C3 9.63308 3.1164 10.2806 3.34255 10.8847C3.56869 11.4888 3.90017 12.0377 4.31803 12.5L10.5162 19.3582C11.3103 20.2368 12.6897 20.2368 13.4838 19.3582L16.1691 16.3869" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3L19 19" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.22217 4.37901C9.76813 4.62924 10.2642 4.99601 10.6821 5.45837V5.45837C11.3874 6.23883 12.6127 6.23883 13.3181 5.45837V5.45837C14.162 4.52459 15.3066 4 16.5001 4C17.6935 4 18.8381 4.52459 19.682 5.45837C20.526 6.39215 21.0001 7.65863 21.0001 8.97919C21.0001 10.2998 20.526 11.5662 19.682 12.5L18.7783 13.5" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Settings(color: string = "#000000", dimensions: string = "24px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M18.8887 10.25C18.5395 10.2462 18.1974 10.151 17.8964 9.97387C17.5954 9.79677 17.3461 9.54393 17.1731 9.24053C17.0002 8.93714 16.9097 8.59372 16.9107 8.2445C16.9117 7.89528 17.0041 7.55241 17.1787 7.24999L17.2987 7.03997C17.4297 6.81781 17.5133 6.57097 17.5443 6.31493C17.5753 6.0589 17.553 5.79924 17.4788 5.55224C17.4046 5.30524 17.2801 5.07626 17.1132 4.87969C16.9462 4.68312 16.7404 4.52317 16.5087 4.40996V4.40996C16.0227 4.17652 15.467 4.13332 14.9507 4.28875C14.4345 4.44418 13.995 4.78704 13.7187 5.24999V5.24999C13.5404 5.54389 13.2894 5.78686 12.9899 5.9555C12.6903 6.12413 12.3524 6.21276 12.0087 6.21276C11.665 6.21276 11.327 6.12413 11.0275 5.9555C10.728 5.78686 10.4769 5.54389 10.2987 5.24999C10.0224 4.78704 9.58291 4.44418 9.06665 4.28875C8.5504 4.13332 7.99469 4.17652 7.5087 4.40996V4.40996C7.27697 4.52317 7.07116 4.68312 6.90421 4.87969C6.73726 5.07626 6.61277 5.30524 6.53858 5.55224C6.46438 5.79924 6.44209 6.0589 6.47309 6.31493C6.50408 6.57097 6.5877 6.81781 6.71869 7.03997L6.83869 7.24999C7.01332 7.55241 7.10571 7.89528 7.10669 8.2445C7.10767 8.59372 7.01721 8.93714 6.84427 9.24053C6.67134 9.54393 6.42196 9.79677 6.12097 9.97387C5.81999 10.151 5.4779 10.2462 5.12869 10.25C4.64217 10.238 4.16698 10.3979 3.78659 10.7015C3.40621 11.005 3.14493 11.4329 3.04868 11.91C2.99868 12.1996 3.01314 12.4967 3.09101 12.7801C3.16887 13.0635 3.30826 13.3263 3.49921 13.5497C3.69016 13.7731 3.92799 13.9516 4.1958 14.0727C4.46362 14.1937 4.75481 14.2543 5.04868 14.25H5.1687C5.5179 14.2538 5.86 14.349 6.16098 14.5261C6.46196 14.7032 6.71131 14.9561 6.88425 15.2595C7.05718 15.5628 7.14768 15.9063 7.1467 16.2555C7.14572 16.6047 7.05333 16.9476 6.87869 17.25L6.82868 17.33C6.56685 17.7935 6.4956 18.3407 6.62998 18.8558C6.76435 19.3709 7.0938 19.8135 7.54868 20.09V20.09C8.00218 20.351 8.53992 20.4239 9.04654 20.293C9.55316 20.1622 9.98834 19.838 10.2587 19.39L10.2787 19.25C10.457 18.9561 10.708 18.7131 11.0075 18.5445C11.307 18.3759 11.6449 18.2872 11.9887 18.2872C12.3324 18.2872 12.6704 18.3759 12.9699 18.5445C13.2694 18.7131 13.5204 18.9561 13.6987 19.25L13.7687 19.39C14.0391 19.8407 14.4761 20.1668 14.9851 20.2978C15.4942 20.4288 16.0343 20.3542 16.4887 20.09C16.9367 19.8197 17.2609 19.3845 17.3917 18.8779C17.5226 18.3712 17.4497 17.8335 17.1887 17.38L17.1287 17.27C16.9541 16.9676 16.8617 16.6247 16.8607 16.2754C16.8597 15.9262 16.9502 15.5829 17.1231 15.2795C17.296 14.9761 17.5454 14.7232 17.8464 14.5461C18.1474 14.369 18.4895 14.2738 18.8387 14.27H18.9587C19.2525 14.2743 19.5438 14.2138 19.8116 14.0927C20.0794 13.9717 20.3172 13.793 20.5082 13.5696C20.6991 13.3462 20.8385 13.0835 20.9164 12.8001C20.9942 12.5167 21.0087 12.2196 20.9587 11.93C20.8669 11.451 20.6088 11.0198 20.2301 10.7124C19.8514 10.405 19.3763 10.2413 18.8887 10.25V10.25Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14.79C13.3807 14.79 14.5 13.6707 14.5 12.29C14.5 10.9093 13.3807 9.78998 12 9.78998C10.6193 9.78998 9.5 10.9093 9.5 12.29C9.5 13.6707 10.6193 14.79 12 14.79Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    `
}

export function Discord(color: string = "#5865F2", dimensions: string = "32px"){
    return `
        <svg width=${dimensions} height=${dimensions} viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g> <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill=${color} fill-rule="nonzero"> </path> </g> </g>
        </svg>
    `
}

export function Twitter(color: string = "#292929", dimensions: string = "32px"){
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${dimensions}" height="${dimensions}" viewBox="26.8 48 460.2 416"><path fill=${color} d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"></path></svg>
    `
}

