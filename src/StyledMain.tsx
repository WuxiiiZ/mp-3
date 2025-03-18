import styled from "styled-components";

export const StyledMain = styled.main`
    flex: 1;
    padding: 1% 2%;
    background-color: lightpink;
    line-height:2;
    font-size:calc(10px + 0.5vw);
    @media screen and (max-width: 750px) {
        font-size: calc(8px + 0.5vw);
    }
`;