import {StyledMain} from "../StyledMain.tsx"
import {StyledTitle} from "../StyledTitle.tsx";
import {StyledSpan} from "../StyledSpan.tsx";

export default function Education() {
    return (
        <StyledMain>
                <StyledTitle>Education</StyledTitle>
                <main>
                    <span><b>Case Western Reserve University</b></span>
                    <br />
                    <StyledSpan>OH, Cleveland </StyledSpan>
                    <br />
                    <StyledSpan><span><b>GPA:</b> </span>3.50</StyledSpan>
                    <br />
                    <StyledSpan><b>May 2024</b></StyledSpan>
                    <br/>
                    <ul>
                        <li>BA in Computer Science</li>
                        <li>Minor in Mathematics</li>
                        <li>Dean's Honor List Fall 2021 and Spring 2023</li>
                    </ul>
                </main>
                <div>
                    <span><b>Boston University</b></span><br />
                    <StyledSpan>MA, Boston </StyledSpan>
                    <br />
                    <StyledSpan><span><b>GPA: </b></span>3.50</StyledSpan>
                    <br />
                    <StyledSpan><b>Sept 2024 -</b></StyledSpan>
                    <br/>
                    <ul>
                        <li>MS in Computer Science</li>
                    </ul>
                </div>
        </StyledMain>
    )
}