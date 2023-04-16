// Função para pegar o seletor e dar o play
function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if(elemento && elemento.localName === "audio"){
    elemento.play()
  }
  else{
    console.log("Elemento não encontrado! :/")
  }
}

// Armazenando a lista
const listaDeTeclas = document.querySelectorAll('.tecla');

//Looping que percorre a lista de audio e botões
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
      tocaSom(idAudio);
  }

  tecla.onkeydown = function (event) {
    if (event.code === 'Space' || event.code === 'Enter'){
      tecla.classList.add('ativa')
    }
  }
  tecla.onkeyup = function (event) {
    if (event.code === 'Space' || event.code === 'Enter'){
      tecla.classList.remove('ativa')
    }
  }
}





// // Enquanto
// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#som_${instrumento}`;

//   tecla.onclick = function() {
//     tocaSom(idAudio)
//   }
//   contador++
//}






