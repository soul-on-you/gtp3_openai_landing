import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog__title">
        <h1 className="gradient__text">
          A lot is happening, <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="blog__container">
        <div className="blog__container__main">
          <Article
            image={blog1}
            url={"#blog"}
            date={"26.09.2021"}
            description={
              "GPT-3 and Open  AI is the future. Let us exlore how it is?"
            }
          />
        </div>
        <div className="blog__container__secondary">
          <Article
            image={blog2}
            url={"#blog"}
            date={"26.09.2021"}
            description={
              "GPT-3 and Open  AI is the future. Let us exlore how it is?"
            }
          />
          <Article
            image={blog3}
            url={"#blog"}
            date={"26.09.2021"}
            description={
              "GPT-3 and Open  AI is the future. Let us exlore how it is?"
            }
          />
          <Article
            image={blog4}
            url={"#blog"}
            date={"26.09.2021"}
            description={
              "GPT-3 and Open  AI is the future. Let us exlore how it is?"
            }
          />
          <Article
            image={blog5}
            url={"#blog"}
            date={"26.09.2021"}
            description={
              "GPT-3 and Open  AI is the future. Let us exlore how it is?"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
