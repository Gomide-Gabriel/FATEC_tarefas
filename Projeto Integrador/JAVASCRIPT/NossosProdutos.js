
const masculineCostume = [
    {name: 'fm1', Image: './img/FM!.png'},
    {name: 'fm2', Image: './img/FM2.png'},
    {name: 'fm3', Image: './img/FM3.png'},
    {name: 'fm4', Image: './img/FM4.png'},
    {name: 'fm5', Image: './img/FM5.png'}
    ];

const feminineCostume = [
    {name: 'ff1', Image: './img/FM!.png'},
    {name: 'ff2', Image: './img/FM2.png'},
    {name: 'ff3', Image: './img/FM3.png'},
    {name: 'ff4', Image: './img/FM4.png'},
    {name: 'ff5', Image: './img/FM5.png'}
];

const infantCostume = [
    {name: 'fi1', Image: './img/FM!.png'},
    {name: 'fi2', Image: './img/FM2.png'},
    {name: 'fi3', Image: './img/FM3.png'},
    {name: 'fi4', Image: './img/FM4.png'},
    {name: 'fi5', Image: './img/FM5.png'}

];

const mascotCostume = [
    {name: 'fmt1', Image: './img/FM!.png'},
    {name: 'fmt2', Image: './img/FM2.png'},
    {name: 'fmt3', Image: './img/FM3.png'},
    {name: 'fmt4', Image: './img/FM4.png'},
    {name: 'fmt5', Image: './img/FM5.png'}
];

const comemorativeCostume = [
    {name: 'fc1', Image: './img/FM!.png'},
    {name: 'fc2', Image: './img/FM2.png'},
    {name: 'fc3', Image: './img/FM3.png'},
    {name: 'fc4', Image: './img/FM4.png'},
    {name: 'fc5', Image: './img/FM5.png'}
];

const acessoryCostume = [
    {name: 'fa1', Image: './img/FM!.png'},
    {name: 'fa2', Image: './img/FM2.png'},
    {name: 'fa3', Image: './img/FM3.png'},
    {name: 'fa4', Image: './img/FM4.png'},
    {name: 'fa5', Image: './img/FM5.png'}
];

// Objeto de animação

const animateImage = [
    {transform: 'translate(300px)'}
]


// todas as listas de produto
const myProducts = [masculineCostume, feminineCostume, infantCostume, comemorativeCostume, acessoryCostume];

const carrossel = document.getElementById('carrossel');

// <ul>
console.log(carrossel.children);
const ulCarrossel = carrossel.children;
// <li> 
let liChild = [];

window.addEventListener('load', () => {
    //console.log('onload')
    loadImagesFunc();
})


function loadImagesFunc(){
    
    // atribuindo os <li>
    liChild = ulCarrossel[0].children;
    console.log(liChild[0].children);


    for (let i = 0; i < liChild.length; i++) {

        let imgElement = document.createElement('img');
        let liPara = liChild[i].children;

        //console.log(liPara);
        imgElement.textContent = "Nova imagem";
        imgElement.width= 150;
        imgElement.height= 250;

        imgElement.src = myProducts[0].at(i).Image;


        if (liChild[i]) {
            
            // atribui o elemento <img> antes do <p>
            liChild[i].insertBefore(liChild[i].appendChild(imgElement), liPara[0]);

        }
        else console.error("Não foi achaddo");
    }
    
}

function ChangeImage(){
    
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