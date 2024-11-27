import React, { useEffect, useState } from "react"
import styled from "styled-components"
import closetIcon from "../../../images/icon/closetIcon.svg"
import topIcon from "../../../images/icon/shirtIcon.svg"
import bottomIcon from "../../../images/icon/bottomIcon.svg"
import shoesIcon from "../../../images/icon/shoeIcon.svg"
import AddButton from "../../buttons/AddButton"
import listIcon from "../../../images/icon/listIcon.svg"
import AddItemModal from "../../Modals/AddItemModal"

import topImage from "../../../images/clothes/top.jpeg"
import bottomImage from "../../../images/clothes/bottom.jpeg"
import shoeImage from "../../../images/clothes/shoe.jpeg"
import useUser from "../../../contexts/UserContext"


export default function WardrobeContent() {
    const [openModal, setOpenModal] = useState(false);
    const [content, setContent] = useState(AllContent);
    
    
    useEffect(() => {
        
    }, [content])
const NavItem = [
    {
        title: "All",
        icon: listIcon,
        content: AllContent,
    },
    {
        title: "Top",
        icon: topIcon,
        content: TopContent,
    }, 
    {
        title: "Bottom",
        icon: bottomIcon,
        content: BottomContent,
    }, 
    {
        title: "Shoes",
        icon: shoesIcon,
        content: ShoeContent,
    },
]


    return(
    
        <Wrapper>
                <NavigationWrapper>
                    <NavTitleWrapper>
                        <img src={closetIcon} />
                        <NavTitle>Wardrobe</NavTitle>
                
                    </NavTitleWrapper>

                    <ButtonWrapper>
                        {
                            NavItem.map((item, index) => (
                                <Button key={index}>
                                    <img  style={{width: "100px;", height: "35px;" }}src={item.icon} />
                                    <ButtonTitle onClick={()=> {
                                        setContent(item.content)
                                    }} key={index}>{item.title}</ButtonTitle>
                                </Button>

                                
                            ))
                        }
                    </ButtonWrapper>
                </NavigationWrapper>
                   
                        <ContentWrapper>
                       
                        <AddButton openModal={() => (setOpenModal(true)
                            )}/>
                        </ContentWrapper>
                        
                    {openModal && <AddItemModal closeModal={setOpenModal}/>}
                  
        </Wrapper>
    )
}

const AllContent = () => (
    <>
      
        <Image src={topImage} />
        <Image src={topImage} />
        <Image src={topImage} />
        <Image src={topImage} />
        <Image src={bottomImage} />
        <Image src={shoeImage} />
      
    </>
)

const TopContent = () => (
    <>
        <Image src={topImage} />
    </>
)


const BottomContent = () => (
    <>
        <Image src={bottomImage} />
    </>
)


const ShoeContent = () => (
    <div>
        <Image src={shoeImage} />
    </div>
)

const Wrapper = styled.div`
display: grid;
grid-template-rows: repeat(3, auto);
align-items: start;
padding: 0px;
gap: 30px;
width: 100%;
`

export const NavTitleWrapper = styled.div`
display: grid;
grid-template-columns: 24px auto;
align-items: center;
padding: 0px;
gap: 10px;
width: 151px;
height: 29px;
`

const NavTitle = styled.div`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
`

const NavigationWrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
align-items: start;
gap: 30px;
width: 390px;
height: 84px;

`
const ButtonWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, auto);
padding: 0px;
gap: 60px;
width: 390px;
height: 25px;

`

const Button = styled.div`
display: grid;
grid-template-columns: 24px auto;
align-items: center;
padding: 0px;
gap: 10px;
width: 62px;
height: 25px;

:hover {
    cursor: pointer;
}

`
const ButtonTitle = styled.p`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
:hover {
    color: #D4A373;
}
`

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 15px;
align-items: start;
width: 100%;



`

const Image = styled.img`

width: 249px;
height: 350px;
border-radius: 20px;

:hover {

transition: ease-in 0.5s;
width: 253px;
height: 353px;
}
`

const CustomWrapper = styled.div`

`