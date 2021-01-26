import React from "react";
import Mockup from "../../assets/mockup.svg"

class İnfo extends React.Component {
  render() {
    return (
      <div className="info">
        <div className="mockup">
          <img src={Mockup} alt="mockup design" />
        </div>
        <div className="about">
          <h3>Nasıl Çalışır</h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default İnfo;
