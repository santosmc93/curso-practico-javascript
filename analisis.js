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

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)){

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
