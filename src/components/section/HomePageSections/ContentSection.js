import React from "react"

import styled from 'styled-components'


export default function ContentSection() {
    return(
       <ContentWrapper>
            <Image src="//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F07%2Fc5%2F07c58400bae85e2e207df883ed50b38be333d5ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" />
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80" />
            <Image src="https://successiblelife.com/wp-content/uploads/2021/02/Fashion-Trendsetter-1.jpg" />
            <TextWrapper>Show <FontColor1>your</FontColor1> <FontColor2>fit</FontColor2></TextWrapper>
       </ContentWrapper>
    )


}

const ContentWrapper = styled.div`
position: absolute;
display: grid;
grid-template-columns: repeat(4, auto);
height: 360px;
width: 100%;
gap: 10px;
padding: 0px;
justify-content: center;
align-items: center;
left: 163px;
top: 508px;
`
const Image = styled.img`
width: 244px;
height: 360px;
border-radius: 20px;
background-size: contain;

`
const TextWrapper = styled.h1`
font-family: "SF Pro Display";
font-weight: 700;
font-size: 60px;
line-height: 72px;
`

const FontColor1 = styled.span`
    color: #C5F9E9;
    -webkit-text-stroke: 0.5px black;
`
const FontColor2 = styled.span`
    color: #F27A7D;
    -webkit-text-stroke: 0.5px black;
`
