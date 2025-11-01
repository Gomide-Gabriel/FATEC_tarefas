const listaPendencias = document.getElementById("listaPendencias")
const inputTarefa = document.getElementById("inputTarefa");

function adicionarTarefa() {
  const novoElementoTarefa = document.createElement('div');
  novoElementoTarefa.innerHTML = `<span>${inputTarefa.value}</span>
                                  <button onclick = "removerTarefa()">
                                    OK
                                  </button>`;

  listaPendencias.appendChild(novoElementoTarefa);
}

function removerTarefa(){
  const tarefaConcluida = event.target.previousElementSibling;
  tarefaConcluida.style.textDecoration = 'line-through';
}
