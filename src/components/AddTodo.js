import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Add a todo first')
            return
        }

        onAdd({ text })

        setText('')
    }

    return (
        <form onSubmit={onSubmit} className="add-todo-form">
            <h3>Add new todo</h3>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Write a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    className="button button-form"
                    type="submit"
                    value="Add todo"
                />
            </div>
        </form>
    )
}

export default AddTodo
