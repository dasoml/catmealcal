import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <span className="catEmoji" role="img" aria-label="cat">
            😺
          </span>
          <div className="title">야옹이 사료량 계산</div>
          <div className="subTitle">
            우리 야옹이는 하루에 얼마나 먹어야 할까요?
            <br />
            건강한 야옹이를 위해 상태에 맞는 사료량을 배급해주세요
          </div>
          <div className="smallText">
            아래의 계산기는 기초대사량과 에너지요구량에 따른 사료량이며
            <br />
            상황이나 고양이의 특성이 반영되지 않은 계산식이니 참고용으로
            사용해주세요
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
