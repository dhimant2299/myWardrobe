import React from 'react'
import MenuButton from '../buttons/MenuButton'
import styled from "styled-components"
import homeIcon from "../../images/icon/homeIcon.svg"
import exploreIcon from "../../images/icon/exploreIcon.svg"
import hangerIcon from "../../images/icon/hangerIcon.svg"
import shopIcon from "../../images/icon/shopIcon.svg"
import profileIcon from "../../images/icon/profileIcon.svg"


import { BodyIntro } from '../../styles/TextStyles'
 export const menuData
 = 
[
    {
    title: "Home",
    icon: homeIcon ,
    link: "/",
    }, 
     {
    title: "Explore",
    icon: exploreIcon,
    link: "/page-2/",
    }, 
     {
    title: "Wardrobe",
    icon: hangerIcon,
    link: "/WardrobePage/",
    }, 
     {
    title: "Account",
    icon: profileIcon,
    link: "",
    }, 
    
]



export default function Header() {
    return(
        <nav>
        <Wrapper>
            <BodyIntro>myDrobe</BodyIntro>
        <MenuWrapper>
        {menuData.map((item, index) => (
            <MenuButton item={item} key={index} />
    ))}
  
       </MenuWrapper>

        </Wrapper>
        </nav>
    )
}

const Wrapper = styled.div`
position: absolute;
top: 60px;
display: grid;
grid-template-columns: 44px auto;
width: 90%;
justify-content: space-between;
padding: 0 30px;
align-items: center;
 `


const MenuWrapper = styled.div`
display: grid;
gap: 30px;
grid-template-columns: repeat(5 ,auto);
border-radius: 14px;

`
