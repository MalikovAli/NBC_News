import React, { useState } from "react";
import initialNewsData from "./mockData.json";
import { Link } from "react-router-dom";

const Store = () => {
  const [newsList] = useState(initialNewsData);
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="store-section">


      <div className="store-boxes">
        <div className="store-grid-container">
          {newsList
            .filter((news) => Number(news.id) <= 16)
            .slice(0, visibleCount)
            .map((news, index) => (
              <div
                className={"store-box " + (index >= 2 ? "store-box-bottom" : "")}
                key={news.id}
              >
                <div className="store-box-heading">
                  <div className="store-card-image-box">
                    <img className="store-image" src={news.image} alt={news.title} />
                  </div>
                  <div className="store-content-boxes">
                    <h3 className="store-card-heading">

                      <Link to="/detail">{news.title}</Link>
                    </h3>
                    <p className="store-card-content1">{news.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {visibleCount < 16 && (
        <div className="store-button-box">
          <a
            className="store-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setVisibleCount((prev) => prev + 4);
            }}
          >
            View More
          </a>
        </div>
      )}
    </section>
  );
};

export default Store;