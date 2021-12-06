var imgs = [
        "images/asian.PNG",
        "images/beit_kandinof.PNG",
        "images/wine.PNG",
        "images/food.PNG",
        "images/gaia_garden.png"
];
var i = 0;

function Motion(){
    setTimeout(function(){
        document.getElementById("images").src = imgs[i];
        i++;
        if(i<imgs.length){
            Motion();
        }
        else {
            i = 0;
        }
    }, 2000);
}