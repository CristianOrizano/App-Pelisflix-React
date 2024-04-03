import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import imagen from '../../../../core/img/icons8-palomitas-48.png';


const Navbar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
      setQuery(e.target.value);
    };
  
    const Search = () => {
      if (query != "") {
        navigate(`/search/${query}`);
      } else {
        navigate("/");
      }
    };
  
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{ background: "black" }}
        >
          <div className="container-fluid fw-bold">
            <a className="navbar-brand mx-5" id="logo" href="/">
              PELISFLIX<img src={imagen} alt="Ejemplo" style={{width:37}}/>
                        
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" activeclassname="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/series"
                  >
                    Series
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/movies"
                  >
                    Peliculas
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                  onChange={(e) => handleChange(e)}
                />
  
                <button
                  type="button"
                  onClick={() => Search()}
                  className="btn btn-outline-secondary"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  };
  
  export default Navbar;
  