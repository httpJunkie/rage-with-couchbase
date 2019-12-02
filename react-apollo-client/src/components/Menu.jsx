import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Menu = () => {
  const context = useContext(AppContext);

  return (
    <ul style={{userSelect: 'none'}}>
      <li className="link">
        <NavLink className="text_link" exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li className="link">
        <NavLink className="text_link" activeClassName="active" to="/airlines">Airlines</NavLink>
      </li>
      <li className="link">
        <a className="text_link" href="https://github.com/httpJunkie/rage-with-couchbase">
          Source Code
        </a>
      </li>
      <li className="menu">
        <i className="k-icon k-i-menu"
          // onKeyPress={event => {
          //   if (event.key === "Enter") {
          //     context.toggleSidenav(!context.navOpen);
          //   }
          // }}
          // onClick={() => {
          //   context.toggleSidenav(!context.navOpen);
          // }}
        ></i>
      </li>
    </ul>
  )
}

export default Menu;