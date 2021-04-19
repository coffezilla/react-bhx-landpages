import React from 'react';
import '../bannerd/NavigationD.scss';
import imgLogo from '../../images/logo-white.png';

function NavigationD() { 
  return <>
            <div className="component-nav-d">

                

                
            <div className="container-fluid p-0">
                    <nav className="navbar navbar-expand-lg px-3 px-lg-5 py-0 py-md-2 py-lg-4  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-lg-0" href="/"><img src={imgLogo} alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                            <div className="row navbar mx-1">

                                <ul className="nav col-auto align-items-center">

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Integrations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bt-secondary--nav ml-3" href="/">LOGIN</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link bt-primary--nav ml-4" href="/">START FOR FREE</a>
                                    </li>

                                </ul> 

                            </div>


                        </div>
                    </nav>
                </div>

            </div>  
        </>;
}

export default NavigationD;