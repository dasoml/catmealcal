import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/";
import CatInfoInput from "./components/CatInfoInput/index";
import DayMeal from "./components/DayMeal/index";

class App extends Component {
  state = {
    catName: "",
    catWeight: "",
    catAge: "",
    selectedOption: "",
    mealKcal: "",
    dayMeal: "",
    visible: "invisible"
  };

  handleCreate = data => {
    this.setState(data);
    const { catWeight, mealKcal, selectedOption } = this.state;
    const RER = 30 * catWeight + 70;
    const DER = RER * selectedOption;
    const dayMealgram = (DER * 1000) / mealKcal;
    this.setState({
      dayMeal: dayMealgram,
      visible: "visible"
    });
  };
  render() {
    return (
      <div>
        <Header />
        <CatInfoInput onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
