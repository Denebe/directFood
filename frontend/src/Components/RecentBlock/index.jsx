import * as Styled from './styled'
import Slide from '../Slide';

const RecentBlock = () => {
    
    return(
        <Styled.FlexContainer>
            <Styled.MainText>" 최근 <span style={{backgroundColor: "#009944", color: "white"}}>위해 식품</span>은</Styled.MainText>
                <Slide />
            <Styled.MainText>입니다 "</Styled.MainText>
        </Styled.FlexContainer>
    )
}

export default RecentBlock