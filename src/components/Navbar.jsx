import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
export const Navbar = () => {
const{store,dispatch}=useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
			{store.favoritos.length === 0 ? <p>loading</p> : store.favoritos.map((personaje) => (
							<li> {personaje} </li>
						 ))
						}
            
          </ul>
        </li>
			</div>
		</nav>
	);
};