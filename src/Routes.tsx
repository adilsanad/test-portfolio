import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout";
import Template from "./projects/Template";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cyclo" element={<Template />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
