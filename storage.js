/*
const user = {
    name: 'Matias',
    lastname: 'Aybar',
    isMale: true,
    jump: (a, b) => {
        console.log('Matias saltó!', a, b);
    }
}
console.log(user.name);
user.jump(1, 'hola');*/


window.localStorage.setItem('userName', 'Matías');
window.localStorage.setItem('userLastname', 'Aybar');

const name = localStorage.getItem('userName');
const lastname = localStorage.getItem('userLastname');

console.log(name, lastname);