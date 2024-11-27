import React from 'react'
import styled from "styled-components";

export default function CardComponent(props) {
    const {title, color} = props;
    return(
        <Wrapper color={color}>
            <Text>
               {title}
            </Text>
        </Wrapper>

    )
}


const Wrapper = styled.div`
display: grid;
justify-content: start;
align-content: center;
width: 445px;
height: 230px;
background: ${props => props.color || "black"};
border-radius: 20px;

`

const Text = styled.h2`
font-family: "SF Pro Display";
font-weight: 700;
font-size: 40px;
line-height: 40px;
width: 303px;
height: 96px;
padding: 67px 71px;
`
