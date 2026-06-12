import React, { useState } from "react";

import "../css/Detail.css";

import initialNewsData from "./mockData.json";

import Footer from "./Footer";

import '../css/Footer.css';

const Detail = () => {
  const [newsList, setNewsList] = useState(initialNewsData);

  const [visibleCount, setVisibleCount] = useState(5);

  const handleViewMore = (e) => {
    e.preventDefault(); // Səhifənin yenilənməsinin qarşısını almaq üçün

    setVisibleCount((prevCount) => prevCount + 5);
  };

  // ID-lərinə görə dataları tapırıq

  const targetNews = newsList.find((news) => Number(news.id) === 17);

  const recommended = newsList.find((rec) => Number(rec.id) === 18);

  const crowds = newsList.find((crowds) => Number(crowds.id) === 19);

  const ada = newsList.find((ada) => Number(ada.id) === 20);

  const edmund = newsList.find((edmund) => Number(edmund.id) === 21);

  const newsletter = newsList.find(
    (newsletter) => Number(newsletter.id) === 22,
  ); // SƏHV DÜZƏLDİDİ:

  const comment = newsList.find((comment) => Number(comment.id) === 23);

  return (
    <section className="detail-section">
      <div className="detail-box">
        <div className="detail-heading-box">
          <h1 className="detail-heading">
            John Lewis, civil rights giant, crosses infamous Selma bridge one
            final time
          </h1>

          <div className="detail-image-box">
            <img
              className="detail-image"
              src="src/image/john-lewis.png"
              alt=""
            />
          </div>

          <div className="detail-content-boxes">
            

            <div className="detail-content-boxes1">
              <aside className="detail-icon-aside">
                <div className="detail-icon-box">
                  <div className="detail-hearth-icon-box">
                    <img className="hearth" src="src/image/hearth.svg" alt="" />

                    <span>28</span>
                  </div>

                  <div className="detail-message-icon-box">
                    <img
                      className="message"
                      src="src/image/message.svg"
                      alt=""
                    />

                    <span>21</span>
                  </div>

                  <div className="detail-download-icon-box">
                    <img
                      className="download"
                      src="src/image/download.svg"
                      alt=""
                    />
                  </div>

                  <div className="detail-save-icon-box">
                    <img className="save" src="src/image/save.svg" alt="" />
                  </div>
                </div>
              </aside>
            </div>

            <div className="detail-content-boxes2">
              {targetNews && (
                <div className="detail-content-box" key={targetNews.id}>
                  <div className="detail-author-box">
                    <span className="detail-time">{targetNews.timeAgo}</span>

                    <span className="detail-author">
                      By {targetNews.author}
                    </span>
                  </div>

                  <p className="detail-content1">{targetNews.detailContent1}</p>

                  <p className="detail-content2">{targetNews.detailContent2}</p>

                  <p className="detail-content3">{targetNews.detailContent3}</p>

                  <p className="detail-content4">{targetNews.detailContent4}</p>
                </div>
              )}

              <aside>
                {recommended && (
                  <div className="recommended-box">
                    <h3 className="recommended-heading">Recommended for you</h3>

                    <div className="recommended-image-box">
                      <img
                        className="recommended-image"
                        src={recommended.recommendedImage}
                        alt="Recommended"
                      />

                      <div className="recommended-content-box">
                        <p className="recommended-content">
                          {recommended.recommendedContent}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>

          <div className="solemn-crowds-boxes">
            {crowds && (
              <div className="solemn-crowds-box" key={crowds.id}>
                <div className="solemn-crowds-aside-box">
                  <div className="solemn-crowds-heading-box">
                    <h2 className="solemn-crowds-heading">
                      {crowds.solemnCrowdsHeading}
                    </h2>
                  </div>

                  <aside>
                    {ada && (
                      <div className="solemn-ada-box" key={ada.id}>
                        <h3 className="solemn-ada-heading">
                          {ada.solemnAdaHeading}
                        </h3>

                        <div className="solemn-ada-image-box">
                          <img
                            className="solemn-ada-image"
                            src={ada.solemnAdaImage}
                            alt=""
                          />

                          <div className="solemn-ada-content-box">
                            <p className="solemn-ada-content">
                              {ada.solemnAdaContent}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </aside>
                </div>

                <div className="solemn-image-box">
                  <img
                    className="solemn-image"
                    src={crowds.solemnImage}
                    alt=""
                  />

                  <p className="solemn-image-content">
                    {crowds.solemnImageContent1}

                    <span>{crowds.solemnImageContent2}</span>
                  </p>
                </div>

                <div className="solemn-crowds-content-boxes">
                  <div className="solemnContent1">{crowds.solemnContent1}</div>

                  <div className="solemnContent2">{crowds.solemnContent2}</div>

                  <div className="solemnContent3">{crowds.solemnContent3}</div>

                  <div className="solemnContent4">{crowds.solemnContent4}</div>

                  <div className="solemnContent5">{crowds.solemnContent5}</div>
                </div>
              </div>
            )}
          </div>

          <div className="edmund-pettus-boxes">
            {edmund && (
              <div className="edmund-pettus-box" key={edmund.id}>
                <div className="edmund-pettus-image-box">
                  <img
                    className="edmund-pettus-image"
                    src={edmund.edmundPettusImage}
                    alt=""
                  />

                  <p className="edmund-pettus-content">
                    {edmund.edmundPettusImageContent1}

                    <span>{edmund.edmundPettusImageContent2}</span>
                  </p>
                </div>

                <div className="edmund-pettus-content-boxes">
                  <div className="edmund-pettus-content1">
                    {edmund.edmundPettusContent1}
                  </div>

                  <div className="edmund-pettus-content2">
                    {edmund.edmundPettusContent2}
                  </div>

                  <div className="edmund-pettus-content3">
                    {edmund.edmundPettusContent3}
                  </div>
                </div>
              </div>
            )}
          </div>

          {newsletter && (
            <div className="newsletter-boxes">
              <div className="newsletter-box" key={newsletter.id}>
                <h2 className="newsletter-heading">
                  {newsletter.newsletterHeading}
                </h2>

                <p className="newsletter-content1">
                  {newsletter.newsletterContent1}
                </p>

                <p className="newsletter-content2">
                  {newsletter.newsletterContent2}
                </p>

                <div className="newsletter-button-box">
                  <img
                    className="newsletter-button-image"
                    src="src/image/message-box.svg"
                    alt=""
                  />

                  <a className="newsletter-link" href="">
                    Get this Newsletter
                  </a>
                </div>
              </div>

              <div className="nbcblk-boxes">
                <div className="nbcblk-box">
                  <p className="nbcblk-content">NBCBLK</p>
                </div>

                <div className="nbcblk-box">
                  <p className="nbcblk-content">Trending</p>
                </div>

                <div className="nbcblk-box">
                  <p className="nbcblk-content">Lewis</p>
                </div>

                <div className="nbcblk-box">
                  <p className="nbcblk-content">Freebie</p>
                </div>
              </div>
            </div>
          )}

          <div className="detail-author-box">
            <div className="detail-author-navbar">
              <div className="detail-hearth-left-boxes">
                <div className="detail-hearth-box">
                  <img
                    className="detail-hearth-image"
                    src="src/image/hearth-black.svg"
                    alt=""
                  />

                  <span className="hearth-content">28</span>
                </div>

                <div className="detail-message-box">
                  <img
                    className="detail-message-image"
                    src="src/image/message.svg"
                    alt=""
                  />

                  <span className="message-content">21 responses</span>
                </div>
              </div>

              <div className="detail-hearth-right-boxes">
                <div className="detail-download-image-box">
                  <img
                    className="detail-download-image"
                    src="src/image/download.svg"
                    alt=""
                  />

                  <span className="download-content">72</span>
                </div>

                <div className="detail-save-image-box">
                  <img
                    className="detail-save-image"
                    src="src/image/save.svg"
                    alt=""
                  />
                </div>

                <div className="detail-more-image-box">
                  <img
                    className="detail-more-image"
                    src="src/image/more.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="detal-border" />

          {comment && (
            <div className="detail-comment-box">
              <div className="detail-comment-image-box">
                <img
                  className="detail-comment-image"
                  src={comment.detailCommentImage}
                  alt=""
                />

                <div className="detail-comment-content-box">
                  <p className="detail-comment-subheading">Author</p>

                  <p className="detail-comment-heading">
                    {comment.detailCommentHeading}
                  </p>

                  <p className="detail-comment-content1">
                    {" "}
                    {comment.detailCommentContent1}
                    <span className="detail-comment-content2">
                      {comment.detailCommentContent2}
                    </span>
                    <span className="detail-comment-content3">
                      {comment.detailCommentContent3}
                    </span>
                  </p>
                </div>
              </div>

              <div className="detail-comment-button-box">
                <img
                  className="detail-comment-button-image"
                  src="src/image/twitter.svg"
                  alt=""
                />

                <span className="detail-button-content">Follow</span>
              </div>
            </div>
          )}

          <div className="topics-boxes">
            {newsList

              .filter((item) => Number(item.id) >= 24 && Number(item.id) <= 28) // Yalnız mövzuları seçirik

              .slice(0, visibleCount)

              .map((item) => (
                <div className="topics-boxes1" key={item.id}>
                  <h3 className="topics-heading">{item.topicsHeading}</h3>

                  <div className="topics-box">
                    <div className="topics-image-box">
                      <img
                        className="topics-image"
                        src={item.topicsImage}
                        alt="Topic"
                      />
                    </div>

                    <div className="topics-content-box">
                      <p className="topics-content">{item.topicsContent}</p>

                      <hr className="topics-line" />

                      <div className="topics-icon-box">
                        <div className="hearth-image-box">
                          <img src="src/image/hearth.svg" alt="heart" />

                          <span className="store-card-content3">28</span>
                        </div>

                        <div className="download-icon-box">
                          <img src="src/image/download.svg" alt="download" />

                          <span className="store-card-content3">72</span>
                        </div>

                        <div className="save-icon-box">
                          <img src="src/image/save.svg" alt="save" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Detail;
