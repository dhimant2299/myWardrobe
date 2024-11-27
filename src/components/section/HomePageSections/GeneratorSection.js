import React from 'react'
import styled from "styled-components"
import arrowIcon from "../../../images/icon/arrow.svg"
import ArrowButton from '../../buttons/ArrowButton'
import outfitGenIcon from "../../../images/icon/outfitGenIcon.svg"

export default function GeneratorSection() {
    return(
        <Wrapper>
            <ContentWrapper>
            <IconWrapper src={outfitGenIcon} />
            <TextWrapper>
            <H1>Outfit generator</H1>
            <H2>Save time in the morning</H2>
            <ArrowButton title="EXPLORE" icon={arrowIcon} color="#F27A7D" />
            </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}


const Wrapper = styled.div`
     position: absolute; 
     display: grid;
    grid-template-columns: auto;
    width: 100%;
    top: 989px;
    justify-content: center;
    gap: 0;
   
`

const ContentWrapper = styled.div`
    position : relative;
    display: grid;
    grid-template-columns: repeat(2, auto);
    place-content: center;
    gap: 100px;
    height: 263px;
    width: 1442px;;
    background-color: black;
    border-radius: 28px;
   
`


const IconWrapper = styled.img`
    width: 200px;
    height: 200px;
`


const TextWrapper = styled.div`
display: grid;
grid-template-rows: repeat(3, auto);
justify-content: start;;
align-items: start;
gap: 30px;
height: 210px;
`

const H1 = styled.h1`
font-family: "SF Pro Display";
font-weight: 700;
font-size: 60px;
line-height: 72px;
color: #eee9d6;
`

const H2 = styled.h2`
font-family: "SF Pro Display";
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #eee9d6;
`