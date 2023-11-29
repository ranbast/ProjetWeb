
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

const longitudeInput = document.querySelector("#longitude"); 
const latitudeInput = document.querySelector("#latitude");
const prix = document.querySelector("#prix");

const map = L.map('map').setView([longitudeInput.value, latitudeInput.value],13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([longitudeInput.value, latitudeInput.value], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


var popup = L.popup()
    .setLatLng([longitudeInput.value, latitudeInput.value])
    .setContent(prix.value + " €")
    .openOn(map);

    var popup = L.popup();

