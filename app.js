let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero es screto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(params) {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si el numero generado esta en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
   } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
   }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    // Ver si ya se sorteo todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
        //Indicar mensaje de intervalo de números
        asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
        //Generar el número aleatorio
        numeroSecreto = generarNumeroSecreto();
        //Inicializar el número intentos
        intentos = 1;
        console.log(numeroSecreto);
    }
    
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
     
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


