import React from "react";
import Mockup from "../../assets/mockup.svg";

class İnfo extends React.Component {
  render() {
    return (
      <div className="info">
        <div className="mockup">
          <img src={Mockup} alt="mockup design" />
        </div>
        <div className="about">
          <h3>Nasıl Çalışır</h3>
          <p>
           (test) Tek yapmanız gereken aktif olarak kullandığınız mail adresiniz ile
            bültene abone olmak. Ardından araknıza yaslanın ve her ayın onbeşi ve son gününü bekleyin.
          </p>
        </div>
      </div>
    );
  }
}

export default İnfo;
