import React from 'react';
import '../bannerp/NavigationP.scss';

function NavigationP() {
  return <>
            <div className="component-nav-p">
                <div className="container-lg-fluid container-lg">
                    <nav className="navbar py-1 px-0 px-md-3 py-md-4 justify-content-between">
                        <a className="navbar-brand" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>
                        
                        <ul className="nav align-items-center">
                            <li>
                                <div className="navbar-text">Ready to take it to the next level?</div>
                            </li>
                            <li className="nav-item ml-3">
                                <a className="nav-link bt-nav-primary" href="/">Get the Pro Version</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>      
        </>;
}

export default NavigationP;