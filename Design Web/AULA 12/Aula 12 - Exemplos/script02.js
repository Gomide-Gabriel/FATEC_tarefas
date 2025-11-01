const listaPendencias = document.getElementById("listaPendencias")
const inputTarefa = document.getElementById("inputTarefa");
let contador = 0;

function adicionarTarefa() {
  const novoElementoTarefa = document.createElement('div');
  //contador = contador + 1;
  contador += 1;
  novoElementoTarefa.innerHTML = `<span id="span_${contador}">${inputTarefa.value}</span>
                                  <button onclick = "removerTarefa('span_${contador}')">
                                    OK
                                  </button>`;
  listaPendencias.appendChild(novoElementoTarefa);
}

function removerTarefa(elemento){
  document.getElementById(elemento).style.textDecoration = 'line-through';
}
