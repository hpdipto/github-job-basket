import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import logo from './basket.svg';
import guest from './user_red.png';


function Navbar({ setGlobalUser }) {

  const [profile, setProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const profileRef = useRef(null);
  const jumbotronRef = useRef(null);

  const history = useHistory();


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
        })
        .catch(err => {
          console.log(err);
        });


    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setGlobalUser]);


  // home
  const home = () => {
    //window.location.href = 'http://localhost:3000';
    history.push('/');
  }


  // login
  const login = () => {
    // hard coded here, I'm not satisfied with this!!!
    window.location.href = 'http://localhost:5000/auth/google';
  }


  // logout
  const logout = () => {
    // hard coded here, I'm not satisfied with this!!!
    window.location.href = 'http://localhost:5000/auth/logout';
  }


  // basket option
  const basket = () => {
    if(user) {
      history.push('/basket');
    }
    else {
      setShowModal(!showModal);
    }
  }



  return (
    <div>
      <nav className="navbar navbar-expand flex-column flex-md-row navbar-dark bg-primary">

        <div className="navbar-brand logo" onClick={home}>
          <h4 style={{fontFamily: "Bitter"}}>
            <img src={logo} alt="Logo" className="img-fluid m-2" width="35" />
            Job Basket
          </h4>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn" onClick={basket}><img src={logo} alt="Logo" className="img-fluid m-1 rounded-circle" width="32" height="32" /></button>
          </li>

          <li className="nav-item" ref={profileRef}>
            {user ?
              <button className="btn" onClick={() => setProfile(!profile)}><img src={user.image} alt="user" className="img-fluid m-1 rounded-circle" width="32" height="32" /></button>
                  :
              <button className="btn" onClick={() => setProfile(!profile)}><img src={guest} alt="guest" className="img-fluid m-1 rounded-circle" width="32" height="32" /></button>
            }
          </li>
        </ul>

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
                        /*<a href="http://localhost:5000/auth/google" className="btn btn-primary btn-block text-center">Google Login</a>*/
                      }
                    </div>
                </div>
      }

      <div>
        <Modal show={showModal} onHide={() => setShowModal(!showModal)} animation={false} centered>
          <Modal.Body className="text-center">
            <h4>Please login first!</h4>
          </Modal.Body>
        </Modal>
      </div>

    </div>
  );
}


export default Navbar;
