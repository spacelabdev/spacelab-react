import React from "react";
import { Link } from "react-router-dom";

export class Button extends React.Component {
    render() {
        return (
            <Link to='search'>
                <button className='btn'>Search</button>
            </Link>
        )
    }
}

export default Button;