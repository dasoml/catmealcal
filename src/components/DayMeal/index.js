import React, { Component } from "react";

class DayMeal extends Component {
  render() {
    return (
      <div>
        <hr />
        <div>
          <span>{this.props.catName}</span>는 하루에
          <br /> <span>{this.props.dayMeal}g</span>의 사료를 섭취하면 좋겠어요!
        </div>
        <hr />
      </div>
    );
  }
}

export default DayMeal;
