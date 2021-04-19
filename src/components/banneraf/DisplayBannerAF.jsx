import React from 'react';
import '../banneraf/DisplayBannerAF.scss';

function DisplayBannerAF() {
  return <>
            <div className="display-banner-af py-0 py-md-2 py-lg-5">
                <div className="container-fluid container-lg">
                    <div className="row justify-content-around">

                        <div className="col-12 col-md-6 mx-auto py-3 py-md-0">
                            <h1 className="my-1">Your deserve more beautiful lists</h1>
                            <p className="my-3 my-md-4">Whatever work means for you, Slack brings all the pieces and people you need together so you can actually get things done.</p>
                            <button className="bt-primary">Discover</button>
                        </div>

                        <div className="col-12 col-md-6 col-lg-5 py-3 py-md-0">
                            <form action="/" className="form-signup--banner">
                                <div className="wrapper-signup p-4 p-md-4">
                                    <h2 className="pb-2">Download the eBook, for free!</h2>
                                    <p className="my-2">Simply fill out your details below to grab your copy of the eBook.</p>
                                    <div className="my-4">
                                        <input type="text" placeholder="Your Name"/>
                                        <input type="email" placeholder="Your Email"/>
                                        <input type="text" placeholder="Job title"/>
                                        <input type="text" placeholder="Company"/>
                                    </div>
                                    <p className="my-2"><span>We don’t spam or give your email address away.</span></p>
                                </div>
                                <button className="">Download the eBook</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerAF;