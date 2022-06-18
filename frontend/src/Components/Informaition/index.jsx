import React from "react";
import * as Styled from "./styled";
import Slide from "../Slide";

const Information = () => {

  return (
    <Styled.FlexContainer>
      <Styled.Wrap>
        <Styled.MainText>차단/회수 정보를 알아보세요</Styled.MainText>
        <div>
        <Styled.RaidoButton type="radio" /* cheked={type==='1'} */ />
        <Styled.FormCheckText>차단정보</Styled.FormCheckText>

        <Styled.RaidoButton type="radio" /* checked={type==='2'} *//>
        <Styled.FormCheckText>회수정보</Styled.FormCheckText>
        </div>
      </Styled.Wrap>

      <Slide />
    </Styled.FlexContainer>
  );
};

export default Information;
