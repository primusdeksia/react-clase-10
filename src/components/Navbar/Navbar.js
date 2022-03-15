import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({data, showed, showHandler, setData}) => {

  

    return (
      <div className='App'>
        <div className='topBar'>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to='/tareas'>Tareas</NavLink>
              </li>
              {/* <li>
                <NavLink to='/new'>Nuevo</NavLink>
              </li>
              <li>
                <NavLink to='/about'>Acerca de</NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    );
}

export default Navbar;
