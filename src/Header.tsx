import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color:blanchedalmond;
    min-height: 10vh;
    padding: 0.5%;
    h1{
        font-size: calc(24px + 1vw);
        padding:0 1%;
        margin: 0.5%;
    }
    p{
        font-size: calc(16px + 0.5vw);
        padding:0 1%;
        margin: 0.5%;
    }
    @media screen and (max-width: 750px) {
        min-height: 5vh;
        h1{
            font-size: calc(14px + 1vw);
        }
        p{
            font-size: calc(10px + 0.5vw);
        }
        
    }
`;

export default function Header() {
    return(
        <>
            <StyledHeader>
                <div><h1>Wuxi(Alice) Zhang</h1></div>
                <div><p>This is my online resume.</p></div>
            </StyledHeader>
        </>
    )
}