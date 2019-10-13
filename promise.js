const timer = () => {
    let i = 5;
    setTimeout(() => {
        i = 0;
    }, 1000);
    return i;
}

const t = timer();
// console.log(t);

setTimeout(() => {
    // console.log(1);
}, 3000);

setTimeout(() => {
    // console.log(2);
}, 1000);

setTimeout(() => {
    // console.log(3);
}, 2000);

const p = new Promise((resolve, reject) => {
    // Aciones
    const v = true;
    if (v) {
        resolve({status: 'success', message: 'Hola mundo!'});
    } else {
        reject({status: 'error', message: 'Hubo un error en el servidor'});
    }
});

p
    .then(response => {
        // console.log(response);
        // construirVistaUsuarios(response);
    })
    .catch(error => {
        // console.log(error);
        // construirModalError(error);
    });

    const timer2 = () => {
        let i = 5;
        return new Promise(resolve => {
            setTimeout(() => {
                i = 0;
                resolve(i);
            }, 3000);
            //resolve(i);
        });
    }

    const t2 = timer2();
    // console.log(t2);
    t2.then(r => {
        // console.log(r);
    });

    const test = (param) => {
        // console.log(param[2]);
        param(1);
    }
    const a = (p) => {
        //console.log('Hola mundo!', p)
    };
    test(a);
    a(3);


    // Ejemplo con FETCH
    const request = fetch('https://jsonplaceholder.typicode.com/posts');
    request.then(response => {
        const data = response.json();
        data.then(posts => {
            // console.log(posts);
        })
        .catch(error => {
            console.log('Error', error);
        });
    });

    const requestImg = fetch('https://static.azteca.com/crop/crop.php?width=750&height=450&img=https://static.azteca.com/imagenes/2018/01/fotoespecial-2185708.jpg&coordinates=50,50');
    requestImg.then(response => {
        const binaryObj = response.blob();
        binaryObj.then(file => {
            const img = window.URL.createObjectURL(file);
            console.log('IMG', img);
            const imgDiv = document.getElementById('img');
            const imgTag = document.createElement('img');
            imgTag.src = img;
            imgDiv.appendChild(imgTag);
        });
    });


const timer3 = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const n = Math.ceil(Math.random() * 10);
            if (n > 5) {
                resolve(n);
            } else {
                reject(n);
            }
        }, 1000);

    });
}

const t3 = timer3();
t3.then(r => {
    // console.log('Promesa resuelta!', r);
}).catch(error => {
    // console.log('Rejected!!!', error);
});


const requestComments = window.fetch('https://jsonplaceholder.typicode.com/comments');
requestComments.then(response => {
    const d = response.json();
    d.then(comments => {
        console.log(comments);
    });
});


