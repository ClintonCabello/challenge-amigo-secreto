// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validaciones
    if (nombre === '') {
        alert('Por favor, escribe un nombre válido.');
        return;
    }

    // Solo permite nombres que empiezan con letras (mayúsculas o minúsculas)
    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ]/.test(nombre)) {
        alert('El nombre debe comenzar con una letra. No se permiten números ni símbolos al inicio.');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = '';
    inputAmigo.focus();
}


// Mostrar la lista de nombres en la interfaz
function actualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega al menos un nombre.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
