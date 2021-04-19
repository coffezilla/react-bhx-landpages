import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// pages
import PageDefault from './pages/Default';
import PageNotFound from './pages/NotFound';

// banners
import PageBannerA from './pages/BannerA';
import PageBannerB from './pages/BannerB';
import PageBannerC from './pages/BannerC';
import PageBannerD from './pages/BannerD';
import PageBannerE from './pages/BannerE';
// import PageBannerF from './pages/BannerF';
// import PageBannerG from './pages/BannerG';
// import PageBannerH from './pages/BannerH';
// import PageBannerI from './pages/BannerI';
// import PageBannerJ from './pages/BannerJ';
// import PageBannerK from './pages/BannerK';
// import PageBannerL from './pages/BannerL';
// import PageBannerM from './pages/BannerM';
// import PageBannerN from './pages/BannerN';
// import PageBannerO from './pages/BannerO';
// import PageBannerP from './pages/BannerP';
// import PageBannerQ from './pages/BannerQ';
// import PageBannerR from './pages/BannerR';
// import PageBannerS from './pages/BannerS';
// import PageBannerT from './pages/BannerT';
// import PageBannerU from './pages/BannerU';
// import PageBannerV from './pages/BannerV';
// import PageBannerX from './pages/BannerX';
// import PageBannerZ from './pages/BannerZ';

// import PageBannerAA from './pages/BannerAA';
// import PageBannerAB from './pages/BannerAB';
// import PageBannerAC from './pages/BannerAC';
// import PageBannerAD from './pages/BannerAD';
// import PageBannerAE from './pages/BannerAE';
// import PageBannerAF from './pages/BannerAF';

class Routers extends Component {
    

    state = {  }

    render() { 
        return (
            <>
                <BrowserRouter basename={'/react'}>
                    <Switch>
                        <Route exact path="/" component={PageDefault} />
                        <Route exact path="/404" component={PageNotFound} />
                        
                        {/* banner */}
                        <Route exact path="/banner-a" component={PageBannerA} />
                        <Route exact path="/banner-b" component={PageBannerB} />
                        <Route exact path="/banner-c" component={PageBannerC} />
                        <Route exact path="/banner-d" component={PageBannerD} />
                        <Route exact path="/banner-e" component={PageBannerE} />
                        {/* <Route exact path="/banner-f" component={PageBannerF} /> */}
                        {/* <Route exact path="/banner-g" component={PageBannerG} /> */}
                        {/* <Route exact path="/banner-h" component={PageBannerH} /> */}
                        {/* <Route exact path="/banner-i" component={PageBannerI} /> */}
                        {/* <Route exact path="/banner-j" component={PageBannerJ} /> */}
                        {/* <Route exact path="/banner-k" component={PageBannerK} /> */}
                        {/* <Route exact path="/banner-l" component={PageBannerL} /> */}
                        {/* <Route exact path="/banner-m" component={PageBannerM} /> */}
                        {/* <Route exact path="/banner-n" component={PageBannerN} /> */}
                        {/* <Route exact path="/banner-o" component={PageBannerO} /> */}
                        {/* <Route exact path="/banner-p" component={PageBannerP} /> */}
                        {/* <Route exact path="/banner-q" component={PageBannerQ} /> */}
                        {/* <Route exact path="/banner-r" component={PageBannerR} /> */}
                        {/* <Route exact path="/banner-s" component={PageBannerS} /> */}
                        {/* <Route exact path="/banner-t" component={PageBannerT} /> */}
                        {/* <Route exact path="/banner-u" component={PageBannerU} /> */}
                        {/* <Route exact path="/banner-v" component={PageBannerV} /> */}
                        {/* <Route exact path="/banner-x" component={PageBannerX} /> */}
                        {/* <Route exact path="/banner-z" component={PageBannerZ} /> */}

                        {/* <Route exact path="/banner-aa" component={PageBannerAA} /> */}
                        {/* <Route exact path="/banner-ab" component={PageBannerAB} /> */}
                        {/* <Route exact path="/banner-ac" component={PageBannerAC} /> */}
                        {/* <Route exact path="/banner-ad" component={PageBannerAD} /> */}
                        {/* <Route exact path="/banner-ae" component={PageBannerAE} /> */}
                        {/* <Route exact path="/banner-af" component={PageBannerAF} /> */}

                        
                        <Redirect to="/404"></Redirect>

                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}
 
export default Routers;