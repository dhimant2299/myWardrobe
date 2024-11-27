import React, { useState } from 'react';
import styled from "styled-components";
import plusIcon from "../../images/icon/plusIcon.svg"
import AddItemModal from '../Modals/AddItemModal';

export default function AddButton({openModal}) {
   


    return(
        <ButtonWrapper onClick={() => {openModal(true)
        }}>
            <ButtonContentWrapper>
                <img src={plusIcon} style={{width:"30px", height:"30px"}}/>
                <ButtonText>Add</ButtonText>
             </ButtonContentWrapper>
        </ButtonWrapper>
    )
}


const ButtonWrapper = styled.div`
display: grid;
grid-template-columns: center;
align-items: center;
justify-content: center;
width: 249px;
height: 349px;

background: #000000;
border-radius: 20px;

:hover {
    cursor: pointer;
    transition: ease-in 0.3s;
    width: 253px;
    height: 353px;
}

`

const ButtonContentWrapper = styled.div`
display: grid;
grid-template-rows: 25px auto;
align-items: center;
padding: 0px;
gap: 10px;
width: 29px;
height: 53px;
justify-content: center;
`

const ButtonText = styled.p`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: white;
`