import React, { useState } from 'react'
import styled from "styled-components"
import outfitIcon from "../../../images/icon/outfitIcon.svg"
import OutfitCardComponent from '../../card/OutfitCardComponent'
import weatherIcon from "../../../images/icon/weatherIcon.svg"
import weatherBackground from "../../../images/background/weatherBackground.svg"
import loveIcon from "../../../images/icon/loveIcon.svg"
import loveBackground from "../../../images/background/loveBackground.svg"
import movieIcon from "../../../images/icon/movieIcon.svg"
import movieBackground from "../../../images/background/movieBackground.svg"
import handshakeIcon from "../../../images/icon/handshakeIcon.svg"
import businessBackground from "../../../images/background/businessBackground.svg"
import questionMarkIcon from "../../../images/icon/questionMarkIcon.svg"
import dressingBackground from "../../../images/background/dressingBackground.svg"
import celebrationIcon from "../../../images/icon/celebrationIcon.svg"
import celebrationBackground from "../../../images/background/celebrationBackground.svg"
import OutfitModal from '../../Modals/OutfitModal'

import top from "../../../images/clothes/top.jpeg"
import bottom from "../../../images/clothes/bottom.jpeg"
import shoe from "../../../images/clothes/shoe.jpeg"

export default function OutfitGenerator() {

  const [isOpenModal, setOpenModal] = useState();

  return (
    <Wrapper>
      <NavTitleWrapper>
      <img src={outfitIcon} />
        <NavTitle>Outfit Generator</NavTitle>
      </NavTitleWrapper>

    <ContentWrapper>
    <OutfitCardComponent icon={weatherIcon} title='Weather' description='IDK what to wear. But check that weather tho.' background={weatherBackground} showModal={() => {setOpenModal(true)}} />
    <OutfitCardComponent icon={loveIcon} title='Dates' description='Trying to impress yo girl. I gotchu.' background={loveBackground}/>
    <OutfitCardComponent icon={movieIcon} title='Netflix & Chill' description='Let her pick the movie cuz we are not gonna be watching.' background={movieBackground}/>
    <OutfitCardComponent icon={handshakeIcon} title='Business' description='It’s about to go down boys!' background={businessBackground}/>
    <OutfitCardComponent icon={questionMarkIcon} title='Random' description='I can’t make up my mind.' background={dressingBackground}/>
    <OutfitCardComponent icon={celebrationIcon} title='Party' description='!' background={celebrationBackground}/>

    </ContentWrapper>
      
      {isOpenModal && <OutfitModal top={top} bottom={bottom} shoe={shoe} closeModal={setOpenModal}/>}

    </Wrapper>
  )
}


const Wrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
gap: 60px;

`


const NavTitleWrapper = styled.div`
display: grid;
grid-template-columns: 24px auto;
align-items: center;
padding: 0px;
gap: 10px;
width: 226px;
height: 29px;
`

const NavTitle = styled.div`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
`

const ContentWrapper = styled.div`

display: grid;
grid-template-columns: repeat(auto-fill, minmax(341px, 1fr));
gap: 50px;
align-items: start;
width: 100%;
`