let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let btn =  document.querySelector("button");
let body = document.body;

div1.addEventListener("mouseenter",()=>{
    div1.style.backgroundImage = "url(https://i.pinimg.com/474x/cc/58/3c/cc583c6d136fff2481317dce00fd3bcb.jpg)";
    div1.addEventListener("mouseleave",()=>{
    div1.style.backgroundImage = "url(https://i.pinimg.com/736x/fb/b8/40/fbb840f6f112970c3fba7b780974a9c6.jpg)";
    });
});

div2.addEventListener("mouseenter",()=>{
    div2.style.backgroundImage = "url(https://i.pinimg.com/474x/8f/2f/9c/8f2f9cf4137b4bd66d08a5d78f347b63.jpg)";
    div2.addEventListener("mouseleave",()=>{
    div2.style.backgroundImage = "url(https://i.pinimg.com/736x/2f/71/ac/2f71ac6517a2e51bf52126660d2e9e55.jpg)";
    });
});
