const salariosCol = colombia.map(function(elemento){
    return elemento.salary;
});

const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
})

function esPar(numerito){
    if (numerito % 2 == 0){
        return true;
    } else {
        return false;
    }
}

//Mediana General

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        return (personaMitad1 + personaMitad2)/2;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

// Mediana top 10%
const spliceStart = ((salariosColSorted.length * 90)/100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);
const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col, salariosColTop10, salariosColSorted);
