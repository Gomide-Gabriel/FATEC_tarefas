const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get('diPromo');

// o elemento pai
const parentHead = document.getElementById('main');

// elementos que serão filhos do pai
let elements = [
    {newDiv: document.createElement('div')},
    {title: document.createElement('section')},
    {section1: document.createElement('section')},
    {newUi: document.createElement('ul')},
    {section2: document.createElement('section')},
    {newLi: []}
];

// Json
let result = "";

// PARTE DA ANIMACAO
let imgCount = 0;
let imgElementDone = false;

// referencias para o destino e caminho
let width = 0;
let target = 0;

// configura a posição inicial e velocidade
let pos = 200;
let speed = 2;

// tempo
let timer = 2000;

// variaveis que cuidam da animation
let myTimeOut = null;
let myAnim = null;
let loop = -2;
let animated = false;
let finalized = false;
let destinated = false;

// contador de loop
let vez = 0;

// Flag para controlar se a animação está rodando
let isAnimating = false;

window.addEventListener('load', async () => {
    try {
        // Aguarda a criação dos elementos
        await display2();
        
        // Carrega as imagens iniciais
        NewChangeImage(elements[elements.length - 1]);
        
        // Pequeno delay para garantir que tudo está renderizado
        setTimeout(() => {
            menager();
        }, 100);
        
    } catch (error) {
        console.error("Erro ao carregar:", error);
    }
});

