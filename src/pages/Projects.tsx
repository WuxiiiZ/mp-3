import {StyledMain} from "../StyledMain.tsx"
import {StyledTitle} from "../StyledTitle.tsx";
import {StyledSpan} from "../StyledSpan.tsx";
import Calculator from "../Calculator.tsx";

export default function Projects() {
    return (
        <StyledMain>
            <div>
                <StyledTitle>Projects</StyledTitle>
                <p>
                    <span><b>Database Design for an Online Clothing Recommendation Platform</b></span>
                    <StyledSpan><b>Jun 2023 - Aug 2023</b></StyledSpan>
                </p>
                <p>
                    <ul>
                        <br />
                        <li>Use MYSQL to design and create a database to store skirt information.</li>
                        <li>Ensure efficient querying in the database through meticulous data structure design, optimizing the shopping
                            experience for users.</li>
                    </ul>
                </p>
            </div>
            <br/>
            <Calculator />
        </StyledMain>
    )
}