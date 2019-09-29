
const request = window.fetch('https://jsonplaceholder.typicode.com/comments');
request.then(data => {
    data.json().then(response => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            createElement(response[i].name, response[i].body);
        }
    });
}).catch(error => {
    console.log(error);
});


window.setTimeout(() => {
    window.clearInterval(interval);
}, 3000);

const interval = window.setInterval(() => {
    // console.log(new Date().toLocaleTimeString());
}, 1000);

// document.documentElement.childNodes[2].childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Hola mundo'
const  li = document.getElementsByTagName('li')[1];
console.log(li);

li.innerHTML = 'Hola Mundo';


const createElement = (name, body, email) => {
    const app = document.getElementById('app');
    const d1 = document.createElement('div');
    const img = document.createElement('img');
    img.src = 'https://imagenes.milenio.com/YONeZ5-2cQu0TH_W2iPiQ_FkzbM=/958x596/https://www.milenio.com/uploads/media/2018/12/25/quieran-comprar-cachorro-acudir-criaderos.jpg';
    img.className = 'card-img-top';
    d1.className = 'card col-6';
    const title = document.createElement('h1');
    title.innerHTML = name;
    const p = document.createElement('p');
    p.innerText = body;
    d1.appendChild(title);
    d1.appendChild(img);
    d1.appendChild(p);
    app.appendChild(d1);
}




function suma(a, b, c, d, callback) {
    const _a = 5;
    return a + b + _a;
}

const suma = function(a, b, c, d, callback) {
    const _a = 5;
    return a + b + _a;
}

const suma = (a, b, c, d, callback) => {
    const _a = 5;
    callback(4);
    return a + b + _a;
}

const b = 1;
const d = 4;

suma(b, d, 3, 4, value => {
    return null;
});
