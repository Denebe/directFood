import * as Styled from "./styled"

const FooterBar = () => {
    return (
        <Styled.Wrapper>
            <div style={{display:"flex", alignItems:"center"}}>
                <Styled.FooterText>Block Food</Styled.FooterText>
                <Styled.FooterText id="copyright">ⓒ blockfood. All rights reserved.</Styled.FooterText>
            </div>
            <img src="logo2.png" width={70} />
        </Styled.Wrapper>
    )
}

export default FooterBar