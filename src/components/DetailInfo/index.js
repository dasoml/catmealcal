import React, { Component } from "react";
import "./styles.css";

export class DetailInfo extends Component {
  render() {
    return (
      <div className={this.props.visible}>
        <hr />
        <div>
          <div className="info">
            고양이 기초 대사량 (RER / Resting Energy Requirements)
            <br />
            RER = 30 * 야옹이 체중(kg) + 70
            <br />
            운동 및 활동량을 제외한 휴식상태의 고양이가
            <br />
            하루에 필요로 하는 최소 에너지 요구량 (기초대사량) (단위는 kcal)
            <br />
            <br />
          </div>
          <div className="info">
            일일 에너지 요구량 (DER / Daily Energy Requirements)
            <br />
            DER = RER * 활동수치 <br />
            체중 유지에 필요한 에너지 요구량 (단위는 kcal) <br />
            <br />
            <br />
            활동수치
            <br />
            임신중인 고양이 / 4개월 미만 아기고양이 : 3.0
            <br />
            4~6개월 아기고양이 : 2.5
            <br />
            7~12개월 아기고양이 : 2.0
            <br />
            운동량이 많고 활발한 다 큰 고양이 : 1.6
            <br />
            중성화 하지 않은 다 큰 고양이 : 1.4
            <br />
            중성화 한 다 큰 고양이 : 1.2
            <br />
            적정 체중의 고양이 : 1.0
            <br />
            체중 감량이 필요한 고양이 : 0.8
            <br />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default DetailInfo;
