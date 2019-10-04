import React, { Component } from "react";
import styled from "styled-components";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      loading: false
    };
  }
  render() {
    const { logs } = this.state;
    return (
      <News>
        {fakelogs.map(item => (
          <NewsItem key={item.subject}>
            <div className="sidebar">
              <div className="arrows">
                <i class="fas fa-arrow-alt-up"></i>
                <b>{item.votes}</b>
                <i class="fas fa-arrow-alt-down"></i>
              </div>
            </div>
            <div className="main-content">
              <div className="header">
                <i className={item.icon}></i>
                {item.subject}
                <span>· Posted by u/mikex</span>
              </div>
              <div className="post-title">
                <h3 className="title">{item.title}</h3>
              </div>
              <div className="body">
                <div className="body-text">
                  <p>{item.body}</p>
                  <p>{item.body}</p>
                  <p>{item.body}</p>
                  <p>{item.body}</p>
                </div>
                <div className="body-image">
                    <img src={item.image} alt=""/>
                </div>
              </div>
              <div className="body-buttons">
                <div className="buttons">
                  <div className="button">
                    <i className="fas fa-comments-alt"></i>
                    2.8k Comments
                  </div>
                  <div className="button">
                  <i className="fas fa-award"></i>
                    Give Award
                  </div>
                  <div className="button">
                  <i className="fas fa-share"></i>

                    Share
                  </div>
                  <div style={{minWidth: '0'}} className="button">
                  <i style={{margin: "0"}} className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
              </div>
            </div>
          </NewsItem>
        ))}
      </News>
    );
  }
}

export default NewsFeed;

const fakelogs = [
  {
    subject: "r/twatter",
    title: "Twatter - Working Twitter Clone",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores ratione officia architecto facere, accusantium doloremque ullam a voluptates quibusdam, temporibus tempore dolore praesentium possimus beatae ex ipsa quia veritatis.",
    votes: 54,
    icon: "fab fa-twitter",
    image: "https://static.wixstatic.com/media/308ab5_04a5d5981d6b4818aa02e60f24fe316a~mv2_d_2000_2000_s_2.png/v1/fill/w_644,h_404,al_c,q_80,usm_0.66_1.00_0.01/Full-color-1.webp"
  },
  {
    subject: "r/playerrecognition",
    title: "Player Recognition - Verified Stat Platform",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores ratione officia architecto facere, accusantium doloremque ullam a voluptates quibusdam, temporibus tempore dolore praesentium possimus beatae ex ipsa quia veritatis.",
    votes: 232,
    icon: "fas fa-football-helmet",
    image: "https://i.gyazo.com/6acbd8f302cb007971be06b26de68143.jpg"
  },
  {
    subject: "r/playerrecognition",
    title: "Player Recognition - Verified Stat Platform",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores ratione officia architecto facere, accusantium doloremque ullam a voluptates quibusdam, temporibus tempore dolore praesentium possimus beatae ex ipsa quia veritatis.",
    votes: 232,
    icon: "fas fa-football-helmet",
    image: "https://i.gyazo.com/6acbd8f302cb007971be06b26de68143.jpg"
  },
  {
    subject: "r/playerrecognition",
    title: "Player Recognition - Verified Stat Platform",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores ratione officia architecto facere, accusantium doloremque ullam a voluptates quibusdam, temporibus tempore dolore praesentium possimus beatae ex ipsa quia veritatis.",
    votes: 232,
    icon: "fas fa-football-helmet",
    image: "https://i.gyazo.com/6acbd8f302cb007971be06b26de68143.jpg"
  },
  {
    subject: "r/playerrecognition",
    title: "Player Recognition - Verified Stat Platform",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores ratione officia architecto facere, accusantium doloremque ullam a voluptates quibusdam, temporibus tempore dolore praesentium possimus beatae ex ipsa quia veritatis.",
    votes: 232,
    icon: "fas fa-football-helmet",
    image: "https://i.gyazo.com/6acbd8f302cb007971be06b26de68143.jpg"
  }
];

const News = styled.div`
  height: 100%;
  width: 640px;
`;

const NewsItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.5s, fill 0.5s, box-shadow 0.5s;
  border: 1px solid #343536;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: rgba(26, 26, 27, 0.8);
  color: #818384;
  position: relative;
  border-radius: 4px;
  border: 1px solid #343536;
  padding-left: 40px;

  &:hover {
    border: 1px solid #818384;
  }

  .sidebar {
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    left: 0;
    padding: 8px 4px 8px 0;
    position: absolute;
    top: 0;
    width: 40px;

    .arrows {
      -ms-flex-align: center;
      align-items: center;
      box-sizing: border-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 100%;
      left: 0;
      padding: 8px 4px 8px 0;
      position: absolute;
      top: 0;
      border-left: 4px solid transparent;
      width: 100%;

      i {
        &:hover {
          color: #fb4503;
        }
      }

      b {
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        pointer-events: none;
        word-break: normal;
        color: #d7dadc;
        padding: 5px 0;
      }
    }
  }

  .main-content {
    width: 100%;
    background: rgb(26, 26, 27);
    padding-top: 8px;
    position: relative;

    .body-buttons {
      -ms-flex-align: center;
      align-items: center;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: row;
      flex-direction: row;
      padding-right: 10px;
      overflow-y: visible;
      .buttons {
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        -ms-flex-align: center;
        align-items: center;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        height: 32px;
        padding: 0 8px 0 4px;
        -ms-flex-positive: 1;
        flex-grow: 1;

        .button {
          display: flex;
          align-items: center;
          margin-right: 4px;
    min-width: 25px;
    white-space: nowrap;
    word-break: normal;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    padding: 5px;

    i {
      margin-right: 5px;
    }

    &:hover {
      background-color: rgba(215,218,220,0.1);
    outline: none;
    }
        }
      }
    }

    .body {
      max-height: 250px;
      -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
      mask-image: linear-gradient(180deg, #000 60%, transparent);
      overflow: hidden;
      padding: 5px 8px 10px;

      display: flex;

      .body-image {
        width: 600px;
        height: 150px;
        padding: 0 20px;
        align-self: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: 1px solid #818384;

        }
      }

      .body-text {
        font-family: "Noto Sans", Arial, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        word-break: break-word;
        overflow-y: hidden;
        padding-bottom: 1px;
        margin-bottom: -1px;
        color: rgb(215, 218, 220);

        p {
          padding: 0 0 0.25em;
        }
      }
    }

    .post-title {
      margin: 0 8px;

      .title {
        position: relative;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        word-break: break-word;
        display: inline;
        padding-right: 5px;
        word-wrap: break-word;
        color: #d7dadc;
      }
    }

    .header {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      margin: 0 8px 8px;
      position: relative;
      color: #fff;

      span {
        margin-left: 5px;
        color: #818384;
      }

      i {
        color: #fff;
        font-size: 12px;
        margin-right: 6px;
      }
    }
  }
`;
