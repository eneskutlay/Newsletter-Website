import React from "react";
import Subpage from "./pages/Subpage";


class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Subpage header="Junior Aranıyor" />
      </div>
    );
  }
}

export default Homepage;
