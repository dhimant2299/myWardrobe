import React from 'react'
import styled from 'styled-components'
import CardComponent from '../../card/CardComponent'

export default function WhySection() {
    return(
        <Wrapper>
        <Title>
            Why <FontColor1>choose</FontColor1> <FontColor2>mydrobe?</FontColor2>
        </Title>
        <CardVerticalWrapper>
        <CardHorizontalWrapper>
        <CardComponent title="Store all your creative outfits" color="#F7D486;"/>
        <CardComponent title="Find new ideas from others" color="#C5F9E9;" />
        </CardHorizontalWrapper>
        
        <CardHorizontalWrapper>
        <CardComponent title="Find great selections from our shop" color="#F27A7D" />
        </CardHorizontalWrapper>
        
        </CardVerticalWrapper>
        </Wrapper>
    )
}


const Wrapper = styled.div`
position: absolute;
display: grid;
grid-template-rows: repeat(2, auto);
place-content: center;
gap: 50px;
width: 100%;
height: 694px;
top: 1345px;
padding: 0px;

`

const Title = styled.h1`
    font-family: "SF Pro Display";
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    justify-self: center;
`

const FontColor1 = styled.span`
    color: #C5F9E9;
    -webkit-text-stroke: 0.5px black;
`
const FontColor2 = styled.span`
    color: #F27A7D;
    -webkit-text-stroke: 0.5px black;
`
const CardHorizontalWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
gap: 50px;
width: 940px;
height: 230px;
justify-content: center;
`

const CardVerticalWrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
align-items: center;
gap: 50px;
width: 940px;
height: 558px;
padding: 0px;


`



