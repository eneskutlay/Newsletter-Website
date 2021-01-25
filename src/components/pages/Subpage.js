import React from "react";
import Subimg from "../../assets/newsletter.svg";

class Subpage extends React.Component {
  render() {
    return (
      <div className="subpage">
        <div className="subme">
          <h1>{this.props.header}</h1>
          <input id="mailadress" type="email" placeholder="Mail Adresiniz" />
          <button id="sendbtn" className="button">
            Abone Ol
          </button>
        </div>
        <div className="subimg">
          <img src={Subimg} alt="subimage" />
        </div>
      </div>
    );
  }
}

export default Subpage;
