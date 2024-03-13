import TodoItem from './TodoItem'

export const Todos = ({ todoItems, onToggle, onDelete }) => {
    return (
        <div className="todo-list">
            {todoItems.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default Todos
