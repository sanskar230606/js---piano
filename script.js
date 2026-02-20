let h1 = document.querySelector("h1");

document.body.addEventListener("keydown",(val)=>{
    h1.innerHTML = `${val.code} PRESSED`;
    document.body.addEventListener("keyup",(val)=>{
        h1.innerHTML = `${val.code} RELEASED` ;
    });
});
