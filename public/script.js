$(function(){
    let dateRangePicker = document.getElementById('datesSejour');
    let pickerRange = new Litepicker({
        element: dateRangePicker,
        format: 'YYYY-MM-DD',
        delimiter: " ",
        singleMode: false,
        lang: "fr-FR"
    });
});

//Librairie importée dans le HTML via une balise <script> qui permet d'afficher un calendrier pour sélectionner des dates 



const prix = document.querySelector('#priceRange');
const paraPrix = document.querySelector(".prix");

prix.addEventListener('mousemove', function(e){
    console.log(e);
    paraPrix.innerHTML = ": " + e.target.value + "€";
})

const distance = document.querySelector('#distanceRange');
const paraDist = document.querySelector(".distance");

distance.addEventListener('mousemove', function(e){
    paraDist.innerHTML = ": " + e.target.value + " m"
})


document.querySelector("#connexion").addEventListener("click", function(event){
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector("#register").addEventListener("click", function(event){
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

