import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
    min-width: 30%;
    background-color: darkseagreen;
    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
    }
    li{
        width:100%;
        display: block;
        padding: 2vh;
        height: 15%;
        text-align: center;
    }
    a{
        display: inline-block;
        background-color: darkolivegreen;
        color: powderblue;
        border-radius: 0.5vh;
        font-weight: bold;
        padding: 3%;
        margin: 0 auto;
        height:100%;
        width:100%;
        font-size:calc(2px + 1.5vw);
    }
    @media screen and (max-width:750px){
        width: 100%;
        min-height: auto;
        flex-direction: row;
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin: 0;
        }
        li{
            flex-direction: row;
            height:auto;
            width:15%;
            margin: 0 auto;
            padding: 0.1%;
            text-align: center;
        }
        a{
            display: inline-block;
            margin: 0 auto;
            padding: 0;
            height:100%;
            width:100%;
            font-size:calc(3px + 1vw);
        }
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/employment">Employment</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
        </StyledNav>
    )
}