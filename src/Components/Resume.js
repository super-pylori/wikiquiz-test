import React, { Component } from "react";
import Slide from "react-reveal";
import Data from '../python/data.json';

const wikiList = Data.data.wiki;

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  returnQuestion = () => {
    return 
      <span>Question 12</span>
  }

  render() {
    if (!this.props.data) return null;

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                {returnQuestion()}
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p>{wikiList[0].text}</p>
                  <a href={wikiList[0].url}>
                    → 答えはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Question 2</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p>{wikiList[1].text}</p>
                  <a href={wikiList[1].url}>
                    → 答えはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Question 3</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p>{wikiList[2].text}</p>
                  <a href={wikiList[2].url}>
                    → 答えはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Question 4</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p>{wikiList[3].text}</p>
                  <a href={wikiList[3].url}>
                    → 答えはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Question 5</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p>{wikiList[4].text}</p>
                  <a href={wikiList[4].url}>
                    → 答えはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Question 6</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p>{wikiList[5].text}</p>
                  <a href={wikiList[5].url}>
                    → 答えはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
