$(function(){
    let dateRangePicker = document.getElementById('dateSejour');
    let pickerRange = new Litepicker({
        element: dateRangePicker,
        format: 'DD/MM/YYYY',
        singleMode: false,
        lang: "fr-FR"
    });
});
