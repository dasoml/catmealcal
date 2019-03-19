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
    visible: "invisible",
    data: []
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
  componentDidMount() {
    fetch("http://10.0.1.13:8000/api/")
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json });
      });
  }
  render() {
    const { data } = this.state;
    let list = [];
    if (data) {
      list = data.map((item, idx) => <DayMeal catName={item.name} key={idx} />);
    }
    return (
      <div>
        <Header />
        {list}
        <CatInfoInput onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
