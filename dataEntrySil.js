var total = window.prompt('Cuántos familiares tienes en tu casa?');
var family = [];
for(var i = 0; i < total; i++) {
    var name = window.prompt('Ingresa Nombre Completa');
    var lastname = window.prompt('Ingresar Apellido');
    var work = window.prompt('Ud Trabaja?');
    var total = [];
    if(work !== '0') /// como hago para si respuesta es SI work !== 'False' ?? el j < work ya no estaria?
    {
        for(var j = 0; j < work; j++) {
            var wk = window.prompt('Donde Trabaja?');
            if (wk !== '') {
                Total[j] = wk;
            }
        }
    }
    family[i] = {
        nombre: name,
        apellido: lastname
    }
    if(h.length !== 0) {
        family[i].work = Total;
    } else {
        family[i].work = 'Exito!!';
    }
}

console.log(family);