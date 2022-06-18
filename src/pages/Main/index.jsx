import React from 'react'
import * as Styled from './styled'
import Search from '../../Components/Search';
import RecentBlock from '../../Components/RecentBlock';
import Information from '../../Components/Informaition';

const Main = () => {
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Styled.FlexWrapper>
            <Styled.BackgroundWrapper>
                <Styled.StyledLogo src='logo2.png' />
                <Styled.Icon src='virus3.png' />
                <Styled.MainText>BLOCK<Styled.StyledBr />FOOD</Styled.MainText>
                <Styled.MainText id='sub'>위해 식품 차단 정보 사이트</Styled.MainText>
                <Styled.Icon src='circle.png' id='circle' />
                <Styled.MainText id='bottom'>위해식품이란 식품, 식품첨가물, 기구 또는 용기ㆍ포장에 존재하는 위험요소로서 <Styled.StyledBr />
                인체의 건강을 해치거나 해칠 우려가 있는 것을 말한다.</Styled.MainText>
                <Styled.Icon src='scrolldown.png' id='scroll' />
            </Styled.BackgroundWrapper>
        </Styled.FlexWrapper>
        <RecentBlock />
        <Search />
        <Information />
        </div>
    )
}

export default Main