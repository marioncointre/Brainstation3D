import React from "react";
// import ReactWordcloud from "react-wordcloud";
import entrepreneuship from "../styles/images/Enterpren.png";
import studies from "../styles/images/Studies.png";
import job from "../styles/images/Job.png";

class Top extends React.Component {
  render() {
    return (
      <div className="top__section">
        <div className="top__title">Title</div>
        <img src={entrepreneuship} />
        <img src={studies} />
        <img src={job} />
      </div>
    );
  }
}
export default Top;
