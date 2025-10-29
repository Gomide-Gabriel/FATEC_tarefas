const imgUrls = [
    {nome: 'sym1', img: './img/Symbol/sym1' },
    {nome: 'sym2', img: './img/Symbol/sym2' },
    {nome: 'sym3', img: './img/Symbol/sym3' },
    {nome: 'sym4', img: './img/Symbol/sym4' },
    {nome: 'sym5', img: './img/Symbol/sym5' },
    {nome: 'sym6', img: './img/Symbol/sym6' },
    {nome: 'sym7', img: './img/Symbol/sym7' }
];


const container = document.getElementsByClassName('instantiate');


window.addEventListener(`load`, () => {

})


function createElement(max, min, imgNum){

    for (let i = 0; i < imgNum; i++) {

        let randSize = Math.floor(Math.random() * (max-min)) + min;
        let randPos = Math.floor(Math.random() * ((max*15) -min)) + min;

        const imgElement = document.createElement(`img`);
        imgElement.src = "";
        imgElement.style.height = randSize; 
        imgElement.style.width = randSize;
        imgElement.style.top = randPos;
        imgElement.style.bottom = randPos;
    }

}