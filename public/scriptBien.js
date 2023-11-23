document.querySelector("#connexion").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})