import { useState } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => {
    const [todoItems, setTodoItems] = useState([
        {
            id: 1,
            text: 'Do laundry',
            completed: false
        },
        {
            id: 2,
            text: 'Do the dishes',
            completed: false
        },
        {
            id: 3,
            text: 'Do React homework',
            completed: true
        }
    ])

    const addTodo = (todo) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTodo = { id, ...todo }
        setTodoItems([...todoItems, newTodo])
    }

    const deleteTodo = (id) => {
        console.log('Delte' + id)
    }

    const toggleCompleted = (id) => {
        setTodoItems(
            todoItems.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    return (
        <div className="app-container">
            <div className="todo-content">
                <Header todoItems={todoItems} />
                <TodoList
                    todoItems={todoItems}
                    onToggle={toggleCompleted}
                    onDelete={deleteTodo}
                />
                <AddTodo onAdd={addTodo} />
            </div>
        </div>
    )
}

export default App
