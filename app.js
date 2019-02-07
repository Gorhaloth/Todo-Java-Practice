var form = document.getElementById('add-item');
var input = document.getElementById('input');
var list = document.getElementById('list');

function addTodo(event){
    event.preventDefault();
    var item = input.value;
    console.log('Todo item is: ' + item)
    form.reset();
    list.innerHTML += '<li>' + item + '</li>';
}

form.addEventListener('submit', addTodo)