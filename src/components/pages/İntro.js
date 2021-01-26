import React from "react";


class İntro extends React.Component {
  render() {
    return (
        <div className="intro">
          <h2>{this.props.header}</h2>
          <h3>{this.props.short}</h3>
        </div>
    );
  }
}

export default İntro;
