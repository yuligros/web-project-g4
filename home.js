let imgs = [
    "images/asian.PNG",
    "images/beit_kandinof.PNG",
    "images/wine.PNG",
    "images/food.PNG",
    "images/gaia_garden.png"
];
let i = 0;

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


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}