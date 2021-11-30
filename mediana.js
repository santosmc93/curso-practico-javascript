const lista1 = [100, 200, 300, 500, 700, 250];
const lista2 = [500, 100, 250, 350, 400, 700];

function esPar(lista){
    if(lista.length % 2 == 0){
        return true;
    }
    else {
        return false
    }
}

function resultadoMediana(lista){
    lista.sort();
    if (esPar(lista)){
        let posicion1 = (lista.length/2)-1;
        let posicion2 = lista.length/2;
        return (lista[posicion1] + lista[posicion2])/2;
    } else {
        let posicionMediana = parseInt(lista.length/2);
        let valorMediana = lista[posicionMediana];
        return valorMediana;
    }
}