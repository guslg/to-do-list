import React from 'react'
import { NavLink } from "react-router-dom";





const Nav = () => {
    
      return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/todolist">
                        Créer une To Do List
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
      );
}
export default Nav