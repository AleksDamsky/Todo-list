// Variable
let list = document.querySelector('.todo-list'),
inut = document.querySelector('.input');
form = document.querySelector('.todo-form'),
toggle = document.querySelector('.todo-toggle');

// Making an onclick event
toggle.onclick = () => {
    toggle.classList.add('.is-important');

    if(toggle.classList.contains('.is-important')){
        toggle.textContent = `Важная задача`;
    } else{
        toggle.textContent = `Обычная задача`;
    }
}

// Making a newElement
inut.onsubmit = (evt) => {
    evt.preventDefault();

    let elem = document.createElement('li');
    list.append(elem);
    elem.textContent = inut.value;
    inut.value = '';
    if(toggle.classList.contains('is-important')){
        elem.classList.add('is-improtant');
    }
}