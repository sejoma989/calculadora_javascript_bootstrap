console.log('Aplicacion calculadora');

const forma = document.getElementById('forma');
let operandoA = forma['operandoA'];
let operandoB = forma['operandoB'];


function sumar(){
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = 'Por favor ingrese numeros'
    }
    document.getElementById('resul').innerHTML = `Resultado de la suma: ${resultado}`;
    console.log(`Resultado de la suma: ${resultado}`);
}

function restar(){
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = 'Por favor ingrese numeros'
    }
    document.getElementById('resul').innerHTML = `Resultado de la resta: ${resultado}`;
    console.log(`Resultado de la resta: ${resultado}`);

}

function multiplicar(){
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = 'Por favor ingrese numeros'
    }
    document.getElementById('resul').innerHTML = `Resultado de la multiplicacion: ${resultado}`;
    console.log(`Resultado de la multiplicacion: ${resultado}`);

}

function dividir(){
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = 'Por favor ingrese numeros'
    }
    document.getElementById('resul').innerHTML = `Resultado de la division: ${resultado}`;
    console.log(`Resultado de la division: ${resultado}`);

}