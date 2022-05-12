/*let no_multiplo=0;
let i=1;

do{
    if(i==16){
        i++;
        continue;
    };
    if(i==45){
        break;
    };
    if(i%4==0){
        document.write(i+"<br>");
    }
    else{
        no_multiplo++;
    };
    i++;
}while(i<=50);
document.write(`La cantidad de numeros no multiplos de cuatro es: ${no_multiplo}`);*/

/*for(let i=1; i<10;i++){
    let res =1;
    for(let j=1;j<=i;j++){
        res=res*j;
    }
    console.log(`factorial de ${i} es ${res}`);
}*/


/*let estudiante="omar";
let posicion=0;
let cursoDiseno=["juan","pedro","maria","marcos"];
let loEncontramos=false;

for (let i=0;i<cursoDiseno.length;i++){
    if(cursoDiseno[i]===estudiante){
        loEncontramos=true;
        posicion=i;
    }
}

if(loEncontramos){
    console.log(`${estudiante} pertenece al cuso de diseño, y esta en la posicion: ${posicion}`);
}
else{
    console.log(`${estudiante} NO PERTENECE al curso de Diseño`)
}*/

/*
//definicion
function hola(nombre , apellido){
    console.log(`hola ${nombre} ${apellido}, bienvenido`);
}
//invoacaion
hola("didier", "morantes");*/


/*
function sumar(dato1, dato2){
    let resultado =dato1+dato2;
    return resultado;
}

let final=sumar(6,5);
console.log(`${final}`);*/

/*
let suma=(dato1,dato2)=>dato1+dato2;

console.log(`resultado es ${suma(5,8)}`);*/

//entrada
var dato=parseInt(prompt("ingrese un numero entre el 1 y el 20"));
console.log(`dato ingresado fue ${dato}`)

//proceso

let multiplicar=(valor)=>{
    for(let i=1;i<=valor;i++){
        let resultado=valor*i;
        console.log(`${dato} * ${i} = ${resultado}`);
    }
};

let factorial=(otrovalor)=>{
    for(let i=1;i<=otrovalor;i++){
        let res=1;
        for(let j=1;j<=i;j++){
            res=res*j;
        }
        console.log(`factorial de ${i} es ${res}`);
    }
};

//invoacion de la arrow function
multiplicar(dato);
factorial(dato);