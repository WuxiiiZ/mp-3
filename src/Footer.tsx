import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color:blanchedalmond;
    min-height: 5vh;
    padding: 0 1%;
    bottom: 0;
    margin-top: auto;
    @media screen and (max-width: 750px) {
        font-size: calc(10px + 0.5vw);
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Wuxi Zhang <a href="">Credits</a>&copy;</p>
        </StyledFooter>
    )
};