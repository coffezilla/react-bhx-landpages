import React from 'react';
import '../bannerab/NavigationAB.scss';

function NavigationAB() {
  return <>
            <div className="component-nav-ab">
                <div className="container-lg-fluid container-lg">
                    <nav className="navbar py-1 px-0 px-md-3 py-md-4 justify-content-between">
                        <a className="navbar-brand" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>
                        
                        <div className="navbar">
                            <span className="navbar-text">THE LANDING PAGE CONVERSION COURSE</span>
                        </div>
                    </nav>
                </div>

            </div>       
        </>;
}

export default NavigationAB;