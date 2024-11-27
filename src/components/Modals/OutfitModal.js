import React from 'react'
import styled from "styled-components"


export default function OutfitModal(props) {
    const {top, bottom, shoe, closeModal} = props 
  return (
    <Overlay onClick={() => {props.closeModal(false)
    console.log("isCLickedonModal")
    }}>
    <ModalContainer onClick={(e) => {e.stopPropagation()}}>
    <BackCard>

            <BackCardWrapper>
            <BackCardContentWrapper>
                 <BackCardTopContent>
                     <Image src={top} />
                </BackCardTopContent>

            <BackCardBottomContent>
                <Image src={bottom} />
                <Image src={shoe} />

            </BackCardBottomContent>
           
            </BackCardContentWrapper>
            </BackCardWrapper>

        </BackCard>
        </ModalContainer>
        </Overlay>
  )
}
const Overlay = styled.div`
position: absolute;
background-color: rgba(0, 0, 0, 0.7);
border-radius: 20px;
width: 100%;
height: 100%;
`

const ModalContainer = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
border-radius: 20px;
`



const BackCard = styled.div`
display: grid;
align-items: center;
justify-items: center;


width: 571.37px;
height: 628.34px;
background-color: black;
border-radius: 20px;


`

const BackCardWrapper = styled.div`
display: grid;
grid-template-rows :repeat(2, auto);
padding: 0px;
gap: 107px;
border: none;
width: 504.35px;
height: 561.32px;
`

const BackCardContentWrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
align-items: start;
padding: 0px;
gap: 15px;


width: 504.35px;
height: 561.32px;

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
width: 232.9px;
height: 268.09px;
border-radius: 20px;
object-fit: cover;
`
