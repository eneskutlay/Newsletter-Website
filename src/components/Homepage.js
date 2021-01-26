import React from "react";
import Subpage from "./pages/Subpage";
import İntro from "./pages/İntro";
import İnfo from "./pages/İnfo"


class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Subpage header="Junior Aranıyor" />
        <İntro header="Ayda İki Kez" short="Mail kutunu kontrol etmeyi unutma !" />
        <İnfo />
      </div>
    );
  }
}

export default Homepage;
