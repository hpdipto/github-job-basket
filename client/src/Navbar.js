import React, { useState, useEffect, useRef } from 'react';
import logo from './basket.svg';
import guest from './user_red.png';


function Navbar() {

  const [profile, setProfile] = useState(false);
  const profileRef = useRef(null);
  const jumbotronRef = useRef(null);

  // detectin click event and close profile jumbotron
  // source: https://stackoverflow.com/a/54392243/9481106
  const handleClickOutside = event => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      if(jumbotronRef.current && !jumbotronRef.current.contains(event.target)) {
        setProfile(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <div className="navbar-brand">
          <h4 style={{fontFamily: "Bitter"}}>
            <img src={logo} alt="Logo" className="img-fluid m-2" width="35" />
            Job Basket
          </h4>
        </div>

        <div className="navbar-nav ml-auto">
          <div className="nav-item">
            <button className="btn"><img src={logo} alt="Logo" className="img-fluid m-1 rounded-circle" width="32" height="32" /></button>
          </div>

          <div className="nav-item" ref={profileRef}>
            <button className="btn" onClick={() => setProfile(!profile)}><img src={guest} alt="guest" className="img-fluid m-1 rounded-circle" width="32" height="32" /></button>
          </div>
        </div>

      </nav>

      {profile && <div className="jumbotron col-3 login" ref={jumbotronRef}>
                  <div className="lead text-center mb-3">
                    <img src={guest} alt="guest" className="img-fluid rounded-circle" width="64" height="64" />
                  </div>
                  <div className="lead text-center">
                    <h6>Guest</h6>
                  </div>
                  <hr className="my-4" />
                  <div className="lead text-center">
                    <button className="btn btn-primary btn-block text-center">Login with Google</button>
                  </div>
                </div>}
    </div>
  );
}


export default Navbar;
