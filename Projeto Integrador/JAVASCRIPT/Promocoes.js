const specialDate = [
    {categoria: "natal", fday: "25", lday: "25" , month: "12"},
    {categoria: "pascoa", fday: "20", lday: "20" , month: "4"},
    {categoria: "junina", fday: "13", lday: "29" , month: "5"},
    {categoria: "carnaval", fday: "14", lday: "17" , month: "2"},
    {categoria: "halloween", fday: "31", lday: "31" , month: "10"},
    {categoria: "corporativos", fday: "0", lday: "0" , month: "0"},
]

const image = [
    {nome: "close" , url: "./img/Symbol/sym7.png"},
    {nome: "open" , url: "./img/Symbol/sym6.png"},
]


// página dinamica
const newPage = 'dinamicPromo.html'

const myJson =  new Request("promocao.json");

//lista dos cards <li>
const cardPromo = document.getElementsByClassName('container-promocao-item');
//const category = cardPromo.document.ques;

const parentHead = document.getElementsByTagName('head');


//let currentMonth = new Date(); -- programação dinamica ao todo
let currentMonth = new Date("2025-10-31"); // <- emulando a data do halloween
let currentDay = new Date();

window.addEventListener("load", () => {
    //teste();
    //console.log(cardPromo[0]);
    //currentMonth.getMonth();
    //console.log(currentMonth.getMonth() +1);
    //for (let i=0;i<cardPromo.length;i++) cardPromo[i].children[0].src = '';

    checkDate();
})



function checkDate(){
    
    console.log(currentMonth.getDate()+1);
    console.log(currentMonth.getMonth()+1);

    for (let i=0; i < specialDate.length; i++){
        
        

        // checa se a data atual é a mesma que consta no specialdate        
        if ((currentMonth.getMonth()+1) == specialDate[i].month && (currentMonth.getDate()+1) == specialDate[i].fday) {
            

            // se for verdade checa pra ver qual dos cards tem a categoria da data
            if (specialDate[i].categoria == cardPromo[i].getAttribute('data-my-variable')){

                // se sim o card de promoção é aberto
                if (cardPromo[i].children[0].getAttribute('src') != image[0].url) cardPromo[i].children[0].children[0].src = image[1].url;

            }

        }
        else { // se estiver fora da data fecha a promoção
            
            cardPromo[i].children[0].children[0].src = image[0].url;
            cardPromo[i].children[0].href = "";
        }
        
    }
}

