//Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:"+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("EL perímetro del cuadrado es: " + perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("EL área del cuadrado es: " + areaCuadrado+"cm^2");

console.groupEnd();

//Código del triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    +ladoTriangulo1+"cm, "
    +ladoTriangulo2+"cm, "
    +baseTriangulo+"cm"
);

const alturaTriangulo = 5.5
console.log("La altura del triángulo es: " + alturaTriangulo+"cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo+"cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("EL área del triángulo es: " + areaTriangulo+"cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo +"cm");


//Diámetro
const diametroCirculo = radioCirculo*2;
console.log("El diámetro del circulo es: " + diametroCirculo +"cm");

//PI
const PI = Math.PI;
console.log("Pi es: "+PI);

//Circunferencia
const perímetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del círculo es: " + perímetroCirculo +"cm");


//Área
const areaCinculo = (radioCirculo*radioCirculo) * PI;
console.log("El área del circulo es: " + areaCinculo+"cm");

console.groupEnd();