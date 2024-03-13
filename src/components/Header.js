import { useState, useEffect } from 'react'

const Header = ({ todoItems }) => {
    return (
        <header className="todo-header">
            <h1>Todo</h1>
            <p>{todoItems.length}</p>
        </header>
    )
}

export default Header
