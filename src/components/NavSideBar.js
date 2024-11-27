import React from "react"
import {Link, useMatch, useResolvedPath } from "react-router-dom"
import styled from "styled-components"
import closetIcon from "../images/icon/closetIcon.svg"
import outfitIcon from "../images/icon/outfitIcon.svg"
import cleanIcon from "../images/icon/cleanIcon.svg"
export default function NavSideBar({children}) {

    const ButtonItem = [
        {
            title: "Wardrobe",
            icon: closetIcon,
            link: "/WardrobePage/",
            width: "146px",  
        }, 
        {
            title: "Outfit generator",
            icon: outfitIcon,
            link: "/WardrobePage/outfitgen/", 
            width: "192px", 
        }, 
        {
            title: "Organize",
            icon: cleanIcon,
            link: "/WardrobePage/page-2/", 
            width: "133px", 
        }
        

    ]

    return(
       
        <nav>
        <Wrapper>
            <NavBarTitle>Navigation</NavBarTitle>           
             {
                ButtonItem.map((item, index) => (
                    <CustomLink to={item.link} >
                    <NavBarButton title={item.title} key={index} style={{width: item.width}}>
                    <img src={item.icon} style={{width: '24px', height:'24px'}}/>
                    <ButtonTitle>{item.title}</ButtonTitle>
                    </NavBarButton>
                    </CustomLink>
                    
                ))
            }
        </Wrapper>
        </nav>
      
        
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <List className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </List>
    )
}



const Wrapper = styled.div`
display: grid;
grid-template-rows: repeat(4, auto);
align-items: start;
width: 192px;
height: 254px;
gap: 30px;
padding: 0;
`

const NavBarTitle = styled.h3`
font-family: "SF Pro Text";
font-style: normal;
font-size: 24px;
line-height: 29px;
color: black;

`

const NavBarButton = styled.div`
display: grid;
grid-template-columns: 24px auto;
gap: 10px;
align-items: center;
height: 45px;
padding: 10px 20px;
transition: 0.5s ease-out;
border-radius: 14px;



:hover {
background: #D4A373;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
border-radius: 10px;
}
`

const ButtonTitle = styled.p`
font-family: "SF Pro Text";
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: black;
`

const List = styled.li`
list-style: none;
`