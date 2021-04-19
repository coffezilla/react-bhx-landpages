import React from 'react';
import '../bannero/DisplayBannerO.scss';

function DisplayBannerO() {
  return <>
            <div className="display-banner-o">
                <div className="container-fluid container-lg">
                    <div className="row justify-content-between">

                        <div className="col-12 order-2 order-md-1 col-lg-5 mx-auto wrapper-bannner--cover"></div>

                        <div className="col-12 order-1 order-md-2 col-lg-7 text-center py-2 py-md-5">
                            <h1 className="my-3">B-School is sold out. <br/><span>But we got you!</span></h1>

                            <p>Get our list of 322+ FREE Tools & Resources to start and grow your dream business today - plus weekly tools, strategies and motivation.</p>
                            <form action="/" className="form-banner--signup my-4">
                                <div className="row align-items-center no-gutters justify-content-center mb-4">
                                    <div className="col-12 col-md-auto  m-1"><input type="text" placeholder="first name"/></div>
                                    <div className="col-12 col-md-auto  m-1"><input type="text" placeholder="email address"/></div>
                                    <div className="col-12 col-md-auto  m-1"><button>JOIN THE WAITLIST!</button></div>
                                </div>
                                <p>We’ve helped over <strong>55,000</strong> entrepreneurs make <br/>their dream business a reality.</p>
                                <p><span>We’d love to help you, too.</span></p>
                                <p><i className="bi bi-arrow-down-short"></i></p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerO;