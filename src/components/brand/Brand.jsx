import "./brand.css";

import { atlassian, dropbox, google, shopify, slack } from "./imports";

import React from "react";

const Brand = () => {
  return (
    <div className="gpt3__brand section-padding">
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="DropBox" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
