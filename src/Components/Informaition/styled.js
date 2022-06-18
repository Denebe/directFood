import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const MainText = styled.div`
  font-family: NotoSansKR;
  font-size: 32px;
  font-weight: bold;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  padding-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 40%;
`;

export const SlickBox = styled.div`
  text-align: center;
`;
export const SlickContent = styled.div`
  font-size: 2rem;
  display: flex;
  height: 300px;
  justify-content: center;
`;

export const ContentBox = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  align-items: center;
`;

export const FormCheckText = styled.span`
  font-size: 20px;
  width: 180px;
  height: 35px;
  background: #e6e6e6;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
`;

export const RaidoButton = styled.input.attrs({ type: 'radio' })`
&:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &:checked + ${FormCheckText} {
    background-color: #009944;
    color: #fff;
  }
  display: none;
`