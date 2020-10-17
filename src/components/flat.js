import React from "react";
import "./flat.css";



class Flat extends React.Component {
  handleClick = () => {
    // we call the parent method selectFlat
    this.props.selectFlat(this.props.flat);
  }
  render() {
    const title = this.props.flat.price + this.props.flat.priceCurrency + " - " + this.props.flat.name;
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };
    // interpolations need to be refactored
    // const title = PRICE + NAME;
    // we assume that we will get the info into the react app from an API, in a JSON format
    return (
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}> </div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
