const car = (function car() {
    function arrancar(arranca) {
        if (arranca) {
            console.log('Arrancar');
        } else {
            trucoDeArranque();
        }
        
    }
    function acelerar(v) {
        console.log('Acelerar hasta', v);
    }
    function frenar() {
        console.log('Frenar');
    }
    function trucoDeArranque() {
        console.log('Arrancó con el truco de arranque');
    }
    return {
        arrancar: arrancar,
        a: acelerar,
        frenar
    }
})();

// car.arrancar(false);
// car.a(90);
// car.frenar();


//////////////////////////////////////

const access = (() => {
    const doLogin = (user, password) => {
        if (user === 'maybar' && password === '1234') {
            redirectToAdmin();
        } else {
            showError('Error en datos de acceso');
        }
    }
    const doLogout = () => {
        console.log('Sesión cerrada');
    }
    const redirectToAdmin = () => {
        console.log('Redireccionando a admin ...');
    }
    const showError = (message) => {
        console.log(message);
    }
    return {
        doLogin,
        doLogout
    }
})();
 const fn = () => {
    const userName = prompt('Ingresa el nombre de usuario');
    const userPassword = prompt('Ingresa la clave');
    access.doLogin(userName, userPassword);
 }
 // fn();

 ///////////////////////////////

 const FerDate = (() => {
     const getYear = () => {

     }
     const getMonth = () => {

     }
     const getAge = (fecha) => {
        const hoy = new Date();
        const cumpleanos = new Date(fecha);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        const m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--; //  edad = edad - 1
        }
        return edad;
     }
     return {
        getAge
     }
 })();

 const edad = FerDate.getAge('1989-10-19');

 // console.log(edad);


 ///////////////////

 const human = ((saludo) => {
     let colorDeOjos, altura;
     const nacer = (o, a) => {
        colorDeOjos = o;
        altura = a;
     }
     const correr = () => {

     }
     const showProperties = () => {
         return {
            colorDeOjos,
            altura
         }
     }
     return {
        correr,
        showProperties,
        nacer,
        text: saludo
     }
 })('Hello!');

 human.nacer('Negro', '2 metros');
 const p = human.showProperties();

 console.log(human.text);

 ///////////////////////////////////



 const shop = (() => {
     const add = (product ) => {
         console.log('ADD :)');
        setItem('prod', {
            title: 'Manteca'
        });
     }
     const remove = () => {

     }
     const viewProduct = (k) => {
         const prod = getItem(k);
     }
     const submit = () => {

     }
     const setItem = (key, value) => {
         localStorage.setItem(key, JSON.stringify(value));
     }
     const getItem = (key) => {
         return JSON.parse(localStorage.getItem(key));
     }
    return {
        add,
        remove,
        submit
    }
})();

const handleView = ((shop) => {
    const createElement = () => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.innerText = 'Agregar';
        btn.onclick = shop.add;
        return btn;
    }
    const render = () => {
       const areaToRender = document.getElementById('btn');
       const b = createElement();
       areaToRender.appendChild(b);
    }
    return {
       render
    }
})(shop);

handleView.render();
 