async function display2() {
    // <main> 
    parentHead.style = `display: block; justify-content: center; justify-self: center`;

    // <div> filha da main
    elements[0].newDiv.style = `display: flex; flex-flow: column wrap; margin: auto; align-items: center; color: rgb(240, 240, 240);`;

    
    try {
        const response = await fetch('./promocao.json');
         
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        result = await response.json();
       
        // ATRIBUI BACKGROUND IMAGE
        if (result.promocoes[category][0].background != "") {
            //parentHead.style.height = "100vw";
            parentHead.style.width = "100vw";
            parentHead.style.backgroundRepeat = 'no-repeat';
            parentHead.style.backgroundSize = 'cover';
            parentHead.style.backgroundPosition = 'center center';
            parentHead.style.backgroundImage = `url(${result.promocoes[category][0].background})`;
        }

        console.log(result.promocoes[category][0].color);

        // title <section>
        elements[1].title.style = `margin-top: 30px; border-radius: 30px; border: 2px solid ${result.promocoes[category][0].color}; background-color:${result.promocoes[category][0].color}; padding-left: 10px; padding-right: 10px;`;
    
        // section1 <section>
        elements[2].section1.style = `border-radius: 30px; border: 2px solid ${result.promocoes[category][0].color}; background-color:${result.promocoes[category][0].color}; margin-top: 100px; margin-left: 20%; margin-right: 20%; padding-left: 30px; padding-right: 30px;`;

        // lista <ul>
        elements[3].newUi.style = `display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: 1fr; row-gap: 8px; column-gap: 200px; margin: 100px 100px 100px 100px; margin-top: 60px; justify-self: center; justify-content: center;`;

        // <section> ultima filha
        elements[4].section2.style = `border-radius: 30px; border: 2px solid ${result.promocoes[category][0].color}; background-color:${result.promocoes[category][0].color};  margin-left: 20%; margin-right: 20%; padding-left: 30px; padding-right: 30px;`;
        



        elements[1].title.innerHTML = `<h3>${result.promocoes[category][0].title}</h3>`;
        elements[2].section1.innerHTML = `<h4>${result.promocoes[category][0].section1}</h4>`;
        elements[4].section2.innerHTML = `<h3 style="text-align: center;">${result.promocoes[category][0].title}</h3><h4>${result.promocoes[category][0].section2}</h4>`;
        
        // se não houver filhos na main
        if (parentHead.children.length == 0) {
            parentHead.append(elements[0].newDiv);
            parentHead.children[0].append(elements[1].title, elements[2].section1, elements[3].newUi, elements[4].section2);
        }

        // Cria os 2 elementos da lista
        for (let i = 0; i < 2; i++) {
            let liElement = document.createElement('li');
            liElement.style = `margin: auto 50px 150px 50px; padding: 5%; max-width: 380px; height: 300px; text-align: center; border: 1px solid rgb(239, 128, 1); background-color: rgb(180, 96, 0); border-radius: 40px; list-style-type: none`;
            
            let contElement = document.createElement('div');
            contElement.style = `background-color: #efefef; display: flex; width: 100%; height: auto; position: relative; border: 1px solid rgb(239, 128, 1); border-radius: 20px; justify-content: center;  overflow: hidden;`;
            
            let imgElement = document.createElement('img');
            imgElement.style.padding = "10px";
            imgElement.style.width = "190px";
            imgElement.style.height = "280px";
            imgElement.style.position = "relative";
            imgElement.src = "";

            contElement.append(imgElement);
            liElement.append(contElement);
            parentHead.children[0].children[2].append(liElement);

            // Referencias de distância para animação
            width = parseFloat(imgElement.style.getPropertyValue('width'));
            target = width * -1;

            elements[elements.length - 1].newLi.push(liElement);
        }

        imgElementDone = true;
        return true;

    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

// Cuida do gerenciamento das animações
function menager() {
    // Impede múltiplas chamadas simultâneas
    if (isAnimating) {
        console.log("Animação já está rodando, aguardando...");
        return;
    }

    vez++;
    
    // Limpa timers anteriores
    if (myTimeOut) {
        clearTimeout(myTimeOut);
        myTimeOut = null;
    }
    
    if (myAnim) {
        clearInterval(myAnim);
        myAnim = null;
    }

    animated = false;
    loop += 2;
    isAnimating = true;
    
    // Usa setInterval para a animação contínua
    myAnim = setInterval(function() {
        if (animated == false) {
            animate(loop, 1.5, elements[elements.length - 1]);
        } else {
            // Quando a animação termina, para o interval
            clearInterval(myAnim);
            myAnim = null;
            isAnimating = false;
        }
    }, 10);

    // Atualiza os timers para as chamadas 
    if (vez == 2) timer = 1180;
    else timer = 2000;

    // Agenda o próximo ciclo
    myTimeOut = setTimeout(function() {
        if (animated == true) {
            menager();
        }
    }, timer);
}

function animate(destiny, final, imgConteiner) {
    for (let i = 0; i < imgConteiner.newLi.length; i++) {
        
        // se a pos for vazia
        if (pos == null) {
            pos = imgConteiner.newLi[i].children[0].children[0].style.right;
        }

        if (pos < target * destiny && destinated == false) {
            // Primeira localização (meio do elemento)
            console.log("chegou no meio");
            animated = true;
            destinated = true;
            
        } else if (pos < target * final && destinated == true) {
            // Ponto final do destino
            console.log("chegou no final");
            pos = 200;
            loop = -2;
            animated = true;
            destinated = false;
            finalized = true;
            vez = 0;
            
            // Troca as imagens
            NewChangeImage(imgConteiner);
            
        } else {
            // Executa a animação
            pos -= speed;
            imgConteiner.newLi[i].children[0].children[0].style.right = pos + 'px';
        }
    }
}

function NewChangeImage(imgConteiner) {
    // Se o link estiver vazio, carrega a primeira imagem
    if (imgConteiner.newLi[0].children[0].children[0].getAttribute('src') == "" || 
        imgConteiner.newLi[1].children[0].children[0].getAttribute('src') == "") {
        
        console.log("Carregando imagens iniciais");
        imgConteiner.newLi[0].children[0].children[0].src = result.promocoes[category][0].images[0];
        imgConteiner.newLi[1].children[0].children[0].src = result.promocoes[category][0].images2[0];
        
    } else {
        // Loop pelas imagens
        const maxImages = Math.max(
            result.promocoes[category][0].images.length,
            result.promocoes[category][0].images2.length
        );
        
        if (imgCount >= maxImages - 1) {
            imgCount = -1;
        }
        imgCount++;
        
        // Atualiza com as novas imagens
        if (imgCount < result.promocoes[category][0].images.length) {
            imgConteiner.newLi[0].children[0].children[0].src = result.promocoes[category][0].images[imgCount];
        }
        
        if (imgCount < result.promocoes[category][0].images2.length) {
            imgConteiner.newLi[1].children[0].children[0].src = result.promocoes[category][0].images2[imgCount];
        }
    }
}