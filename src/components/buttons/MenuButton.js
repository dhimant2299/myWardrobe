import React, { } from "react"
import styled from "styled-components"
import { Link } from "gatsby"


export default function MenuButton(props) {
    const {item} = props


    


    return(
        <nav>
        <Link to={item.link} onClick={props.onClick}>
            <MenuItem title={item.title}>
            <img src={item.icon} alt={item.title}/>
            {item.title}
            </MenuItem>
        </Link>

        </nav>
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