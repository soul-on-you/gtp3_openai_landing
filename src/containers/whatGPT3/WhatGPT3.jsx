import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="wgpt3 section__margin" id="wgpt3">
      <div className="wgpt3__feature">
        <Feature
          className="wgpt3__features__container"
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>

      <div className="wgpt3__title">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          <a href="#wgpt3">Explore The Library</a>
        </p>
      </div>

      <div className="wgpt3__cards">
        <Feature
          className="wgpt3__features__container"
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />

        <Feature
          className="wgpt3__features__container"
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />

        <Feature
          className="wgpt3__features__container"
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
