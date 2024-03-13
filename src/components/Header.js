import { useEffect } from 'react'

const Header = ({ todoItems }) => {
    useEffect(() => {})

    return (
        <header>
            <h1>Todo</h1>
            <p>{todoItems.length}</p>
        </header>
    )
}

export default Header
