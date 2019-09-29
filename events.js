const showAlert = () => {
    alert('Hello World!');
}

function writting(e) {
    console.log('writting', e.value);
}

const focus1 = function() {
    console.log('Hago foco :)');
}

const blur1 = function() {
    const x = document.getElementById('text');
    console.log('Salgo del input :(', x.value);
}