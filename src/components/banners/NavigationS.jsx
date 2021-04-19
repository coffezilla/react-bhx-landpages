import React from 'react';
import '../banners/NavigationS.scss';

function NavigationS() {
  return <>
            <div className="component-nav-s">

                <div className="container-lg-fluid container-xl p-0">
                    <nav className="navbar navbar-expand-lg px-4 px-lg-3 px-lg-0 py-0 py-lg-1 justify-content-between">
                        
                        <a className="navbar-brand py-3 py-lg-0 d-block d-lg-none" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">


                            <div className="row navbar mx-1">

                                <ul className="nav col-auto align-items-center justify-content-between">
                                    <li className="nav-item d-none d-lg-block">
                                        <a className="navbar-brand" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">FEATURES</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">FREE TEST</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">LOGIN</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bt-primary--nav" href="/">GET THE LINK</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">LANGUAGE</a>
                                    </li>
                                </ul> 

                            </div>

                        </div>
                    </nav>
                </div>

            </div>        
        </>;
}

export default NavigationS;