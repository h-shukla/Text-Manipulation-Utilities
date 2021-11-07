import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode==='dark'||props.greenMode===true?'dark':'light'} bg-${props.mode==='dark'||props.greenMode===true?'dark':'light'}`}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                  </li>
                </ul>
                {/* <form className="d-flex"> */}
                {/*   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                {/*   <button className="btn btn-outline-success" type="submit">Search</button> */}
                {/* </form> */}
                <div className={`form-check form-switch mx-2 text-${props.greenMode===true||props.mode==='dark'?'light':'dark'}`}>
                  <input className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Darkmode</label>
                </div>
                <div className={`form-check form-switch mx-2 text-${props.greenMode===true||props.mode==='dark'?'light':'dark'}`}>
                  <input className="form-check-input" onChange={props.toggleGreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Greenish Darkmode</label>
                </div>
              </div>
            </div>
          </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Text Utils",
    aboutText: "About",
};

/*
  using <a> tag and 'href' will make the pages reload
  whereas using <Link> and 'to' will load the components without reloading the page
*/
