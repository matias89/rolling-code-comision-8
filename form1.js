let i = 0;

const submitForm = (ev) => {
    ev.preventDefault();
    const members = [];
    for (let j = 0; j < i; j++) {
        const name = document.getElementById('name_' + j).value;
        const lastname = document.getElementById('lastname_' + j).value;
        members.push({
            name: name,
            lastname: lastname
        });
    }
    console.log(members);
}

const addMember = () => {
    const familyContainer = document.getElementById('family-info');
    const group = createGroup(i);
    familyContainer.appendChild(group);
    i++;
}

const createElement = (type, className, placeholder, id) => {
    const element = document.createElement(type);
    element.className = className;
    if(type === 'input') {
        element.placeholder = placeholder;
        element.id = placeholder.toLowerCase() + '_' + id;
    }
    return element;
} 

const createGroup = id => {
    const row = createElement('div', 'row mb-2');
    const col1 = createElement('div', 'col');
    const col2 = createElement('div', 'col');
    const input1 = createElement('input', 'form-control', 'Name', id);
    const input2 = createElement('input', 'form-control', 'Lastname', id);
    col1.appendChild(input1);
    col2.appendChild(input2);
    row.appendChild(col1);
    row.appendChild(col2);
    return row;
}