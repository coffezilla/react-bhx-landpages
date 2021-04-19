import React from 'react';
import '../bannerz/NavigationZ.scss';

function NavigationZ() {
  return <>
            <div className="component-nav-z">

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
                                        <a className="nav-link active" href="/">PRODUCTS <i className="bi bi-arrow-down-short"></i></a>
                                        <ul className="nav">
                                            <li className="nav-item"><a href="/" className="nav-link">Primeiro Segundo</a></li>
                                            <li className="nav-item"><a href="/" className="nav-link">Primeiro</a></li>
                                            <li className="nav-item"><a href="/" className="nav-link">Primeiro</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">SOLUTIONS <i className="bi bi-arrow-down-short"></i></a>
                                        <ul className="nav">
                                            <li className="nav-item"><a href="/" className="nav-link">Primeiro</a></li>
                                            <li className="nav-item"><a href="/" className="nav-link">Primeiro</a></li>
                                            <li className="nav-item"><a href="/" className="nav-link">Primeiro</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">CUSTOMERS <i className="bi bi-arrow-down-short"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">PLANS <i className="bi bi-arrow-down-short"></i></a>
                                    </li>
                                    
                                </ul> 

                            </div>

                            <div className="row navbar">

                                <ul className="nav col-auto align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link ml-3" href="/">Login</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link bt-primary--nav ml-4" href="/">GET STARTED</a>
                                    </li>
                                </ul> 

                            </div>

                        </div>
                    </nav>
                </div>


            </div>  
        </>;
}

export default NavigationZ;