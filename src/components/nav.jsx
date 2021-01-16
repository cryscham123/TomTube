import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const Nav = (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        props.history.push(`/${inputRef.current.value}`);
        formRef.current.reset();
    }
    return (
        <div className="nav">
            <Link className="nav__link title" to={`/${"home"}`}>
                <i className="fab fa-youtube"></i>
                Tomtube
            </Link>
            <form ref={formRef} className="nav__form" onSubmit={handleSubmit}>
                <input ref={inputRef} className="search" type="text" placeholder="search..."></input>
                <button className="submit" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default withRouter(Nav);