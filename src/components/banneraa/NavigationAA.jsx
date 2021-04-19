import React from 'react';
import '../banneraa/NavigationAA.scss';

function NavigationAA() {
  return <>
            <div className="component-nav-aa">

            <div className="container-lg-fluid container-lg p-0">
                    <nav className="navbar navbar-expand-md px-4 px-md-3 px-lg-0 py-0 py-md-4  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0 d-block d-md-none" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                            <a className="navbar-brand py-2 py-md-0 d-none d-md-block" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>                        
                            
                            <div className="row navbar mx-1">

                                <ul className="nav col-auto align-items-center">

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Support</a>
                                    </li>
                                </ul> 

                            </div>

                            <div className="row navbar mx-1">

                                <ul className="nav col-auto align-items-center">
                                    <li className="nav-item ml-0 ml-md-3">
                                        <a className="nav-link bt-primary--nav" href="/">Sign In</a>
                                    </li>
                                </ul> 

                            </div>

                        </div>
                    </nav>
                </div>




                {/* <div className="container-lg-fluid container-lg">
                    <nav className="navbar py-1 px-0 px-md-3 py-md-4 justify-content-between">
                        <a className="navbar-brand" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>
                        
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Support</a>
                            </li>
                        </ul>

                        <ul className="nav align-items-center">
                            <li className="nav-item ml-3">
                                <a className="nav-link bt-primary--nav" href="/">Sign In</a>
                            </li>
                        </ul>
                    </nav>
                </div> */}
            </div>       
        </>;
}

export default NavigationAA;