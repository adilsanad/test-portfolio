import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout";
import Cyclo from "./projects/Cyclo";
import { useEffect, useState } from "react";
import { HashRouter, useLocation } from "react-router";
import AAIWebapp from "./projects/AAIWebapp";
import AAIWebsite from "./projects/AAIWebsite";
import Pagr from "./projects/Pagr";

const AppRoutes = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(userAgent));
  }, []);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      // Only scroll to top if it's not a hash link navigation (which starts with #)
      if (!location.hash) {
        window.scrollTo(0, 0);
      }
    }, [location]);

    return null;
  };

  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <Layout isMobile={isMobile}>
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/cyclo" element={<Cyclo isMobile={isMobile} />} />
          <Route path="/aai-webapp-revamp" element={<AAIWebapp isMobile={isMobile}/>} />
          <Route path="/aai-website-refresh" element={<AAIWebsite isMobile={isMobile}/>}/>
          <Route path="/pagr" element={<Pagr isMobile={isMobile}/>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default AppRoutes;
