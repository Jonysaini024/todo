import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';


function Navbar(props) {

  const { user, logout } = useContext(AuthContext);




  // const { user } = useContext(AuthContext);
  // const getlocaluse = () => {
  //   localStorage.removeItem("todouser")
  // }


  // const [user, setUser] = useState(null);

  // useEffect(()=>{},[])


  // const logout = () => {
  //   localStorage.removeItem("todouser")
  // }

  //json to object - json.parse(json object)
  //object to json - json.stringify( data object)




  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-white" aria-label="Fifth navbar example">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="todo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              !user ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                </> :
                <>
                  <li className="nav-item" >
                    <Link className="nav-link" to="/create-task" >create Task
                    </Link></li>
                  <li className="nav-item" >
                    <Link className="nav-link" to="/task-list" >TaskList
                    </Link></li>
                 
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">profile</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="dropdown-item" onClick={logout}>Logout</Link>
                  </li>
                

                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">{user.name}</Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="#">Action</Link></li>
                      <li><Link className="dropdown-item" to="#">Another action</Link></li>
                      <li><span className="dropdown-item" onClick={logout}>Logout</span></li>
                    </ul>
                  </li>

                </>
            }
          </ul>

          <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>

        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;