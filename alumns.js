var alumns = [
    {
        name: 'Matías 0',
        lastname: 'Aybar',
        email: 'matiasaybar89@gmail.com',
        family: [
            {
                name: 'María',
                lastname: 'Sánchez',
                rol: 'mother',
                email: 'maria@gmail.com',
                gender: 'female'
            },
            {
                name: 'Raúl',
                lastname: 'Aybar',
                rol: 'father',
                email: 'raul@gmail.com',
                gender: 'male'
            },
            {
                name: 'Marcos',
                lastname: 'Aybar',
                rol: 'brother',
                email: 'marcos@gmail.com',
                gender: 'male'
            },
            {
                name: 'Ana',
                lastname: 'Aybar',
                rol: 'sister',
                email: 'ana@gmail.com',
                gender: 'femmale'
            }
        ]
    },
    {
        name: 'Matías 1',
        lastname: 'Aybar',
        email: 'matiasaybar89@gmail.com',
        family: [
            {
                name: 'María',
                lastname: 'Sánchez',
                rol: 'mother',
                email: 'maria@gmail.com',
                gender: 'female'
            },
            {
                name: 'Raúl',
                lastname: 'Aybar',
                rol: 'father',
                email: 'raul@gmail.com',
                gender: 'male'
            },
            {
                name: 'Marcos',
                lastname: 'Aybar',
                rol: 'brother',
                email: 'marcos@gmail.com',
                gender: 'male'
            },
            {
                name: 'Ana',
                lastname: 'Aybar',
                rol: 'sister',
                email: 'ana@gmail.com',
                gender: 'femmale'
            }
        ]
    },
    {
        name: 'Matías 2',
        lastname: 'Aybar',
        email: 'matiasaybar89@gmail.com',
        family: [
            {
                name: 'María',
                lastname: 'Sánchez',
                rol: 'mother',
                email: 'maria@gmail.com',
                gender: 'female'
            },
            {
                name: 'Raúl',
                lastname: 'Aybar',
                rol: 'father',
                email: 'raul@gmail.com',
                gender: 'male'
            },
            {
                name: 'Marcos',
                lastname: 'Aybar',
                rol: 'brother',
                email: 'marcos@gmail.com',
                gender: 'male'
            },
            {
                name: 'Ana',
                lastname: 'Aybar',
                rol: 'sister',
                email: 'ana@gmail.com',
                gender: 'femmale',
                hobbies: ['futbol', 'voley']
            }
        ]
    },
    {
        name: 'Matías 3',
        lastname: 'Aybar',
        email: 'matiasaybar89@gmail.com',
        family: [
            {
                name: 'María',
                lastname: 'Sánchez',
                rol: 'mother',
                email: 'maria@gmail.com',
                gender: 'female'
            },
            {
                name: 'Raúl',
                lastname: 'Aybar',
                rol: 'father',
                email: 'raul@gmail.com',
                gender: 'male'
            },
            {
                name: 'Marcos',
                lastname: 'Aybar',
                rol: 'brother',
                email: 'marcos@gmail.com',
                gender: 'male'
            },
            {
                name: 'Ana',
                lastname: 'Aybar',
                rol: 'sister',
                email: 'ana@gmail.com',
                gender: 'femmale'
            }
        ]
    }
];
/*
for (var i = 0; i < alumns.length; i++) {
    console.log(alumns[i].name + ' ' + alumns[i].lastname);
    var family = alumns[i]['family'];
    for(var j = 0; j < family.length; j++) {
        if(family[j].rol === 'sister' || family[j].rol === 'brother') {
            console.log(family[j].name);
        }
    }
    console.log('____________________');
}
*/


var teachers = [
    {
        name: 'Matias 1',
        lastname: 'Aybar',
        email: 'matiasaybar89@gmail.com',
        hobbies: ['futbol', 'voley', 'natación']
    },
    {
        name: 'Matias 2',
        lastname: 'Aybar',
        email: 'matiasaybar89@gmail.com',
        hobbies: ['futbol', 'voley', 'natación']
    }
];

teachers[0] = {
    name: 'Matias 3333',
    lastname: 'Aybar',
    email: 'matiasaybar89@gmail.com',
    hobbies: ['futbol', 'voley', 'natación']
}

// console.log(teachers.length);

for (var fer = 0; fer < teachers.length; fer++) { // 4
    console.log(teachers[fer].name, ' le gusta practicar:');
    for(var sil = 0; sil < teachers[fer].hobbies.length; sil++) {
        console.log(teachers[fer]['hobbies'][sil]);
    }
    console.log('__________');
}
