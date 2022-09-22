import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__margin" id="possibility">
      <div className="possibility__image">
        <img src={possibility} alt="possibility" />
      </div>

      <div className="possibility__description">
        <h6>Request Early Access to Get Started</h6>

        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        
        <p>
          <a href="#possibility">Request Early Access to Get Started</a>
        </p>
      </div>
    </div>
  );
};

export default Possibility;
