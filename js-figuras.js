console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado*4;
} 

function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();

//Calculo del triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){
    return base+lado1+lado2
}

function areaTriangulo(altura, base){
    return (base*altura)/2;
}
console.groupEnd();

//Calculo del Circulo
console.group("Circulo");
const Pi = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*Pi;
}

function areaCirculo(radio){
    return Pi*(radio*radio);
}
console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTrianguloBase");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3); 
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const value1 = inputBase.value;
    const value2 = inputAltura.value;

    const area = areaTriangulo(value2, value1); 
    alert(area)
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);
    alert(area);
}

//Funcion para calcular altura de un triangulo isoseles

function alturaTrianguloIsosceles(lado1, lado2, base){
    if(lado1 == lado2 && lado1 != base){
        console.log("Es un triangulo Isosceles");
        let step1 = (lado1*lado2) - ((base*base)/4)
        let altura = Math.sqrt(step1); 
        console.log("la altura es: " + altura);
    } else {
        console.log("No es un triangulo isosceles");
    }
}

