module.exports = function() {
    var todoList = this;

    todoList.todos = [
        {
            text: 'Aprender Angular',
            done: true
        },
        {
            text: 'Criar protótipo',
            done: true
        },
        {
            text: 'Usar diretivas do Angular',
            done: true
        },
        {
            text: 'Melhorar aparência',
            done: true
        },
        {
            text: 'Setup do gulp',
            done: true
        },
        {
            text: 'Adicionar browserify',
            done: true
        },
        {
            text: 'Migrar para SASS',
            done: true
        },
        {
            text: 'Otimizar HTML, CSS e JS',
            done: true
        },
        {
            text: 'Masterizar Angular',
            done: false
        }
    ];

    todoList.addTodo = function() {
        todoList.todos.push({
            text: todoList.todoText,
            done: false
        });

        todoList.todoText = '';
    };
};
