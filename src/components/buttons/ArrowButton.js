import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import { Caption } from '../../styles/TextStyles';

export default function ArrowButton(props) {
    const {title, icon, color} = props;
    return(
        <Link to="/page-2">
        <ButtonWrapper color={color}>
           <ButtonTitle>{title}</ButtonTitle>
            <ButtonIcon src={icon} />
        </ButtonWrapper>
        </Link>
    )



}

const ButtonWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
justify-content: center;
align-items: center;
padding: 12px;
gap: 16px;
width: 162px;
height: 42px;
border-radius: 30px;
background: ${props => props.color || "black"};

:hover {
    cursor: pointer;
}


`

const ButtonIcon = styled.img`
height: 24px;
order: 1;
`

const ButtonTitle = styled(Caption)`
font-weight: 600;
color: white;


`

