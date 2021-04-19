import React from 'react';
import '../bannerv/NavigationV.scss';

function NavigationV() {
  return <>
            <div className="component-nav-v">

            <div className="container-lg-fluid container-lg p-0">
                    <nav className="navbar navbar-expand-md px-4 px-md-3 px-lg-0 py-0 py-md-4  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                            <div className="row navbar mx-1">

                                <ul className="nav col-auto align-items-center">
 
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">NEWS</a>
                                    </li>
                                    
                                </ul> 

                            </div>

                        </div>
                    </nav>
                </div>
                
            </div>        
        </>;
}

export default NavigationV;