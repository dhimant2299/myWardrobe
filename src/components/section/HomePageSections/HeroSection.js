import React from 'react';
import styled from "styled-components";
import arrowIcon from "../../../images/icon/arrow.svg"
import ArrowButton from '../../buttons/ArrowButton';

export function HeroSection() {
    return(
            <Wrapper>
            <LeftWrapper>
             <DescriptionWrapper>Meet <FontColor1>your</FontColor1> <FontColor2>Virtual</FontColor2> <FontColor3>Closet!</FontColor3></DescriptionWrapper>
                <ArrowButton title='GET STARTED' icon={arrowIcon} color="black;" /> 
            </LeftWrapper>

            <RightWrapper>
                <RightImageWrapper>
                    <Image src="//lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2Fe3%2F80e334eb3e7609289bd18aae2d27cd67c1246a15.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]" />
                    <Image src="//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6e%2F0c%2F6e0c24437e81cd2c69478c9afceb0bc2974134ac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" />
                    <Image src="//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0b%2F7c%2F0b7c25d71f03ad7ea1da3354e7c06da612b6de60.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" />
                </RightImageWrapper>
                <RightWrapperText>
                    Organize your <FontColor3> wardrobe</FontColor3>
                </RightWrapperText>
            </RightWrapper>


            </Wrapper>
    )
}

const Wrapper = styled.div`
position: absolute;
top: 228px;
height: 250px;
width: 100%;
gap: 395px;
display: grid;
grid-template-columns: repeat(2, auto);
place-content: center;
`


const LeftWrapper = styled.div`

display: grid;
grid-template-rows: repeat(2, auto);
justify-content: space-between;
align-items: start;
gap: 30px;
padding: 0px;
width: 100%;
height: 216px;
line-height: 72px;
`

const DescriptionWrapper = styled.h1`
position: relative;
font-family: "SF Pro Display";
width: 400px;
height: 144px;
left: 0px;
top: 0px;
line-height: 72px;
font-weight: 700;
font-size: 60px;


`

const FontColor1 = styled.span`
    color: #C5F9E9;
    -webkit-text-stroke: 0.5px black;
`
const FontColor2 = styled.span`
    color: #F27A7D;
    -webkit-text-stroke: 0.5px black;
`
const FontColor3 = styled.span`
    color: #F7D486;
    -webkit-text-stroke: 0.5px black;
`


const RightWrapper = styled.div`
position: relative;
display: grid;
grid-template-rows: repeat(2 auto);
justify-content: center;
align-items: center;
align-content: center;
padding: 0;
gap: 30px;
width: 490px;
height: 246px;
order: 1;

`

const RightImageWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
align-items: start;
justify-content: center;
padding: 0;
gap: 10px;
width: 490;
height: 180px;

`

const Image = styled.img`
width: 139px;
height: 180px;
border-radius: 20px;
order: 0;
background-size: contain;
`
const RightWrapperText = styled.h2`
    font-family: "SF Pro Text";
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
justify-self: center;

`


