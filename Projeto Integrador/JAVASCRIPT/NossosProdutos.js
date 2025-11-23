
const masculineCostume = [
    {name: 'fm1', image: './img/Costume/male/FM1.png'},
    {name: 'fm2', image: './img/Costume/male/FM2.png'},
    {name: 'fm3', image: './img/Costume/male/FM3.png'},
    {name: 'fm4', image: './img/Costume/male/FM4.png'},
    {name: 'fm5', image: './img/Costume/male/FM5.png'}
];

const feminineCostume = [
    {name: 'ff1', image: './img/Costume/female/FF1.png'},
    {name: 'ff2', image: './img/Costume/female/FF2.png'},
    {name: 'ff3', image: './img/Costume/female/FF3.png'},
    {name: 'ff4', image: './img/Costume/female/FF4.png'},
    {name: 'ff5', image: './img/Costume/female/FF5.png'}
    
];

const infantCostume = [
    {name: 'fi1', image: './img/Costume/infant/FI1.png'},
    {name: 'fi2', image: './img/Costume/infant/FI2.png'},
    {name: 'fi3', image: './img/Costume/infant/FI3.png'},
    {name: 'fi4', image: './img/Costume/infant/FI4.png'},
    {name: 'fi5', image: './img/Costume/infant/FI5.png'}

];

const mascotCostume = [
    {name: 'fmt1', image: './img/Costume/mascot/FMT1.png'},
    {name: 'fmt2', image: './img/Costume/mascot/FMT2.png'},
    {name: 'fmt3', image: './img/Costume/mascot/FMT3.png'},
    {name: 'fmt4', image: './img/Costume/mascot/FMT4.png'},
    {name: 'fmt5', image: './img/Costume/mascot/FMT5.png'}
];

const comemorativeCostume = [
    {name: 'fc2', image: './img/Costume/comemorative/FC2.png'},
    {name: 'fc4', image: './img/Costume/comemorative/FC4.png'},
    {name: 'fc3', image: './img/Costume/comemorative/FC3.png'},
    {name: 'fc1', image: './img/Costume/comemorative/FC1.png'},
];

const acessoryCostume = [
    {name: 'fa1', image: './img/Costume/accessory/FA1.png'},
    {name: 'fa2', image: './img/Costume/accessory/FA2.png'},
    {name: 'fa3', image: './img/Costume/accessory/FA3.png'},
    {name: 'fa4', image: './img/Costume/accessory/FA4.png'},
    {name: 'fa5', image: './img/Costume/accessory/FA5.png'}
];

// Objeto de animação

const animateImage = [
    {transform: 'translate(300px)'}
]


// todas as listas de produto
const myProducts = [masculineCostume, feminineCostume, infantCostume, mascotCostume, comemorativeCostume, acessoryCostume];


// atribui o elemento com ID carroussel
const carrossel = document.getElementById('carrossel');

// <ul>
const ulCarrossel = carrossel.children;
// <li> 
let liElement = [];


// Contador para troca de imagem
let imgCount;
// indica se acabou a atribuição do elemento img
let imgElementDone; 

// PARTE DA ANIMAÇÃO //

// referencias para o destino e caminho
let width = 0;
let target = 0;


// configura a posição inicial e velocidade
let pos = 200;
let speed = 2;

// tempo
let timer = 2000;

// variaveis que cuidam da animation
let myTimeOut;
let myAnim;
let loop = -2;
let animated = false;
let finalized = false;

let destinated = false;

 // contador de loop
let vez = 0;

// Carrega o Script quando a tela carrega

window.addEventListener('load', () => {   
    imgCount = 0;
    loadImagesFunc();
    
    if (imgElementDone){ 
        console.log("chamou");
        menager();
        //ChangeImage(liChild);
        NewChangeImage(liElement, myProducts);

    }

    
})


function loadImagesFunc(){
    
    // atribuindo os <li>
    liElement = ulCarrossel[0].children;
    console.log(liElement.length);


    for (let i = 0; i < liElement.length; i++) {

        //liChild[i].style = `background-color: white`;

        // Conteiner da imag
        let = contElement = document.createElement('div');
        contElement.style = `background-color: #efefef; width: 100%; height: auto; position: relative;`;


        // CRIANDO O ELEMENTO <img>
        let imgElement = document.createElement('img');
        let liPara = liElement[i].children;

        //console.log(liPara);
        imgElement.textContent = "Nova imagem"; 
        imgElement.style.width = "150px";
        imgElement.style.height = "250px";
        imgElement.style.position = "relative";
        //imgElement.style = `background-color: white`;
        imgElement.src = "";

        // Referencias de distância para animação
        width = parseFloat(imgElement.style.getPropertyValue('width'));
        target = width*-1;

        
        if (liElement[i]) {
            
            // atribui o elemento <img> antes do <p>
            //liElement[i].insertBefore(liElement[i].appendChild(imgElement), liPara[0]);
            contElement.appendChild(imgElement);
            liElement[i].insertBefore(liElement[i].appendChild(contElement), liPara[0]);
        

        }
        else console.error("Não foi achado");
    }

    //ChangeImage(liChild[0].children[0]);
    //console.log(liChild[0].children[0]);
    imgElementDone = true;

}


