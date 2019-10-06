let i;

if (localStorage.getItem('count')) {
 i = localStorage.getItem('count');
} else {
    i = 0;
}

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
    localStorage.setItem('count', i);
}

const createElement = (type, className, innerText, id, onClick) => {
    const element = document.createElement(type);
    element.className = className;
    if(type === 'input') {
        element.placeholder = innerText;
    } else if (type === 'button') {
        element.type = 'button';
    }
    if(innerText) {
        element.innerHTML = innerText;
    }
    if (onClick) {
        element.onclick = onClick;
    }
    if (id) {
        element.id = innerText.toLowerCase() + '_' + id;
    }
    return element;
} 

const createGroup = id => {
    const row = createElement('div', 'row mb-2', '', 'row_' + id);
    const col1 = createElement('div', 'col');
    const col2 = createElement('div', 'col');
    const col3 = createElement('div', 'col-2');
    const input1 = createElement('input', 'form-control', 'Name', id);
    const input2 = createElement('input', 'form-control', 'Lastname', id);
    const removeBtn = createElement('button', 'btn btn-danger', 'Delete', '', () => deleteElement(id));
    col1.appendChild(input1);
    col2.appendChild(input2);
    col3.appendChild(removeBtn);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    return row;
}

const deleteElement = id => {
    const removeItem = confirm('Realmente deseas eliminar el registro?');
    if (removeItem) {
        const row = document.getElementById('_row_' + id);
        const parent = row.parentNode;
        parent.removeChild(row);
        localStorage.setItem('count', localStorage.getItem('count') - 1);
    }
}

const renderElements = () => {
    for (let j = 0; j < i; j++) {
        const familyContainer = document.getElementById('family-info');
        const group = createGroup(j);
        familyContainer.appendChild(group);
    }
}
renderElements();