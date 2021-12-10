import React from "react";
import { Link } from "react-router-dom";
import './searchButton.scss'
export class Button extends React.Component {
    render() {
        return (
            <Link  className='btn' to='search'>
                <button className={'searchBtn'} style={{textDecoration: 'none'}}>
                    Search
                </button>
            </Link>
        )
    }
}

export default Button;