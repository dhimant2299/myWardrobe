import React, { useState } from 'react'
import styled from "styled-components"
import weatherBackground from "../../images/background/weatherBackground.svg"
import weatherIcon from "../../images/icon/weatherIcon.svg"
import arrowIcon from "../../images/icon/arrow.svg"
import {Caption} from "../.../../../styles/TextStyles"
import ReactCardFlip from 'react-card-flip'
import top from "../../images/clothes/top.jpeg"
import bottom from "../../images/clothes/bottom.jpeg"
import shoe from "../../images/clothes/shoe.jpeg"


export default function OutfitCardComponent(props) {
    const {icon, title, description, background, showModal} = props;
    const [isFlip, setFlip] = useState(false); 
    
    

 
    return (
        <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal" flipSpeedFrontToBack={"0.8"} flipSpeedBackToFront={"0.8"} infinite={true}>
        <FrontCard>
        <img src={background} style={{width: '341px', height:'306px'}}/>

        <DescriptionWrapper>
        <DescriptionTitleWrapper>
        
        <img src={icon} style={{width: '48px', height:'48px'}} />

        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionText>{description}</DescriptionText>
        </DescriptionTitleWrapper>

        <ButtonWrapper>
        <Button onClick={() => {setFlip(true)}}>
            <ButtonTitle>Generate</ButtonTitle>
            <ButtonIcon src={arrowIcon} />
        </Button>
        </ButtonWrapper>
        </DescriptionWrapper>

       
        </FrontCard>

        <BackCard onClick={() => {props.showModal(true)}} >

            <BackCardWrapper  >
            <BackCardContentWrapper>
                 <BackCardTopContent>
                     <Image src={top} />
                </BackCardTopContent>

            <BackCardBottomContent>
                <Image src={bottom} />
                <Image src={shoe} />

            </BackCardBottomContent>
           
            </BackCardContentWrapper>
            <BackButton onClick={(e) => {
                setFlip(false)
                e.stopPropagation()
            }}><p style={{
                fontFamily: 'SF Pro Text',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '15px',
                    lineHeight: '18px',}}>back</p></BackButton>

            </BackCardWrapper>

        </BackCard>

        </ReactCardFlip>


  )
}


const FrontCard = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
align-items: start;
padding: 0px;
gap: 50px;

height: 524px;
width: 341px;


background: #000000;
border-radius: 20px;

`


const DescriptionWrapper = styled.div`
display: grid;
grid-template-rows: repeat(auto);
align-items: center;
padding: 10px;
gap: 20px;


height: 168px;

background: #FFFFFF;
border-radius: 0px 0px 20px 20px;

`

const DescriptionTitleWrapper = styled.div`
display: grid;
grid-template-columns: 48px auto;
align-items: center;
padding: 0px;
gap: 10px;

height: 48px;
`

const DescriptionTitle = styled.h2`


font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 48px;

`

const DescriptionText = styled.p`

width: 341px;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
`

const Button = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
justify-content: center;
align-items: center;
gap: 16px;
width: 126px;
height: 42px;
border-radius: 20px;
background: black;
`

const ButtonIcon = styled.img`
height: 24px;
width: 24px;
order: 1;
`

const ButtonTitle = styled(Caption)`
font-weight: 600;
color: white;


`
const ButtonWrapper = styled.div`
display: grid;
width: 321px;
height: 42px;
justify-items: end;
/* :hover {
    cursor: pointer;
    box-shadow: 0 0.4em 0.4em -0.4em;
    transform: translateY(-0.20em);
 
} */

`

const BackCard = styled.div`
display: grid;
align-items: center;
justify-items: center;
height: 524px;
width: 341px;
background-color: black;
border-radius: 20px;


`

const BackCardWrapper = styled.div`
display: grid;
grid-template-rows :repeat(2, auto);
padding: 0px;
gap: 107px;

width: 301px;
height: 484px;
`

const BackCardContentWrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
align-items: start;
padding: 0px;
gap: 15px;


width: 301px;
height: 335px;

`

const BackCardTopContent = styled.div`

`

const BackCardBottomContent = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
align-items: center;
gap: 23px;
`

const Image = styled.img`
width: 139px;
height: 160px;
border-radius: 20px;
object-fit: cover;
`
const BackButton = styled.div`
display: grid;
grid-template-columns: auto;
align-items: center;
gap: 16px;

width: 60px;
height: 42px;
justify-items: center;



background: #FFFFFF;
border-radius: 20px;



:hover {
    cursor: pointer;
    box-shadow: 0 0.4em 0.4em -0.4em;
    transform: translateY(-0.20em);
 
}
`