import React, { Component } from "react";
import "./styles.css";

class DayMeal extends Component {
  render() {
    return (
      <div className={this.props.visible}>
        <hr />
        <div>
          <span>{this.props.catName}</span>는 하루에
          <br /> <span>{Math.floor(this.props.dayMeal*100)/100}g</span>의 사료를 섭취하면 좋겠어요!
        </div>
        <hr />
      </div>
    );
  }
}

export default DayMeal;
