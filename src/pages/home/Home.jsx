import React from "react";
import "./style.scss";

import TopBanner from "../../components/topbanner/TopBanner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home_page">
      <Helmet>
        {/* HTML Meta Tags */}
        <title>Home</title>
        <meta
          name="description"
          content="Check and improve how search engines and social media websites see and display your website."
        />
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Home" />
        <meta
          itemProp="description"
          content="Check and improve how search engines and social media websites see and display your website."
        />
        <meta itemProp="image" content="http://www.heymeta.com/img/meta_image.png" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.heymeta.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Check and improve how search engines and social media websites see and display your website."
        />
        <meta property="og:image" content="http://www.heymeta.com/img/meta_image.png" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home" />
        <meta
          name="twitter:description"
          content="Check and improve how search engines and social media websites see and display your website."
        />
        <meta name="twitter:image" content="http://www.heymeta.com/img/meta_image.png" />
        {/* Meta Tags Generated via http://heymeta.com */}
      </Helmet>

      <TopBanner pgName={"Home"} pgDesc={"This is home page description"} />
    </div>
  );
};

export default Home;
