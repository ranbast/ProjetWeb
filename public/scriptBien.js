
document.querySelector("#connexion").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector("#register").addEventListener("click", function(){
    document.querySelector(".popupRegister").style.display = "flex";
});

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

document.querySelector(".closeRegister").addEventListener("click",function(){
    document.querySelector(".popupRegister").style.display = "none";
})

document.querySelector("body").addEventListener("click",function(event){
    const eventSrc = event.target;
    const loginPopup = document.querySelector(".popup");
    const popupRegister = document.querySelector(".popupRegister");
    if ((eventSrc.contains(loginPopup)) || (eventSrc.contains(popupRegister))){
        loginPopup.style.display = "none";
        popupRegister.style.display = "none";
    }
})


document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    document.querySelector("#btnComment").addEventListener("click", function () {
        console.log("Button clicked");
        document.querySelector(".textComment").style.display = "block";
    });
});
