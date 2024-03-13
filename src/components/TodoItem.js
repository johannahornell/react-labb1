import { FaRegSquareCheck, FaRegSquare, FaTrash } from 'react-icons/fa6'

const TodoItem = ({ onToggle, onDelete, todo }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div>
                <span className="toggle-todo" onClick={() => onToggle(todo.id)}>
                    {todo.completed ? <FaRegSquareCheck /> : <FaRegSquare />}
                </span>
                <span className="todo-text">{todo.text}</span>
            </div>
            <FaTrash onClick={() => onDelete(todo.id)} />
        </div>
    )
}

export default TodoItem
