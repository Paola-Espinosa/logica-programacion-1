// Solicitar numeros
alert("Ingresa 3 numeros para ordenarlos de menor a mayor");
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
let numero3 = parseInt(prompt("Ingresa el tercer número:"));

//Imprimir en consola

console.log("Primer número:", numero1);
console.log("Segundo número:", numero2);
console.log("Tercer número:", numero3);

// Comprobar si hay números iguales
if (numero1 === numero2 && numero2 === numero3) {
    console.log("Todos los números son iguales.");
} else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
    console.log("Dos números son iguales.");
} else {
    console.log("Todos los números son diferentes.");
}

//Ordena Mayor a menor

let ordenaMm = [];

if (numero1 > numero2) {
    if (numero2 > numero3) {
        ordenaMm.push(numero2);
    } else if (numero1 > numero3) {
        ordenaMm.push(numero1);
        if(numero3>numero2){
            ordenaMm.push(numero3);
            ordenaMm.push(numero2);
            console.log(ordenaMm);
        }
    } else {
        ordenaMm.push(numero3);
        if (numero1 > numero2) {
            ordenaMm.push(numero1);
            ordenaMm.push(numero2);
            console.log(ordenaMm);
        } else {
            ordenaMm.push(numero2);
            ordenaMm.push(numero1);
            console.log(ordenaMm);
        }
    }

} else if (numero2 > numero3) {
    ordenaMm.push(numero2);
    if (numero1 > numero3) {
        ordenaMm.push(numero1);
        ordenaMm.push(numero3);
        console.log(ordenaMm);

    } else {
        ordenaMm.push(numero3);
        ordenaMm.push(numero1);
        console.log(ordenaMm);
    }
}else{
    ordenaMm.push(numero3);
    if(numero1> numero2){
        ordenaMm.push(numero1);
        ordenaMm.push(numero2);
        console.log(ordenaMm);
    }else{
        ordenaMm.push(numero2);
        ordenaMm.push(numero1);
        console.log(ordenaMm);
    }
}



//Ordena menor a Mayor
let ordenamM = [];

if (numero1 < numero2) {
    if (numero2 < numero3) {
        ordenamM.push(numero2);
    } else if (numero1 < numero3) {
        ordenamM.push(numero1);
        if(numero3<numero2){
            ordenamM.push(numero3);
            ordenamM.push(numero2);
            console.log(ordenamM);
        }
    } else {
        ordenamM.push(numero3);
        if (numero1 < numero2) {
            ordenamM.push(numero1);
            ordenamM.push(numero2);
            console.log(ordenamM);
        } else {
            ordenamM.push(numero2);
            ordenamM.push(numero1);
            console.log(ordenamM);
        }
    }

} else if (numero2 < numero3) {
    ordenamM.push(numero2);
    if (numero1 < numero3) {
        ordenamM.push(numero1);
        ordenamM.push(numero3);
        console.log(ordenamM);

    } else {
        ordenamM.push(numero3);
        ordenamM.push(numero1);
        console.log(ordenamM);
    }
}else{
    ordenamM.push(numero3);
    if(numero1< numero2){
        ordenamM.push(numero1);
        ordenamM.push(numero2);
        console.log(ordenamM);
    }else{
        ordenamM.push(numero2);
        ordenamM.push(numero1);
        console.log(ordenamM);
    }
}







