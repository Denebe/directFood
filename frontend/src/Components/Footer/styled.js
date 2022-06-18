import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    padding: 25px 70px;
    justify-content: space-between;
    background-color: #009944;
`

export const FooterText = styled.div`
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 550;
    color: #e5e5e5;
    letter-spacing: 0.45px;
    margin-right: 36px;
    &#copyright {
        font-weight: normal;
    }
`