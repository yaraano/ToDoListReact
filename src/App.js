import React, { useState } from "react"
import TodoItem from "./Component/TodoItem"

const App = () => {
    const [todos, setTodos] = useState(todosArray)
    const [newTodo, setNewTodo] = useState()


    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    const handleEditTodo = (data) => {
        setTodos(todos.map((el) => (el.id === data.id ? data : el)))
    };

    const toggle = (data)=>{
        setTodos(todos.map(todo=>(todo.id === data.id ? data : todo)))
    }

    console.log(todos)


    const handleAdd = () => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                title: newTodo,
            }
        ])
        setNewTodo("")
        console.log(todos)
    }

    return (
        <div className={'container'}>
            <div>
                <h1>Todo app</h1>
                <div className={'addPanel'}>
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder={"Название"}
                    />
                    <button onClick={handleAdd}>Add Todo</button>
                </div>
                {todos.map((todo, idx) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        editTodo={handleEditTodo}
                        toggle={toggle}
                        className={'object'}
                    />
                ))}
            </div>
        </div>
    );
};

const todosArray = [
    {
        id: 1,
        title: "Todo 1",
    },
    {
        id: 2,
        title: "Todo 2",
    },
];
export default App;
