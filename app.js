//Declaración del array para el Challenge Amigo Secreto
let amigos = [];

//Ingresar los amigos al listado a partir de la tecla Enter 
document.getElementById('amigo').addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    agregarAmigo();
  }
});

//Función para ingresar amigos al listado
function agregarAmigo() {
    //Capturar valor de campo de entrada
    let nombreAmigo = document.getElementById('amigo');
    let amigo = nombreAmigo.value;
    console.log(amigo);

    //Validar entrada de texto
    if (amigo === "") {
        return alert('Por favor, ingrese al menos un nombre.');
    } 
    //Actualizar lista de amigos
        else {
            amigos.push(amigo);
            console.log(amigos);
            limpiarCaja();
            mostrarLista();
    }
}

//Función específica para limpiar el campo de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Mostrar la lista de amigos
function mostrarLista() {
    //Obtener elemento de la lista
    let lista = document.getElementById('listaAmigos');
    //Limpiar la lista existente
    lista.innerHTML = "";
    //Iteración sobre el array y agregado de elemetos a la lista
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

//Sorteo aleatorio del amigo secreto
function sortearAmigo() {
    //Validación de amigos disponibles
    if (amigos.length === 0) {
        return alert('No hay ningún nombre disponible para sortear.');
    } 
    //Generar un índice aleatorio en el array
        else {
            let numAleatorio = Math.floor(Math.random()*amigos.length);
            //Obtener el nombre sorteado
            let amigoSorteado = amigos[numAleatorio];
            //Mostrar el resultado obtenido
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<li> Tu amigo secreto es: ${amigoSorteado}!! 🤫</li>`;
    }
}