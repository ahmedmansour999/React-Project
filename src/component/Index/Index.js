import React from "react";

import Footer from "../Footer/Index";
import Portfolio from "../Portofolio/Index";
import Home from "../Home/Index";
import Work from "../Work/Index";
import SocialMedia from "../SocialMedia/Index";
import Skills from "../profile";
import Creative from "../creative";

function Index() {
  return (
    <div>
      <Home />
      <Work />
      <Portfolio />
      <Skills/>
      <Creative/>
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Index;
