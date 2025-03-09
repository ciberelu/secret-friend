// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigoIngresado = document.getElementById('amigo')
const listaAmigosHTML = document.getElementById('listaAmigos')
const mostrarGanador = document.getElementById('resultado')
let amigos = []

amigoIngresado.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        agregarAmigo()
    }
})


function agregarAmigo() {
    if (amigoIngresado.value.trim().length == 0){
        alert("por favor, inserte un nombre")
        return
    }

    amigos.push(amigoIngresado.value.trim())
    amigoIngresado.value = ""
    amigoIngresado.autofocus = "true"
    listarAmigos()

 }

 function listarAmigos(){
    listaAmigosHTML.innerHTML = ""
    amigos.forEach(amigo => {
        listaAmigosHTML.innerHTML += `<li>${amigo}</li>`

    })
 }

 function sortearAmigo (){
    //si no hay al menos 2 amigos no realiza el sorteo
    if (amigos.length == 0 || amigos.length == 1){
        alert("No hay amigos para sortear")
        return
    }
    //se obtiene el numero aleatorio, se suma 1 para coincida a como lo el usuario cuenta el listado a partir de 1
    let numeroSecreto = Math.floor(Math.random() * amigos.length + 1) 
    mostrarGanador.innerHTML = amigos[numeroSecreto - 1 ] //restamos uno para que coincida con el indice del array
 }