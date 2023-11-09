$(function(){
    let dateRangePicker = document.getElementById('dateEntree');
    let pickerRange = new Litepicker({
        element: dateRangePicker,
        format: 'DD MMMM YYYY',
        singleMode: false,
        lang: "fr-FR"
    });
});


//Librairie importée dans le HTML via une balise <script> qui permet d'afficher un calendrier pour sélectionner des dates 