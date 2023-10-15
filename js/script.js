const container =document.querySelector(".container");
const qrcodebtn = document.querySelector("#qr-form button");

const qrcodeInput = document.querySelector("#qr-form input");

const qrcodeimg = document.querySelector("#qr-code img");


function generateqrcode(){

    const qrcodeInputValue = qrcodeInput.value;

    if(!qrcodeInputValue) return;

    qrcodebtn.innerText = "Gerando código...";

    qrcodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInputValue}`

    qrcodeimg.addEventListener("load", ()=>{
        container.classList.add("active");
        qrcodebtn.innerText = "Código Criado!";
    })

   
}

qrcodebtn.addEventListener("click", ()=>{
    generateqrcode();
})


qrcodeInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        generateqrcode();
    }
})


qrcodeInput.addEventListener("keyup", ()=>{
    if(!qrcodeInput.value){
        container.classList.remove("active");
        qrcodebtn.innerText = "Gerar QR Code"
    }
})