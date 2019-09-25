var total = window.prompt('Cuántos familiares tienes en tu casa?');
var family = [];
for(var i = 0; i < total; i++) {
    var name = window.prompt('Ingresa el nombre');
    var lastname = window.prompt('Ingrese el apellido');
    var hobbies = window.prompt('Ingresa la cantidad de hobbies');
    var h = [];
    if(hobbies !== '0') {
        for(var j = 0; j < hobbies; j++) {
            var hobbie = window.prompt('Nombre del hobbie');
            if (hobbie !== '') {
                h[j] = hobbie;
            }
        }
    }
    family[i] = {
        nombre: name,
        apellido: lastname
    }
    if(h.length !== 0) {
        family[i].hobbies = h;
    } else {
        family[i].hobbies = 'Es un pajero';
    }
}

console.log(family);

const URL = 'http;//sdfsdfsdf';
let n = 4;