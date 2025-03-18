import {StyledMain} from "../StyledMain.tsx"
import {StyledTitle} from "../StyledTitle.tsx";
import {StyledSpan} from "../StyledSpan.tsx";

export default function Employment(){
    return (
        <StyledMain>
            <StyledTitle>Employment</StyledTitle>
            <div>
                <span><b>Walmart's Global Tech, US </b></span>
                <StyledSpan><b>Oct 2023 - Feb 2024</b></StyledSpan>
                <br/>
                <i>Remote Intern</i>
                <div>
                    <ul>
                        <li>Implement a novel version of a heap data structure, benchmark data structure performance and
                            optimize
                            efficiency
                        </li>
                        <li>Design a UML class diagram for a data processor, considering different operating modes and
                            database
                            connections.
                        </li>
                        <li>Create abstract methods for connecting, inserting, and validating data for different
                            databases.
                        </li>
                        <li>Design a new database for Walmart's pet department that satisfies a range of requirements.
                        </li>
                    </ul>
                </div>

                <br/>

                <span><b>Wuxi Shishu Tech, China</b></span>
                <StyledSpan><b>May 2024 - Aug 2024</b></StyledSpan>
                <br/>
                <i>Intern</i>
                <div>
                    <ul>
                        <li>Connect with server providers to select services for company websites.</li>
                        <li>Provide front-end design ideas for the creation of company websites.</li>
                    </ul>
                </div>
            </div>
        </StyledMain>
    )
}