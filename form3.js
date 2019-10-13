const doFocus = () => {
    console.log('Hiciste foco!');
}
const doBlur = () => {
    console.log('Hiciste blurrr!');
}

const n = document.getElementById('name');
n.addEventListener('focus', doFocus);
n.removeEventListener('focus', doFocus);

const myForm = document.getElementById('my-form');
const submitCallback = event => {
    event.preventDefault();
    const inputs = document.getElementsByClassName('form-control');
    for (let i = 0; i < inputs.length; i++) {
        const inputValue = inputs[i].value;
        console.log(inputValue);
    }
}
myForm.addEventListener('submit', submitCallback);

const inputFile = document.getElementById('file');
inputFile.addEventListener('change', event => {
    const targetFile = event.target.files[0];
    const imgURL = URL.createObjectURL(targetFile);
    console.log(imgURL);
    const renderArea = document.getElementById('image-loaded');
    const img = document.createElement('img');
    img.src = imgURL;
    img.style = 'width: 300px;';
    renderArea.appendChild(img);
});