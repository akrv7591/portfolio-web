import {Route, Routes, useLocation} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/public/Home";
import Blogs from "../views/public/Blogs";
import Portfolio from "../views/public/Portfolio";
import React from "react";
import {animated, easings, useTransition} from "@react-spring/web";


const PublicRouter = () => {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: {transform: 'translate3d(100%,0,0)'},
    enter: {transform: 'translate3d(0%,0,0)'},
    leave: {transform: 'translate3d(-50%,0,0)'},
    exitBeforeEnter: true,
    config: {
      easing: easings.easeInSine
    }
  })
  return (
    <Layout>
      {transitions((style, item) => (<animated.div style={style}>
        <Routes location={item}>
          <Route index element={<Home/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
        </Routes>
      </animated.div>))}
    </Layout>
  );
};

export default PublicRouter;
