import React from 'react'
const btn = {
  color: 'blue',
  margin: '5px',
  fontSize: '23px',
  fontFamily: 'sans-serif',
  border: 'none'
}
const links = {
  color: 'blue',
  margin: '5px',
  fontSize: '23px',
  fontFamily: 'sans-serif',
}
const Navbar = (props) => {
  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} stylebg`} >
        <div className="container">
          <a className="navbar-brand some" href="/" style={btn}>MySites</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={links}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={links}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={links}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={links}>Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit" style={btn}>Signup</button>
              <button className="btn btn-outline-success" type="submit" style={btn}>Login</button>
            </form>
            <div className={`form-check form-switch`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogle} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.text} Mode`}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
