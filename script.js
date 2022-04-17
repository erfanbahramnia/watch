let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");


setInterval(() => {
    const time = new Date();
    
    hour.innerText = time.getHours();
    minute.innerText = time.getMinutes();
    second.innerText = time.getSeconds();
}, 1000)