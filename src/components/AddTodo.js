import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a todo')
            return
        }

        onAdd({ text })

        setText('')
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Add new todo</h3>
            <input
                type="text"
                placeholder="Add todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input type="submit" value="Save todo" />
        </form>
    )
}

export default AddTodo
