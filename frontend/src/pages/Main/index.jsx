import React, {useEffect, useState} from 'react'
import * as Styled from './styled'
import Background from '../../img/background.jpg';
import {mainApi} from '../../api/Api'

const Main = () => {
    const [db, setData] = useState([]);
    useEffect(() => {
        mainApi().then((data) => setData(data));
    },[db])
    return(
        <Styled.FlexWrapper>
            <Styled.MainText>BLOCK<Styled.StyledBr />FOOD</Styled.MainText>
            <Styled.BackgroundWrapper>
                <Styled.BackgroundImg src={Background}/>
            </Styled.BackgroundWrapper>
        </Styled.FlexWrapper>
    )
}

export default Main