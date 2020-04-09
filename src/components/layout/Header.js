import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            Header
            <br />
            <Link to="/">Home</Link>
            <Link to="/container">Container</Link>
        </div>
    )
}

export default Header
