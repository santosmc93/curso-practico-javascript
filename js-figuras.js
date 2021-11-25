console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
} 
perimetroCuadrado()

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Calculo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm de base");

console.log("la altura del triangulo es:" + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es:" + perimetroTriangulo + "cm");
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("el area del triangulo es:" + areaTriangulo + "cm^2");
console.groupEnd();

//Calculo del Circulo
console.group("Circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const Pi = Math.PI;

const perimetroCirculo = diametroCirculo*Pi;
const areaCirculo = (radioCirculo*radioCirculo)*Pi;

console.log("El radio del circulo es: " + radioCirculo)
console.log("El diametro del circulo es: " + diametroCirculo);
console.log("El perimetro del circulo es: " + perimetroCirculo);
console.log("El area del circulo es: " + areaCirculo);
console.groupEnd();