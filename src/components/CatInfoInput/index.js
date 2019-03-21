import React, { Component } from "react";
import "./styles.css";
import Select from "react-select";

// 야옹이 상태 옵션들
const options = [
  { value: "3.0", label: "임신묘 or 4개월 미만 아기야옹이" },
  { value: "2.5", label: "4~6개월의 아기야옹이" },
  { value: "2.0", label: "7~12개월의 아기야옹이" },
  { value: "1.6", label: "운동량이 많고 활발한 다 큰 야옹이" },
  { value: "1.4", label: "중성화 하지 않은 다 큰 야옹이" },
  { value: "1.2", label: "중성화 한 다 큰 고양이" },
  { value: "1.0", label: "적정 체중의 야옹이" },
  { value: "0.8", label: "체중 감량이 필요한 야옹이" }
];

class CatInfoInput extends Component {
  state = {
    catName: "",
    catWeight: "",
    catAge: "",
    selectedOption: "",
    selectedBorder: "solid 1px #efefef",
    mealKcal: "",
    dayMeal: "",
    visible: "invisible"
  };

  // 몸무게, 나이, 칼로리 숫자와 컴마만 입력. 그렇지 않으면 warnInputStyle
  handleChange = e => {
    const reg = /^[0-9]{0,3}\.?\d+?$/;
    const { name, value } = e.target;
    if (name === "catWeight" || name === "catAge" || name === "mealKcal") {
      if (reg.test(value)) {
        e.target.className = "inputStyle";
      } else {
        e.target.className = "warnInputStyle";
      }
    }
    // input에 입력한 값 임시로 state에 저장
    this.setState({ [name]: value });
  };

  //야옹이 상태 선택 시 setState. 야옹이 상태 선택하지 않을 시 테두리 변경
  handleChangeSelect = selectedOption => {
    this.setState({ selectedOption: selectedOption.value });
    if (selectedOption === null) {
      this.setState({ selectedBorder: "solid 1px #ff822f" });
    } else {
      this.setState({ selectedBorder: "solid 1px #efefef" });
    }
  };

  // 확인하기 버튼 클릭 후 인풋 있으면 셋스테이트, 없으면 경고창 후 테두리 변경
  handleClick = e => {
    //이벤트 발생 시 페이지 다시 불러오지 않게 작업 방지
    e.preventDefault();

    const { catName, catWeight, catAge, mealKcal, selectedOption } = this.state;
    if (
      // 인풋의 입력길이 확인
      catName.length > 0 &&
      catWeight.length > 0 &&
      typeof catWeight === typeof "0" &&
      catAge.length > 0 &&
      selectedOption !== null &&
      mealKcal.length > 0
    ) {
      // 입력길이가 0 이상일때 부모에게로 state값 전달
      this.props.onCreate(this.state);
    } else {
      // 입력 칸 길이 0 이상이 아닐때
      alert("빈칸을 모두 입력해주세요");
      if (catName.length === 0) {
        e.target.catName.className = "warnInputStyle";
      }
      if (catWeight.length === 0) {
        e.target.catWeight.className = "warnInputStyle";
      }
      if (catAge.length === 0) {
        e.target.catAge.className = "warnInputStyle";
      }
      if (selectedOption === null) {
        this.setState({ selectedBorder: "solid 1px #ff822f" });
      }
      if (mealKcal.length === 0) {
        e.target.mealKcal.className = "warnInputStyle";
      }
    }
  };

  render() {
    const { catName, catWeight, catAge, mealKcal } = this.state;
    //야옹이 상태 스타일 커스텀
    const customStyles = {
      container: styles => ({
        ...styles,
        width: "220px"
      }),
      valueContainer: styles => ({
        ...styles,
        height: "100%",
        paddingLeft: "14px"
      }),
      control: styles => ({
        ...styles,
        height: "41px",
        borderRadius: "10px",
        border: this.state.selectedBorder
      }),
      placeholder: styles => ({
        ...styles,
        fontSize: "14px",
        letterSpacing: "-0.5px",
        color: "#d4d4d4",
        paddingRight: "14px"
      }),
      option: styles => ({
        ...styles,
        fontSize: "14px",
        letterSpacing: "-0.5px",
        color: "#626262"
      }),
      singleValue: styles => ({
        ...styles,
        fontSize: "14px",
        letterSpacing: "-0.5px",
        color: "#626262"
      }),
      indicatorSeparator: styles => ({
        ...styles,
        backgroundColor: "white"
      }),
      dropdownIndicator: styles => ({
        ...styles,
        color: "#c3c3c3"
      })
    };
    return (
      <>
        <form onSubmit={this.handleClick}>
          <div className="catInfo">
            <div className="catName row">
              <label>야옹이 이름</label>
              <input
                name="catName"
                placeholder="이름을 입력해주세요"
                onChange={this.handleChange}
                value={catName}
                className={"inputStyle"}
              />
            </div>

            <div className="weightAndAge row">
              <div className="catWeight alignRight">
                <label>몸무게</label>
                <input
                  name="catWeight"
                  placeholder="kg"
                  onChange={this.handleChange}
                  value={catWeight}
                  className={"inputStyle"}
                />
              </div>
              <div className="catAge alignRight">
                <label>나이</label>
                <input
                  name="catAge"
                  placeholder="살"
                  onChange={this.handleChange}
                  value={catAge}
                  className={"inputStyle"}
                />
              </div>
            </div>
            <div className="catStatus row">
              <label>야옹이 상태</label>
              <div className="selectBox">
                <Select
                  onChange={this.handleChangeSelect}
                  options={options}
                  styles={customStyles}
                  isSearchable={false}
                />
              </div>
            </div>
            <div className="mealKcal row">
              <label>사료 칼로리</label>
              <div>
                <span>1kg 당</span>
                <input
                  name="mealKcal"
                  placeholder="kcal"
                  onChange={this.handleChange}
                  value={mealKcal}
                  className={"inputStyle"}
                />
              </div>
            </div>
            <div className="submitButton">
              <button type="submit">확인하기</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default CatInfoInput;
