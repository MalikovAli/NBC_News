import React, { useState } from "react";
import initialNewsData from "./mockData.json";

const Editor = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="editor-section">
      <div className="editor-heading-box">
        <h2 className="editor-heading">Editor’s Picks</h2>
      </div>

      {/* Track olduğu kimi qalır, ölçülərə dəymirik */}
      <div className="editor-slider-wrapper">
        <div
          className="editor-track"
          style={{ transform: `translateX(-${activeIndex * 25}%)` }}
        >
          {initialNewsData.slice(8, 16).map((news) => (
            <div className="editor-box" key={news.id}>
              <div
                className="editor-image-box"
                style={{ backgroundImage: `url(${news.image})` }}
              >
                <div className="editor-card-footer">
                  <span className="editor-card-content3">
                    {news.likes} Likes
                  </span>
                  <span className="editor-card-content3">
                    {news.shares} Shares
                  </span>
                </div>
              </div>
              <div className="editor-image-content-box">
                <h2 className="editor-image-heading">{news.title}</h2>
                <p className="editor-image-content">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="editor-line-box">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={i === activeIndex ? "editor-line1" : "editor-line"}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Editor;
