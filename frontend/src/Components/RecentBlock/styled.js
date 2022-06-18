import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainText = styled.div`
    font-family: NotoSansKR;
    font-size: 72px;
    font-weight: bold;
`

export const Wrapper = styled.div`
    width: 65%;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
    &#bottom {
        @media screen and (max-width: 960px) {
            width: 90%;
        }
    }
`

export const SlickBox = styled.div`
    text-align: center;
`
export const SlickContent = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: center;
`

export const ContentBox = styled.div`
    border: 1px solid black;
    margin-top: 20px;
    align-items: center;
`