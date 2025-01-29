// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []; 

function agregarAmigo() {
    let input = document.getElementById("amigo"); 
    let lista = document.getElementById("listaAmigos"); 
    //agregamos y eliminamos espacios
    let agregar = input.value.trim();  

    if (agregar) {
        if (!amigos.includes(agregar)) { 
            // Agrega el nombre al array
            amigos.push(agregar); 

            let li = document.createElement("li");
            li.textContent = agregar; 
            lista.appendChild(li); 

            // limpiamos el campo
            input.value = ""; 
            input.focus(); 
        } else {
            alert("Este nombre ya fue agregado."); 
        }
    } else {
        alert("Por favor, ingrese un nombre válido."); 
    }
}


function sortearAmigo(){
    let resultado = document.getElementById("resultado");

    //sorteamos ela migo
    let sorteo = Math.floor(Math.random() * amigos.length);

    //Obetenemos el amigosorteado
    let amigoSorteado = amigos[sorteo];

    resultado.innerHTML = `🎉 El amigo sorteado es: ${amigoSorteado}`;

}

