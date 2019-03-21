import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/";
import CatInfoInput from "./components/CatInfoInput/index";
import DayMeal from "./components/DayMeal/index";

class App extends Component {
  state = {
    catName: "",
    dayMeal: "",
    visible: "invisible"
  };

  handleCreate = data => {
    const { catName, catWeight, mealKcal, selectedOption } = data;
    const RER = 30 * catWeight + 70;
    const DER = RER * selectedOption;
    const dayMeal = (DER * 1000) / mealKcal;
    this.setState({
      catName,
      dayMeal,
      visible: "visible"
    });
  };
  render() {
    return (
      <div>
        <Header />
        <DayMeal
          visible={this.state.visible}
          catName={this.state.catName}
          dayMeal={this.state.dayMeal}
        />
        <CatInfoInput onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
