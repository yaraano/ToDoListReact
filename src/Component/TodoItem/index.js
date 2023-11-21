import React, {useState} from "react";

const TodoItem = ({todo, deleteTodo , editTodo , toggle}) => {
    const [edit,setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title)



    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit)
        } else {
            const newData = {...todo, title: editTitle}
            editTodo(newData)
            setEdit(false)
        }
    }

    const handleCheck = (e) => {
        const newData = {...todo, completed: e.target.checked}
        toggle(newData)
    }

    return (
        <div
            style={{
            width:'300px',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            marginTop: '30px',
        }}
            >
            <div>
                {
                edit ?
                <input
                        className={'input'}
                        type="text"
                       defaultValue={todo.title}
                       onChange={(e) => setEditTitle(e.target.value) }
                />
                :
                <h3>
                    {todo.title}
                </h3>
            }
            </div>
            <input type="checkbox"
                   checked={todo.completed}
                   onChange={handleCheck}
            />
            <button
            onClick={handleEdit}
            >
                {edit ? 'Save' : 'Edit'}
            </button>
            <button
                className={'btn'}
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </div>
    )
}

export default TodoItem