function menager(){
    vez++;

    if (myTimeOut && myAnim) {
        //console.log("Timeout cleared!");
        clearTimeout(myTimeOut);
        myTimeOut = null;
        clearInterval(myAnim);
        myAnim = null;
        
    }      

    animated = false;
    loop+=2;
    
    myAnim = setInterval(function()  {
        if (animated == false) animate(loop, 1.5, liElement);
    },
    10);   

    if (vez == 2) timer = 1180;
    else timer = 2000;

    myTimeOut = setTimeout(function() {
            //console.log("timeout: " +  timer);
            if (animated == true) menager();
    }, timer);
    
}

function animate(destiny, final, imgElement){            
    //console.log("fora");
    for (let i = 0; i < imgElement.length; i++){

        if (pos == null) {
            pos = imgElement[i].children[0].children[0].style.right;
            //console.log("nulo");
        }

        if (pos < target*destiny && destinated == false){
            //console.log("chegou");
            //console.log("Pos: " + pos + " destiny; " + target*destiny);
            animated = true;
            destinated= true;
            clearInterval(myAnim);

        } else if (pos < target*final && destinated == true){
            //console.log("Pos: " + pos + " target; " + target*final);
            pos = 200;
            loop = -2;
            animated = true;
            destinated = false;
            finalized = true;
            vez = 0;
            //console.log("final e finalized " + finalized );
            
            //ChangeImage(imgElement);
            NewChangeImage(imgElement);
            clearInterval(myAnim);
        }
        else {
            //console.log("animando");
            pos-= speed;
            imgElement[i].children[0].children[0].style.right = pos + 'px';
        }
    }
}


function NewChangeImage(imgConteiner){
    
    // pega todos os elementos <li>
    for (let i = 0; i < imgConteiner.length; i++){
        // Se o link estiver vazio, ele é preenchido
        if (imgConteiner[i].children[0].children[0].getAttribute('src') == ""){
            imgConteiner[i].children[0].children[0].src = myProducts[i].at(0).image;
        }
        else{ // quando preenchido ele vem pra cá, loopando entre as imagens
            if (imgCount >= myProducts[i].length-1) imgCount = -1; // passou do limite ele volta pra inicio
            imgCount++;
            imgConteiner[i].children[0].children[0].src  = myProducts[i].at(imgCount).image;
        }
    }

}



function Animating(imgObj){
    // mexendo com propriedades
    //imgObj.style.right = pos + 'px';
    console.log("o");

    if (pos < 0){
        console.log("a");
        pos-=1;
        imgObj.style.right = pos + 'px';
    }
    else if (pos >= 0 || pos <= 150){
        pos-=1;
        imgObj.style.right = pos + 'px';
        
    }
}


function CreateImage(imgId){
    // Cria a tag de elemento  
    const imgElement = document.createElement('img');

    switch (imgId){

        case 0:
            // Seta o Path da imagem
            imgElement.src = './img/';

            // alt para o usuario ver 
            imgElement.alt = ''
            break;
        case 1:
            // Seta o Path da imagem
            imgElement.src = './img/';

            // alt para o usuario ver 
            imgElement.alt = ''
            break;
        case 2:
            // Seta o Path da imagem
            imgElement.src = './img/';

            // alt para o usuario ver 
            imgElement.alt = ''
            break;
        case 3:
            // Seta o Path da imagem
            imgElement.src = './img/';

            // alt para o usuario ver 
            imgElement.alt = ''
            break;
        case 4:
            // Seta o Path da imagem
            imgElement.src = './img/';

            // alt para o usuario ver 
            imgElement.alt = ''
            break;
        case 5:
            // Seta o Path da imagem
            imgElement.src = './img/';

            // alt para o usuario ver 
            imgElement.alt = ''
            break;
        case 6:
            // Seta o Path da imagem
            imgElement.src = './img/';

            // alt para o usuario ver 
            imgElement.alt = ''
            break;
    
    }   

    return imgElement;
}