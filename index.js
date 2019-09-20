// NOTA: PARA PROBAR, HABILITAR LAS LINEAS COMENTADAS DONDE ESTAN LOS console.log()

var frutas;
frutas = ['Banana', 'Manzana', 'Pera'];
var numbers = [
    199,
    39,
    12,
    09,
    78,
    [
        1, 2, 3,
        [
            5, 8, 4,
            ['a', 'b', 'c']
        ]
    ]
]
var others = [frutas, numbers];
// console.log(others[1][5][3][3][1]);

var paolo = {
    name: 'Paolo',
    lastname: 'Leguizamon',
    email: 'paolo.legi@gmail.com',
    student: true,
    hobbies: ['correr', 'fumar', 'leer']
};

var alumnos = [
    {
        name: 'Paolo',
        lastname: 'Leguizamon',
        email: 'paolo.legi@gmail.com',
        student: true,
        hobbies: ['correr', 'fumar', 'leer']
    },
    {
        name: 'Ramiro',
        lastname: 'Gisone',
        email: 'ramiro.gisone@gmail.com',
        student: true,
        hobbies: ['fumar', 'leer']
    },
    {
        name: 'Romina',
        lastname: 'Mendez',
        email: 'romina.m@gmail.com',
        student: true,
        hobbies: ['fumar']
    }
];

var miNombre = 'Matias';

var numero = 5;
numero = numero + 9;
// console.log(numero);
// console.log(numero++);
// console.log(numero);

var flag = 120;
// console.log(!flag);

var l1 = false;
var l2 = false;
// console.log(l1 && l2);
// console.log(l1 || l2);

var num1 = '';
var num2 = 0;

// console.log(num1 + num2, num1 - num2, num1 / num2, num1 * num2, num1 % num2);

// console.log(num1 === num2);
var condicion = 2;
if (condicion === 1 && condicion === 2) {
    // console.log('El valor es uno o dos');
}
 else {
    // console.log('Chau Mundo');   
}

for(var i = 0; i < alumnos.length; i++) {
    // console.log('>>>', alumnos[i]);
}

for(i in alumnos) {
    // console.log(alumnos[i]);
}


var alumno = ''; // aqui escribir Karina, Ramiro o Romina y ver que pasa
var result = '';
switch(alumno) {
    case 'Ramiro':
        result = 'Hola Ramiro';
        break;
    case 'Romina':
        result = 'Hola Romina';
        break;
    case 'Karina':
        result = 'Hola Karina';
        break;
    default:
        result = 'No vino nadie';
        break;
}
// console.log(result);

// Funciones

function suma(num1, num2) {
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}

var s1 = suma(1, 3);
var s2 = suma(1034, 120);
var s3 = suma(0.567, 0.23453);
var s4 = suma(-191, 100);

// console.log(s1, s2, s3, s4);
var s5 = suma(s2, s3);
// console.log(s5);

function prod(fnSuma, n1, n2) {
    fnSuma(n1, n2);
    
};
prod(suma, 3, 4);

var resta = (a, b) => {
    return a - b;
}

var r = resta(100, 30);

// console.log(r);

// While
var i = 1;
while(i <= 100) {
    // console.log('Num >> ', i);
    i = i + 1;
}
/*
var li = document.getElementsByTagName('li')[2];
li.style.backgroundColor = 'red';
li.innerHTML = 'Hola Mundo';
*/


