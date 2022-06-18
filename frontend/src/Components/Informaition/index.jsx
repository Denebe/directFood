import React, { useState } from "react";
import * as Styled from "./styled";
import Slide from "../Slide";

const Information = () => {
  const [type, setType] = useState("1");

  const onChange = (e) => {
    setType(e.target.value);
  };

  const date = [
    { id: 1, title: "wow", content: "eeee" },
    { id: 2, title: "wwerow", content: "eeqweee" },
    { id: 3, title: "wccow", content: "eeefde" },
  ];

  return (
    <Styled.FlexContainer>
      <Styled.Wrap>
        <Styled.MainText>차단/회수 정보를 알아보세요</Styled.MainText>
        <div>
          <label>
            <Styled.RaidoButton
              type="radio"
              name="radioButton"
              checked={type === "1"}
              onChange={onChange}
              value="1"
            />
            <Styled.FormCheckText>차단정보</Styled.FormCheckText>
          </label>
          <label>
            <Styled.RaidoButton
              type="radio"
              name="radioButton"
              checked={type === "2"}
              value="2"
              onChange={onChange}
            />
            <Styled.FormCheckText>회수정보</Styled.FormCheckText>
          </label>
        </div>
      </Styled.Wrap>

      <Slide />

      <div style={{ height: "500px", width: "100%" }}>
        {date.map((v) => (
            
          <div key={v.id} style={{alignItems:"center"}}>
            <div>
              제품이름
              <h3>{v.id}</h3>
            </div>
            <div>
              위해성품명
              <h3>{v.title}</h3>
            </div>
            <div>
              차단일자
              <h3>{v.content}</h3>
            </div>
          </div>
        ))}
      </div>
    </Styled.FlexContainer>
  );
};

export default Information;
