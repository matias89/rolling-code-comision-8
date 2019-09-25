
const request = window.fetch('https://jsonplaceholder.typicode.com/comments');
request.then(data => {
    data.json().then(response => {
        console.log(response);
        response.forEach(item => {
            createElement(item.name, item.body);
        });
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


const createElement = (name, body) => {
    const app = document.getElementById('app');
    const d1 = document.createElement('div');
    d1.className = 'card col-6';
    const title = document.createElement('h1');
    title.innerHTML = name;
    const p = document.createElement('p');
    p.innerText = body;
    d1.appendChild(title);
    d1.appendChild(p);
    app.appendChild(d1);
}
