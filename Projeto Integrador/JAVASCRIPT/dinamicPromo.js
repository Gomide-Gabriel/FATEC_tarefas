const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get('diPromo');

const parentHead = document.getElementById('head');


window.addEventListener('load', () => {
    
    //console.log(parentHead);
    display();
    
})



async function display(){
    console.log("AA");
                    
    let newDiv = document.createElement('div');
    let newUl = document.createElement('ul');
    let newLi = new Array(6);

    newUl.style = ` display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 20px;
        column-gap: 20px;
        margin: 100px 100px 100px 250px ;
        
        justify-content: center;`;

    
    parentHead.append(newDiv);
    parentHead.children[0].append(newUl);

 
    const myJson = new Request("./promocao.json");

    try{
        const response = await fetch (myJson);

        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.promocoes[category]);
        
        for(let i=0; i<result.promocoes[category].length; i++){
            let promocao = result.promocoes[category];

            //console.log(promocao[i]);
            let imgElement = document.createElement('img');

            imgElement.style.width = "190px";
            imgElement.style.height = "300px";
            imgElement.style.position = "relative";
            imgElement.src = promocao[i].image;

            newLi[i] = document.createElement('li');
            newLi[i].style = ` margin: auto 50px 150px 50px;
                        padding: auto 10% auto 10%;

                        max-width: 380px;
                        height: 380px;

                        text-align: center;

                        border: 1px solid rgb(239, 128, 1);
                        background-color: rgb(180, 96, 0);
                        border-radius: 40px;
                        list-style-type: none`;

            
            newLi[i].innerHTML = `<p> ${promocao[i].nome} <p>`;
            newLi[i].append(imgElement);

            parentHead.children[0].children[0].append(newLi[i]);
                
            //parentHead.children[0].children[0].children[i] = 
        }

        for (let promocao of result.promocao[category]){
            
        }
        

    }catch(error) {
        console.error(error.message);
    }
    
    //  Lógica para abrir a página


}


/* await fetch(myJson)
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
         return response.json();
    })
    .then((data) => {

        console.log(data.halloween);

        for (const promocao of data.promocao.halloween){
            //let newElement
        }
    })
    .catch(console.erro); */