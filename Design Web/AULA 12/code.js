const input = document.getElementById('txttarefa');
const list = document.getElementById('list')
let count = 0;


function adicionar(){
    console.log(input.value);
    count+=1;
    const element = document.createElement('div');
    element.innerHTML = `<span id="${count}"> ${input.value} ${count}</span>
                        <button id="${count}" onclick="ler(${element})">
                        feito
                        </button>`; 

                        
    console.log( element);
    list.append(element);
    
}

function ler(element){
    console.log(element);
}

function remover(element){
    const target = event.target;
    target.style.display = 'none';
    target.previousElementSibling.style.display = 'none';



    const main = document.getElementById('inicio');
    const doneList = document.createElement('div')
    doneList.innerHTML = `<h3>Lista feita</h3> ${element}`;
    
    main.append(doneList);
}