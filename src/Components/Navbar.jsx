import React, { useEffect, useState } from 'react';
import image from '../assets/ssss.png';
import './Navbar.css'
const Navbar = ({setCategory}) => {

  const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentDateTime(now.toLocaleString());
        };

        const intervalId = setInterval(updateDateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

  return (
    <>
      <div className='navbar1'>
        <nav className="navbar">
          <div className="container rounded mx-auto mt-3 d-block">
            <a className="navbar-brand" href="#">
              <img src={image} className="rounded mx-auto d-block" alt="Bootstrap" width="600" height="150"/>
            </a>
          </div>
        </nav>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <nav class="navbar">
          <div class="container-fluid">
            <span class="navbar-text">
              Current Date and Time: {currentDateTime}
            </span>
          </div>
        </nav>
      </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-top border-bottom px-3 ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                  <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("general")}>General</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" onClick={()=>setCategory("Technology")}>Technology</div>
                  </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        
    </>
  )
}

export default Navbar;