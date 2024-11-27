import React, { useState } from 'react'
import styled from 'styled-components'
import plusIcon from "../../../images/icon/plusIcon.svg"

export default function FAQSection() {

    const [isOpen, setOpen] = useState(false);

function sayHello() {
    console.log("Say hello")
}

return(
    <Wrapper>
        <p> Hello Jason</p>
    </Wrapper>

)    
}

const Wrapper = styled.div`
position: absolute;
display: grid;
grid-template-rows: repeat(2, auto);
gap: 60px;
top: 2838px;
height: 408px;
width: 100%;
place-items: center;
`

const Title = styled.h2`
font-family: "SF Pro Display";
font-weight: 700;
font-size: 40px;
line-height: 48px;
`

const QuestionsWrapper = styled.div`
display: grid;
grid-template-rows: repeat(6, auto);
gap: 30px;
width: 1005px;
height: 300px;

`

const Question= styled.div`
display: grid;
grid-template-columns: repeat(2,auto);
align-items: start;
width: 1005px;
height: 48px;
justify-content: space-between;

`
const QuestionText = styled.h2`
font-family: "SF Pro Display";
font-style : normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
`

const Icon = styled.img`
height: 40px;
width: 35px;
`

const Rectangle = styled.div`
width: 1005px;
height: 2px;
background: black;
`

const AnswerWrapper = styled.p`
font-family: "SF Pro Text";
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: black;
`

const Button = styled.button`

color: transparent; 
background-color: transparent; 
border-color: transparent; 
border: none;

:hover {
    cursor: pointer;
}
`