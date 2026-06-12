import React from "react";

const Trending = () => {
  return (
    <section>
      <div className="trending-box">
        <div className="trending-image-box">
          <img className="trending-image" src="src/image/lemon.png" alt="" />
        </div>
        <div className="trending-content-boxes">
          <h5 className="trending-sub-heading">Trending</h5>
          <h2 className="trending-heading">
            Cake meme reflects coronavirus absurdity in a world where nothing is
            what it seems
          </h2>
          <p className="trending-content">
            Earlier this month, a viral video depicting hyper-realistic cakes as
            everyday items had folks on social media double-guessing every other
            post, and sometimes even their own realities, effectively launching
            the next meme : “Is this real or is this cake?”
          </p>
          <div className="trending-content-box">
            <span className="trending-content1">2 hours ago</span>
            <span className="trending-content2">
              By Lucy Hiddleston | 4min read
            </span>
          </div>
        </div>
      </div>
      <div className="breaking-news-box">
        <div className="breaking-news-button-box">
          <a className="breaking-news-link">Breaking News</a>
        </div>
        <p className="breaking-news-content">Kanye West says he's running for president in 2020.</p>
      </div>
    </section>
  );
};

export default Trending;
