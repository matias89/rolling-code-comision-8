let i = 0;

const addElement = () => {
    const inputForm = document.getElementById('input-form');
    const inputElementName = createElement('input', i, 'name');
    const inputElementLastname = createElement('input', i, 'lastname');
    inputForm.appendChild(inputElementName);
    inputForm.appendChild(inputElementLastname);
    i++;
}


const createElement = (elementType, i, type) => {
    const inputElement = document.createElement(elementType);
    // inputElement.value = 'Algo';
    // inputElement.style.border = '1px solid blue';
    inputElement.placeholder = 'Ingresa ' + type;
    inputElement.className = 'form-control';
    inputElement.id = type + '_' + i;
    return inputElement;
}

const sendData = () => {
    const title = document.getElementById('title').value;
    const team = {
        name: title,
        description: 'Lorem asdlkalsdlaksdnlasda klasdkjasnd lasd lasd'
    }
    const personalInfo = [];
    for (let j = 0; j < i; j++) {
        const name = document.getElementById('name_' + j);
        const lastname = document.getElementById('lastname_' + j).value;
        personalInfo.push({
            name: name.value,
            lastname: lastname
        });
    }
    team.players = personalInfo;
    console.log(team);


    const a = [];
    a[0] = 'asdasdasdd';

    const o = {};
    o.miPropiedad = 'Algo';
}