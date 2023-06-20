import React from "react";
import "./style.scss";

import TopBanner from "../../components/topbanner/TopBanner";

const Home = () => {
  return (
    <div className="home_page">
      <TopBanner pgName={"Home"} pgDesc={"This is home page description"}/>
    </div>
  );
};

export default Home;
