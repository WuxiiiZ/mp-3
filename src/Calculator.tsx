import {useState} from "react";
import styled from "styled-components";
import calImage from "./assets/cal_pic.png";

const StyledButton = styled.button`
    padding: 1%;
    margin: 1%;
`;

const StyledContainer = styled.div`
    height: 50%;
    background-size: cover;
    background-image: url(${calImage});
`

export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [result, setResult] = useState<number|null>(null);

    const add = (num1: number, num2: number) => {
        setResult(num1 + num2);
    };
    const subtract = (num1: number, num2: number) => {
        setResult(num1 - num2)
    };
    const multiply = (num1: number, num2: number) => {
        setResult(num1 * num2)
    };
    const divide = (num1: number, num2: number) => {
        setResult(num1 / num2)
    };
    const power = (num1: number, num2: number) => {
        let res = 1;
        let i;
        for (i = 1; i <= num2; i++) {
            res *= num1;
        }
        setResult(res);
    }

    const clearAll = () => {
        setFirstNumber("");
        setSecondNumber("");
        setResult(null);
    };

    return(
        <StyledContainer>
            <div>
                <label htmlFor="first-number"><strong>First number: </strong></label>
                <input
                    type="number"
                    placeholder="1st number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                />
                <label htmlFor="second-number"><strong> Second number: </strong></label>
                <input
                    type="number"
                    placeholder="2nd number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)}
                />
            </div>
            <div>
                <StyledButton onClick={() => add(Number(firstNumber),Number(secondNumber))}>+</StyledButton>
                <StyledButton onClick={() => subtract(Number(firstNumber),Number(secondNumber))}>-</StyledButton>
                <StyledButton onClick={() => multiply(Number(firstNumber),Number(secondNumber))}>*</StyledButton>
                <StyledButton onClick={() => divide(Number(firstNumber),Number(secondNumber))}>/</StyledButton>
                <StyledButton onClick={() => power(Number(firstNumber),Number(secondNumber))}>^</StyledButton>
                <StyledButton onClick={clearAll}>Clear</StyledButton>
            </div>
            <div>
                Result: <span style={{ color: (result!==null)&&(result < 0) ? "red":"green" }}
                >{result}</span>
            </div>
        </StyledContainer>
    )
}