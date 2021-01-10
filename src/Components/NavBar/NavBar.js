import React, {useState} from 'react'
import './NavBar.scss';
import { Link } from 'react-router-dom'

function NavBar() {
    function CanShow (){
   
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm mb-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li id="liDashboard"><Link to="/"><a href="" className="nav-link"><i className="fas fa-tachometer-alt"></i>&nbsp; Dashboard</a></Link></li>
                        
                        { !CanShow() && <li id="liMaster" className="dropdown">
                            <a className="dropdown-toggle nav-link" href="#" id="navbardrop" data-toggle="dropdown"><i className="fas fa-landmark"></i>&nbsp; Masters
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/userDetails/list" className="dropdown-item">User Details</Link></li>
                               
                            </ul>
                        </li>
                        }
                       
                        
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a id="LinkButton1" className="nav-link" href="#"><i className="fas fa-home"></i>&nbsp; Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href=""><i className="fas fa-sign-out-alt"></i>&nbsp; Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
