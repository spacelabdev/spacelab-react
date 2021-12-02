import React from "react"; 
import {Link} from 'react-router-dom'
import Button from "./button"


class Dropdown extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <Link className={'nav-link'} to={'/blog'} style={{textDecoration: 'none'}}>
                    Blog
                    </Link>
                    <Link className={'nav-link'} to={'/glossary'} style={{textDecoration: 'none'}}>
                    Glossary
                    </Link>
                    <Button />
                </nav>
            </>
        )
    }
}

export default Dropdown;