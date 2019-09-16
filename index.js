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

switch(alumno) {
    case 'Ramiro':
        console.log('Hola Ramiro');
        break;
    case 'Romina':
        console.log('Hola Romina');
        break;
    case 'Karina':
        console.log('Hola Karina');
        break;
    default:
        console.log('No vino nadie');
        break;
}

