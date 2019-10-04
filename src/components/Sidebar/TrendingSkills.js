import React, { Component } from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

class TrendingSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showmore: false
    };
  }

  render() {
    const { showmore } = this.state;
    return (
      <Wrapper>
        <Top>
          <div className="text">TRENDING SKILLS</div>
        </Top>
        <List>
          <li>
            <a href="https://github.com/mikebpech">
              <div className="content">
                <span>1</span>
                <i className="fas fa-caret-up"></i>
                <img
                  src="https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png"
                  alt="github logo"
                />
                <div className="text">r/reactjs</div>
              </div>
              <div className="end">
                <Spring from={{ number: 0 }} to={{ number: 95 }}>
                  {props => <div>{Math.round(props.number)}%</div>}
                </Spring>
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mikexex">
              <div className="content">
                <span>2</span>
                <i className="fas fa-caret-up"></i>
                <img
                  src="https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png"
                  alt="linkedin logo"
                />
                <div className="text">r/nodejs</div>
              </div>
              <div className="end">
                {" "}
                <Spring from={{ number: 0 }} to={{ number: 85 }}>
                  {props => <div>{Math.round(props.number)}%</div>}
                </Spring>
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mikexex">
              <div className="content">
                <span>3</span>
                <i
                  style={{ color: "rgb(234, 0, 39)" }}
                  className="fas fa-caret-down"
                ></i>
                <img
                  src="https://pbs.twimg.com/profile_images/1146106967477379073/J3fzYcnz_400x400.png"
                  alt="mongodb logo"
                />
                <div className="text">r/mongodb</div>
              </div>
              <div className="end">
                {" "}
                <Spring from={{ number: 0 }} to={{ number: 90 }}>
                  {props => <div>{Math.round(props.number)}%</div>}
                </Spring>
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mikexex">
              <div className="content">
                <span>4</span>
                <i className="fas fa-caret-up"></i>
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
                  alt="css logo"
                />
                <div className="text">r/styling</div>
              </div>
              <div className="end">
                {" "}
                <Spring from={{ number: 0 }} to={{ number: 96 }}>
                  {props => <div>{Math.round(props.number)}%</div>}
                </Spring>
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mikexex">
              <div className="content">
                <span>5</span>
                <i
                  style={{ color: "rgb(234, 0, 39)" }}
                  className="fas fa-caret-down"
                ></i>
                <img
                  src="https://seeklogo.com/images/S/socketio-logo-B8A7F486CD-seeklogo.com.png"
                  alt="socketio logo"
                />
                <div className="text">r/socketio</div>
              </div>
              <div className="end">
                {" "}
                <Spring from={{ number: 0 }} to={{ number: 80 }}>
                  {props => <div>{Math.round(props.number)}%</div>}
                </Spring>
              </div>
            </a>
          </li>
          {showmore && (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {props =>
                viewmore.map(item => (
                  <li key={`${item.rank}-${item.img}`} style={props}>
                    <a href={item.link}>
                      <div className="content">
                        <span>{item.rank}</span>
                        <i className="fas fa-caret-up"></i>
                        <img src={item.img} alt="socketio logo" />
                        <div className="text">{item.text}</div>
                      </div>
                      <div className="end">
                        <Spring
                          from={{ number: 0 }}
                          to={{ number: item.percent }}
                        >
                          {props => <div>{Math.round(props.number)}%</div>}
                        </Spring>
                      </div>
                    </a>
                  </li>
                ))
              }
            </Spring>
          )}
        </List>
        <Button
          onClick={() =>
            this.setState(prevState => ({ showmore: !prevState.showmore }))
          }
        >
          <b>VIEW {showmore ? "LESS" : "MORE"}</b>
        </Button>
      </Wrapper>
    );
  }
}

const viewmore = [
  {
    key: 434,
    link: "",
    rank: 6,
    img:
      "data:image/png;base64,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",
    text: "r/restapi",
    percent: "85"
  },
  {
    key: 343,
    link: "",
    rank: 7,
    img:
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png",
    text: "r/express",
    percent: "80"
  },
  {
    key: 111,
    link: "",
    rank: 8,
    img:
      "data:image/png;base64,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",
    text: "r/typescript",
    percent: "75"
  },
  {
    key: 431,
    link: "",
    rank: 9,
    img:
      "https://i.pinimg.com/originals/cd/1e/b5/cd1eb5146f5151deae97879c5c0fdeb9.jpg",
    text: "r/tensorflow",
    percent: "70"
  },
  {
    key: 44331,
    link: "",
    rank: 10,
    img:
      "https://cdn-media-1.freecodecamp.org/images/1*-8AAdexfOAK9R-AIha_PBQ.png",
    text: "r/vuejs",
    percent: "65"
  }
];
export default TrendingSkills;

const Button = styled.div`
  padding: 12px;
  cursor: pointer;

  b {
    display: block;
    width: 100%;
    background-color: #d7dadc;
    border-color: #d7dadc;
    color: #1a1a1b;
    fill: #1a1a1b;
    border: 1px solid transparent;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 3px 16px;

    &:hover {
      background-color: #ebeced;
      border-color: #ebeced;
    }
  }
`;

const List = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    border-bottom: thin solid #343536;

    a {
      text-decoration: none;
      -ms-flex-align: center;
      align-items: center;
      display: -ms-flexbox;
      display: flex;
      height: 48px;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 12px;

      .content {
        align-items: center;
        display: -ms-flexbox;
        display: flex;

        span {
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          color: #d7dadc;
          text-align: right;
          width: 20px;
        }

        i {
          color: rgb(70, 209, 96);
          height: 20px;
          font-size: 16px;
          margin-left: 8px;
          width: 10px;
          display: flex;
          align-items: center;
        }

        img {
          object-fit: cover;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: 100%;
          border-radius: 24px;
          box-sizing: border-box;
          -ms-flex: none;
          flex: none;
          height: 32px;
          margin: 0 8px;
          width: 32px;
          background-color: rgb(0, 121, 211);
          vertical-align: middle;
        }

        .text {
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          display: flex;
          color: #d7dadc;
        }
      }
      .end {
        color: #818384;
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 16px;
  background-color: #1a1a1b;
  color: #d7dadc;
  fill: #d7dadc;
  border: thin solid #343536;
  border-radius: 5px 5px 4px 4px;
  overflow: visible;
  word-wrap: break-word;
`;

const Top = styled.div`
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 12px;
    text-transform: uppercase;
    background-color: #1A1A1B;
    border-radius: 4px 4px 0 0;
    color: #818384;
    display: -ms-flexbox;
    display: flex;
    fill: #818384;
    padding: 0 12px;

    .text {
        padding: 12px 0;
    }
    }

    h2 {
        font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    bottom: 8px;
    margin: 0;
    color: #fff;
    left: 16px;
    position: absolute;
    }

`;
