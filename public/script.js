$(function(){
    let dateRangePicker = document.getElementById('dateSejour');
    let pickerRange = new Litepicker({
        element: dateRangePicker,
        format: 'DD MMMM YYYY',
        singleMode: false,
        lang: "fr-FR"
    });
});





//Librairie importée dans le HTML via une balise <script> qui permet d'afficher un calendrier pour sélectionner des dates 



const prix = document.querySelector('#priceRange');
const paraPrix = document.querySelector(".prix");

prix.addEventListener('change', function(e){
    paraPrix.innerHTML = ": " + e.target.value + "€";
})

const distance = document.querySelector('#distanceRange');
const paraDist = document.querySelector(".distance");

distance.addEventListener('change', function(e){
    paraDist.innerHTML = ": " + e.target.value + " m"
})
