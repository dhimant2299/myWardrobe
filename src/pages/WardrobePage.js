import * as React from "react";
import styled from "styled-components"
import NavSideBar from "../components/NavSideBar";
import WardrobeContent from "../components/section/WardrobePageSections/WardrobeContent";
import {Routes, Route} from "react-router-dom"
import Page2 from "../pages/page-2"
import OutfitGenerator from "../components/section/WardrobePageSections/OutfitGenerator";
export default function WardrobePage({children}) {
   
   
    return(
        <div>
       
       <Wrapper>
            <NavSideBar />
        {children}
       </Wrapper>
      
       </div>
    )
}


const Wrapper = styled.div`
position: absolute;
display: grid;
grid-template-columns: 260px auto;
top: 168px;
left: 68px;
width: 100%;
gap: 68px;
align-items: start;
`

const RandomPage = () => {
    <div>
        <p>Hello</p>
    </div>
}