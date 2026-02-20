let main = document.querySelector("main");
let coordinates = document.querySelector(".coordinates");
let h1 = document.querySelector("h1");
let cursor  = document.querySelector("img");

main.addEventListener("mousemove",(val)=>{
    h1.innerHTML = `X : ${val.x} , Y : ${(834 - val.y)}`;
    cursor.style.left=`${val.x}px`;
    cursor.style.top=`${val.y}px`;
});