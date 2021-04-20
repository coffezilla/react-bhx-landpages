import React from 'react';
import '../bannerc/NavigationC.scss';
import Logo from '../../images/logo.png';

function NavigationC() {
  return <>
            <div className="component-nav-c">
                <div className="container-fluid p-0 px-md-5">
                    <nav className="navbar navbar-expand-md px-4 px-md-3 px-lg-0 py-2 py-md-2 py-lg-4  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0" href="/"><img src={Logo} alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between ml-0 ml-md-3" id="navbar-primary">

                            <div className="row navbar">

                                <ul className="nav col-auto align-items-center">

                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">Features</a>
                                    </li>
                                    <li className="nav-item d-none d-md-block">
                                        <span className="navbar-brand" href="/">/</span>
                                    </li>                                
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">Apps</a>
                                    </li>
                                    <li className="nav-item d-none d-md-block">
                                        <span className="navbar-brand" href="/">/</span>
                                    </li>                                
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Blog</a>
                                    </li>
                                </ul> 

                            </div>

                            <div className="row navbar">

                                <ul className="nav col-auto align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Sign In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bt-primary--nav ml-3" href="/">Download</a>
                                    </li>
                                </ul> 

                            </div>

                        </div>
                    </nav>
                </div>
            </div>

        </>;
}

export default NavigationC;