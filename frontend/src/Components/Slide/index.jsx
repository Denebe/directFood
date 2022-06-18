import { useState, useEffect } from "react";
import * as Styled from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlickApi } from "../../api/Api";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const [db, setData] = useState([]);
  useEffect(() => {
    SlickApi(setData);
    console.log(db);
  }, []);
  return (
      <Styled.Wrapper>
        <Slider {...settings}>
          {db ? db.map((v, i) => {
            return (
              <Styled.SlickBox key={i}>
                <Styled.SlickContent>
                  <img src={v.IMAGE_URL.split(", ")[0]} />
                </Styled.SlickContent>
              </Styled.SlickBox>
            );
          }) : ''}
        </Slider>
      </Styled.Wrapper>
  );
};

export default Slide;
