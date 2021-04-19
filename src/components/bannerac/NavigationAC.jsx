import React from 'react';
import '../bannerac/NavigationAC.scss';

function NavigationAC() {
  return <>
            <div className="component-nav-ac">
                <div className="container-lg-fluid container-lg p-0">
                    <nav className="navbar navbar-expand-lg px-4 px-md-3 px-lg-0 py-0 py-md-4  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                            <div className="row navbar">

                                <ul className="nav col-auto align-items-center">

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Integrations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Integrations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Integrations</a>
                                    </li>
                                </ul> 

                            </div>

                            <div className="row navbar">

                                <ul className="nav col-auto align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link ml-3" href="/">Login</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link bt-primary--nav ml-4" href="/">Sign Up</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link ml-3" href="/"><i className="bi bi-twitter"></i> <span className="d-inline d-md-none">Twitter</span> </a>
                                    </li>
                                </ul> 

                            </div>

                        </div>
                    </nav>
                </div>


{/* 


                <div className="container-lg-fluid container-lg">
                    <nav className="navbar px-0 px-md-1 py-md-2 justify-content-between">

                        <ul className="nav align-items-center">

                            <li className="nav-item">
                                <a className="navbar-brand" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Integrations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Integrations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Integrations</a>
                            </li>
                         
                        </ul>

                        <ul className="nav align-items-center">

                            <li className="nav-item">
                                <a className="nav-link ml-3" href="/">Login</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link bt-primary--nav ml-4" href="/">Sign Up</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link ml-3" href="/"><i className="bi bi-twitter"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div> */}
            </div>  
        </>;
}

export default NavigationAC;