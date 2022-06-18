import * as Styled from './styled'
import Slide from '../Slide';

const RecentBlock = () => {
    
    return(
        <Styled.FlexContainer>
            <img src='virus1.png' width={350} style={{position:"absolute", right:"-10%", top:"110%"}}/>
            <img src='virus2.png' width={350} style={{position:"absolute", left:"-10%", top:"160%"}}/>
            <Styled.MainText id='top'>" 최근 <span style={{backgroundColor: "#009944", color: "white"}}>위해 식품</span>은</Styled.MainText>
                <Slide />
            <Styled.MainText id='bottom'>입니다 "</Styled.MainText>
        </Styled.FlexContainer>
    )
}

export default RecentBlock