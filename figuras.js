//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return  lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd();

//Código del círculo
console.group("Círculo");

//Diámetro

function diametroCirculo(radio){
    return radio*2;
}

//PI
const PI = Math.PI;
console.log("Pi es: "+PI);


//Circunferencia
function circunferencia(radio){

    return diametroCirculo(radio) *PI;
}

//Área
function areaCinculo(radio){
    return radio *radio* PI;
}

console.groupEnd();