import React, { useState } from "react";
import * as Styled from "./styled";
import MainList from "../../Components/MainList";
import { seApi } from "../../api/Api";

const Search = () => {
  const [db, setData] = useState([]);
  const [loc, setLoc] = useState("");
  const [enddate, setendDate] = useState("2022-06-10");

  const [edate, setedate] = useState("20220610");


  const locChange = (e) => {
    setLoc(e.target.value);
  };

  const locKeypress = (e) => {
    if (e.key === "Enter") {
      seApi(setData, edate);
    }
  };


  const edateChange = (e) => {
    setendDate(e.target.value);
    setedate(e.target.value.replace(/-/g, ""));
  };
  return (
    <Styled.Container>
      <Styled.SearchWrapper>
        <Styled.SearchTitle>
          국가를 검색하면 위해정보를 알 수 있어요.
        </Styled.SearchTitle>
        <Styled.DateWrapper>
        
          <Styled.DateChoice
            type="date"
            value={enddate}
            onChange={edateChange}
          ></Styled.DateChoice>
        </Styled.DateWrapper>

        <Styled.SearchInput
          placeholder="국가 이름을 검색하세요."
          onChange={locChange}
          onKeyPress={locKeypress}
        />
      </Styled.SearchWrapper>
      {db != null ? <MainList props={db} loc={loc} /> : ""}
    </Styled.Container>
  );
};

export default Search;
