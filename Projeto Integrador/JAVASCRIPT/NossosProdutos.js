
const masculineCostume = [
    {name: 'fm1', Image: '../img/FM!.png'},
    {name: 'fm2', Image: '../img/FM2.png'},
    {name: 'fm3', Image: '../img/FM3.png'},
    {name: 'fm4', Image: '../img/FM4.png'},
    {name: 'fm5', Image: '../img/FM5.png'}
    ];

const feminineCostume = [
    {name: 'ff1', Image: '../img/FM!.png'},
    {name: 'ff2', Image: '../img/FM2.png'},
    {name: 'ff3', Image: '../img/FM3.png'},
    {name: 'ff4', Image: '../img/FM4.png'},
    {name: 'ff5', Image: '../img/FM5.png'}
];

const infantCostume = [
    {name: 'fi1', Image: '../img/FM!.png'},
    {name: 'fi2', Image: '../img/FM2.png'},
    {name: 'fi3', Image: '../img/FM3.png'},
    {name: 'fi4', Image: '../img/FM4.png'},
    {name: 'fi5', Image: '../img/FM5.png'}
];

const mascotCostume = [
    {name: 'fmt1', Image: '../img/FM!.png'},
    {name: 'fmt2', Image: '../img/FM2.png'},
    {name: 'fmt3', Image: '../img/FM3.png'},
    {name: 'fmt4', Image: '../img/FM4.png'},
    {name: 'fmt5', Image: '../img/FM5.png'}
];

const comemorativeCostume = [
    {name: 'fc1', Image: '../img/FM!.png'},
    {name: 'fc2', Image: '../img/FM2.png'},
    {name: 'fc3', Image: '../img/FM3.png'},
    {name: 'fc4', Image: '../img/FM4.png'},
    {name: 'fc5', Image: '../img/FM5.png'}
];

const acessoryCostume = [
    {name: 'fa1', Image: '../img/FM!.png'},
    {name: 'fa2', Image: '../img/FM2.png'},
    {name: 'fa3', Image: '../img/FM3.png'},
    {name: 'fa4', Image: '../img/FM4.png'},
    {name: 'fa5', Image: '../img/FM5.png'}
];

// todas as listas de produto
const myProducts = [masculineCostume, feminineCostume, infantCostume, comemorativeCostume, acessoryCostume];


const carrossel = document.getElementById('carrossel');
/* <ul> */
const listCarrossel = carrossel.children;
/* <li> */
const listChild = [];


function loadImagesFunc(){
    // atribuindo os <li>
    for (let i = 0; i < listCarrossel.length; i++){
        listChild = listCarrossel[i];
    }

    // atribuindo as lista nas imagens? 
    for (let i = 0; i < listChild.length; i++){
        listChild[i].Image = myProducts[i];
    }
}

