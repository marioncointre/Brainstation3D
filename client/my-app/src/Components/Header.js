import React from "react";
import "../styles/css/styles.css";

class Header extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">Logo</div>
        <div className="entrepreneurship">Enrepreneurship</div>
        <div className="firstjob">First Job</div>
        <div className="postgrad">Postgrad</div>
      </div>
    );
  }
}
export default Header;
