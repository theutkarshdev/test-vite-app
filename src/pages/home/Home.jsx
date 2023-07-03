import React from "react";
import "./style.scss";

import TopBanner from "../../components/topbanner/TopBanner";
import { Helmet } from "react-helmet";
import Google from "./Google";

const Home = () => {
  return (
    <div className="home_page">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TopBanner pgName={"Home"} pgDesc={"This is home page description"} />
    </div>
  );
};

export default Home;
