
const masculineCostume = [
    {name: 'fm1', image: './img/Costume/FM1.png'},
    {name: 'fm2', image: './img/Costume/FM2.png'},
    {name: 'fm3', image: './img/Costume/FM3.png'},
    {name: 'fm4', image: './img/Costume/FM4.png'},
    {name: 'fm5', image: './img/Costume/FM5.png'}
];

const feminineCostume = [
    {name: 'ff1', image: './img/FM!.png'},
    {name: 'ff2', image: './img/FM2.png'},
    {name: 'ff3', image: './img/FM3.png'},
    {name: 'ff4', image: './img/FM4.png'},
    {name: 'ff5', image: './img/FM5.png'}
    
];

const infantCostume = [
    {name: 'fi1', image: './img/FM!.png'},
    {name: 'fi2', image: './img/FM2.png'},
    {name: 'fi3', image: './img/FM3.png'},
    {name: 'fi4', image: './img/FM4.png'},
    {name: 'fi5', image: './img/FM5.png'}

];

const mascotCostume = [
    {name: 'fmt1', image: './img/FM!.png'},
    {name: 'fmt2', image: './img/FM2.png'},
    {name: 'fmt3', image: './img/FM3.png'},
    {name: 'fmt4', image: './img/FM4.png'},
    {name: 'fmt5', image: './img/FM5.png'}
];

const comemorativeCostume = [
    {name: 'fc1', image: './img/FM!.png'},
    {name: 'fc2', image: './img/FM2.png'},
    {name: 'fc3', image: './img/FM3.png'},
    {name: 'fc4', image: './img/FM4.png'},
    {name: 'fc5', image: './img/FM5.png'}
];

const acessoryCostume = [
    {name: 'fa1', image: './img/FM!.png'},
    {name: 'fa2', image: './img/FM2.png'},
    {name: 'fa3', image: './img/FM3.png'},
    {name: 'fa4', image: './img/FM4.png'},
    {name: 'fa5', image: './img/FM5.png'}
];

// Objeto de animação

const animateImage = [
    {transform: 'translate(300px)'}
]


// todas as listas de produto
const myProducts = [masculineCostume, feminineCostume, infantCostume, comemorativeCostume, acessoryCostume];


// atribui o elemento com ID carroussel
const carrossel = document.getElementById('carrossel');

// <ul>
console.log(carrossel.children);
const ulCarrossel = carrossel.children;
// <li> 
let liChild = [];


// Contador para troca de imagem
let imgCount;
// indica se acabou a atribuição do elemento img
let imgElementDone; 

// Carrega o Script quando a tela carrega

window.addEventListener('load', () => {
    imgCount = 0;
    loadImagesFunc();
    
    if (imgElementDone){ 
        
        setInterval(function() {
            ChangeImage(liChild[0].children[0])
            }, 2000);
    }
})


function loadImagesFunc(){
    
    // atribuindo os <li>
    liChild = ulCarrossel[0].children;
    console.log(liChild.length);


    for (let i = 0; i < liChild.length; i++) {

        // CRIANDO O ELEMENTO <img>

        let imgElement = document.createElement('img');
        let liPara = liChild[i].children;

        console.log(liPara);
        imgElement.textContent = "Nova imagem";
        imgElement.style.width = "150px";
        imgElement.style.height = "250px";
        imgElement.src = "";

        
        if (liChild[i]) {
            
            // atribui o elemento <img> antes do <p>
            liChild[i].insertBefore(liChild[i].appendChild(imgElement), liPara[0]);

        }
        else console.error("Não foi achado");
    }

    imgElementDone = true;



}

function ChangeImage(imgConteiner){
    console.log("chamou");
   
    if (imgConteiner.getAttribute('src') == ""){
        //console.log("entrou");
        imgConteiner.src = myProducts[0].at(0).image;
    }
    else{
        //console.log("segunda parte");
        if (imgCount >= 4) imgCount = 0;
        imgCount++;
        imgConteiner.src  = myProducts[0].at(imgCount).image;
        
    }

    
}

function Animation(imgObj){

    imgObj.animate(animateImage);
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