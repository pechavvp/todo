let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];

addButton.addEventListener('click', function() {

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessages();
});

function displayMessages() {

    todoList.forEach(function(item, index) {
        let displayMessage = `Наше дело: ${addMessage.value}`;
        console.log(displayMessage);
    });
}