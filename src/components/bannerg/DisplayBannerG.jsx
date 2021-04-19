import React from 'react';
import '../bannerg/DisplayBannerG.scss';

function DisplayBannerG() {
  return <>
            <div className="display-banner-g py-0 py-md-2 py-xl-5">
                <div className="container">
                    <div className="row justify-content-center py-md-2 py-lg-5">
                        <div className="col-12 col-md-6 py-3 py-md-0">
                            <h2>GUARDIAN MOBILE FIREWALL</h2>
                            <h1 className="my-1">Your deserve more beautiful lists</h1>
                            <p className="my-1 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>

                            <form action="/" className="form-signup--banner row m-0 my-4 my-md-0">
                                <input className="col-7" placeholder="Your email" type="email"/>
                                <button className="col col-md-auto">Submit</button>
                            </form>
                        </div>

                        <div className="col-auto mx-auto">
                            <img src="/images/iphone-portrait.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerG;