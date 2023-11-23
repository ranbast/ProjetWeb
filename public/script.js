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


document.querySelector("#connexion").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})