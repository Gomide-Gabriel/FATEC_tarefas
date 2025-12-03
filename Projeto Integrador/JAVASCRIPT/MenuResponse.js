
//let myMedia = window.matchMedia("(min-width: 768px)")

const bodyElement = document.getElementsByTagName('body');
let menuElement = document.getElementById('menu');
const hamElement = document.getElementById('ham');
const navElement = document.getElementById('navBar');

const screen = {
    small: 0,
    medium: 400,
    large: 800
};

let size = null;
let createdDiv = false;
let div = null;

// APENAS ESSE FUNCIONA
hamElement.addEventListener('click', function(){
   
    navElement.style.display = navElement.checkVisibility()?'none':'block';
});



window.addEventListener('resize', function (){
    resizeHandler();
    //teste();
    if (size != 'large'){
        console.log("ASVNIF");
        //menuElement.style.display = 'none';
    }
    //createHamburguer();
});


window.addEventListener('load', function(){
    //createHamburguer();
});



function teste(){
    console.log("teste " + resizeHandler());
}







resizeHandler();
function resizeHandler(){
    const iw = window.innerWidth;

    size = null;
    for (let s in screen){
        if (iw >= screen[s]) size = s;
    }
    //console.log(size + " e " + iw);
    return size;

}

//console.log(menuElement[0].parentNode);

function createHamburguer(){
    console.log("chamou");
    if(createdDiv == false){
        console.log("criou");
        div = document.createElement('div');
        div.className = 'ham-menu';
        div.style = `  height: 50px; width: 50px; display: block; justify-content: center;  margin-right: auto;  position: relative;`;
        let spams = [];

        let top = 25;

        for (let i = 0; i < 3; i++){
            const newSpan = document.createElement('span');

            if (i != 2 ) top *= 1.50;
            else top *= 1.35;
            console.log(top);

            newSpan.style = `height: 5px; width: 100%; background-color: white; position: absolute; top: ${top}%; left: 20%; margin: 5%;`;

            
            div.append(newSpan);
            spams.push(newSpan);
        }
        console.log(div);
        menuElement.after(div);
        //bodyElement[0].insertBefore(div, bodyElement[0].children[bodyElement[0].children.length-1]);

        createdDiv = true;
    }

    if (size != 'large'){
        //div.style = `display: block;`;
    }
    //else div.style = `display: none;`;

    
}