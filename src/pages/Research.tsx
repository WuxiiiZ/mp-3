import {StyledMain} from "../StyledMain.tsx"
import {StyledTitle} from "../StyledTitle.tsx";
import {StyledSpan} from "../StyledSpan.tsx";

export default function Research(){
    return (
        <StyledMain>
            <StyledTitle>Research</StyledTitle>
            <div>
                <span><b>Sum of Four Square (Undergraduate Thesis)</b></span>
                <br/>
                <StyledSpan><b>Sept 2023 - Dec 2023</b></StyledSpan>
                <br/>
                <div>
                    <ul>
                        <li>Outline the history and development of sum of four square theorem.</li>
                        <li>Provide two feasible proof to this theorem.</li>
                    </ul>
                </div>

                <br/>

                <span><b>Adverse Effects of Computing Technology and Their Mitigation (Undergraduate Thesis)</b></span>
                <br/>
                <StyledSpan><b>Sept 2023 - Dec 2023</b></StyledSpan>
                <br/>
                <div>
                    <ul>
                        <li>Introduce increased alienation and loneliness from social media overuse.</li>
                        <li>Study the possible correlation between lonely senses and the Covid-19 experience.</li>
                        <li>Provide feasible methods for mitigation.</li>
                    </ul>
                </div>
            </div>

        </StyledMain>
    )
}