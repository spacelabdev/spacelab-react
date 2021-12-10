import React from "react"; 
import {Link} from 'react-router-dom';
import './dropdown.scss';

class Dropdown extends React.Component {
    render() {
        return (
            <>
                <div className="subMenu">
                    <Link className={'nav-link'} to={'/blog'} style={{textDecoration: 'none'}}>
                        Blog
                    </Link>
                    <Link className={'nav-link glossary-link'} to={'/glossary'} style={{textDecoration: 'none'}}>
                        Glossary
                    </Link>
                </div>
            </>
        )
    }
}

export default Dropdown;