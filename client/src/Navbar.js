import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import history from 'history/browser';

import logo from './basket.svg';
import guest from './user_red.png';


function Navbar({ setGlobalUser }) {

  const [profile, setProfile] = useState(false);
  const [user, setUser] = useState(null);
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

    // set user state
    axios.get('/user/login')
        .then(res => {
          if(res.data !== 'No User') {
            setUser(res.data);
            setGlobalUser(res.data);
          }
          else {
            setGlobalUser(null);
          }
        })
        .catch(err => {
          console.log(err);
        });


    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setGlobalUser]);


  // login
  const login = () => {
    // hard coded here, I'm not satisfied with this!!!
    history.push('http://localhost:5000/auth/google');
  }


  // logout
  const logout = () => {
    // hard coded here, I'm not satisfied with this!!!
    history.push('http://localhost:5000/auth/logout');
  }



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
            {user ?
              <button className="btn" onClick={() => setProfile(!profile)}><img src={user.image} alt="guest" className="img-fluid m-1 rounded-circle" width="32" height="32" /></button>
                  :
              <button className="btn" onClick={() => setProfile(!profile)}><img src={guest} alt="guest" className="img-fluid m-1 rounded-circle" width="32" height="32" /></button>
            }
          </div>
        </div>

      </nav>

      {profile && <div className="jumbotron col-3 login" ref={jumbotronRef}>
                  <div className="lead text-center mb-3">
                    {user ?
                      <img src={user.image} alt="guest" className="img-fluid rounded-circle" width="64" height="64" />
                          :
                      <img src={guest} alt="guest" className="img-fluid rounded-circle" width="64" height="64" />
                    }
                  </div>
                  <div className="lead text-center">
                    {user ?
                      <h6>{user.displayName}</h6>
                          :
                      <h6>Guest</h6>
                    }
                  </div>
                  <hr className="my-4" />
                  <div className="lead text-center">
                    {user ?                      
                      <button className="btn btn-primary btn-block text-center" onClick={logout}>Logout</button>
                          :
                      <button className="btn btn-primary btn-block text-center" onClick={login}>Google Login</button>
                    }
                  </div>
                </div>}
    </div>
  );
}


export default Navbar;
