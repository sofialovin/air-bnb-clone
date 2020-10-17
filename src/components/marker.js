import React from "react";
import './marker.css'

class Marker extends React.Component {
  render() {
    let classes = "marker";
    if (this.props.selected) {
      classes += "selected";
    }
    return (
      <div className="marker selected">
        {this.props.text}
      </div>
    );
  }
}

export default Marker;
