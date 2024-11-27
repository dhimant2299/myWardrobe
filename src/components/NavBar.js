import React, { useState } from 'react';
import styled from 'styled-components'
import { menuData } from './layout/header';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import { BodyIntro } from '../styles/TextStyles';
import AuthModal from './Modals/AuthModal';

export default function NavBar({showAuthModal}) {





return (
    <nav>
        <Wrapper >
        <BodyIntro>myDrobe</BodyIntro>
            <MenuWrapper>
        {menuData.map((item, index) => (
            <CustomLink to={item.link}>
        <MenuItem key={index} title={item.title} onClick={() => (index == 3 && showAuthModal(true))}>
            <img src={item.icon} alt={item.title}/>
            {item.title}
            </MenuItem>
            </CustomLink>
   ))}
        </MenuWrapper>
        </Wrapper>
        
    </nav>


    
)
}

function CustomLink({to, children,  ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true}) 
    
    return(
        <List className={isActive ? "active": ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </List>
    )

}


const MenuItem = styled.div`
display: grid;
grid-template-columns: 24px auto;
gap: 10px;
align-items: center;
padding: 10px;
transition: 0.5s ease-out;
border-radius: 10px;
height: 24px;



:hover {
background: #F27A7D;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
border-radius: 10px;
}
`


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

const List = styled.li`
list-style: none;
`