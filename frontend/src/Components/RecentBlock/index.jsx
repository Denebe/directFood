import * as Styled from './styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import {SlickApi} from "../../api/Api"

const RecentBlock = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
      };
        
    const [db, setData] = useState([]);

    useEffect(()=>{
        SlickApi(setData);
        console.log(db);
    },[])
    
    return(
        <Styled.FlexContainer>
            <Styled.MainText>" 최근 <span style={{backgroundColor: "#009944", color: "white"}}>위해 식품</span>은</Styled.MainText>
            <Styled.Wrapper>
                <Slider {...settings}>
                    {db.map((v,i)=> {
                        return (
                            <Styled.SlickBox key={i}>
                                <Styled.SlickContent>
                                    <img src={v.IMAGE_URL.split(", ")[0]} />
                                </Styled.SlickContent>
                            </Styled.SlickBox>
                        )
                    })}
                </Slider>
            </Styled.Wrapper>
            <Styled.MainText>입니다 "</Styled.MainText>
        </Styled.FlexContainer>
    )
}

export default RecentBlock