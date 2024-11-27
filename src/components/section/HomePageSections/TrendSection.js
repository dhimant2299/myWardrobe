import React from 'react'
import styled from "styled-components";
import ReadCardComponent from "../../card/ReadCardComponent";


export default function TrendSection(){
    return(
        <Wrapper>
                <Title>
                    Trending
                </Title>
                <CardWrapper>
                <ReadCardComponent image="https://images.unsplash.com/photo-1601921570063-28d2d3bf5b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80" title="Fall '22 trends"/>
                <ReadCardComponent image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" title="How to organize" />
                <ReadCardComponent image="https://images.unsplash.com/photo-1602564524425-69f1cfa037eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80" title="How to be yourself" />
                </CardWrapper>
        </Wrapper>
    )
}


const Wrapper = styled.div`
position: absolute;
width: 100%;
height: 563px;
top: 2150px;
display: grid;
grid-template-rows: repeat(2 ,auto);
align-items: center;
gap: 64px;
place-items: center;

`

const Title = styled.h2`
font-family: "SF Pro Display";
font-weight: 700;
font-size: 40px;
line-height: 48px;
`


const CardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
gap: 60px;
align-items: start;
height: 451px;
width: 1320px;
`