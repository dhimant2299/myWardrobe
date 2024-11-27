import React from 'react'
import styled from "styled-components"
import icon from "../../images/icon/arrowBlack.svg"

export default function ReadCardComponent(props) {
    const {title, image} = props;
    return(
        <CardWrapper>
            <ImageAndTitleWrapper>
            
            <Image src={image} />
            <Title>{title}</Title>
            
            </ImageAndTitleWrapper>
            <Button>
                <ButtonTitle>Read</ButtonTitle>
                <ButtonIcon src={icon} />
            </Button>
           
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
width: 400px ;
height: 451px;

background: white;
border-radius: 20px;
`


const ImageAndTitleWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
    align-items: center;
    gap: 30px;
    width: 356px;
    height: 299.88px;
    justify-self: center;
    padding-top: 30px;


`


const Title = styled.h3`
    font-family: "SF Pro Text";
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: black;
    justify-self: center;
`

const Image = styled.img`
width: 356px;
height: 240.88px;
border-radius: 20px;
object-fit: cover;
`

const Button = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
align-items: center;
gap: 10px;
width: 82px;
height: 24px;
justify-self: center;
`

const ButtonTitle = styled.p`
font-family: "SF Pro Text";
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: black;
`

const ButtonIcon = styled.img`
height: 24px;
color: black;
`

