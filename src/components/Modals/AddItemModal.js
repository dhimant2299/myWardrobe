import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import Select from "react-select"
import useUser from '../../contexts/UserContext'
import {AsyncSelect} from "react-select/async"
import xIcon from "../../images/icon/xIcon.svg"
import { clothType, topCatType, bottomCatType, shoesCatType, colorData} from '../data/ModalData'
import {API} from 'aws-amplify'
import {useCookies} from 'react-cookie'
export default function AddItemModal({closeModal}) {

  const [isOpen, setMenuOpen] = useState('');
  const [colorMenu, setColorMenu] = useState('')
  const [type, setType] = useState([]);
  const [userSelectType, setUserSelectType] = useState();
  const [userSeletColor, setUserSelectColor] = useState();
  const [file, setFile] = useState();
  const [previewURL, setPreviewURL] = useState();
  const ref = useRef(null);
  const [cookies, setCookie] = useCookies(['user'])
  const [testItem, setTestItem] = useState()
    const userId = cookies.userId

    const selectRef = useRef()


  const handleType = (selectedOption) => {
    setUserSelectType(selectedOption.value)
  }

  const handleColor = (selectedOption) => {
    setUserSelectColor(selectedOption.value)
    console.log('color is', selectedOption.value)
  }

  const item = {
    top: (type != shoesCatType && type != bottomCatType) ? userSelectType : '',
    bottom: (type != topCatType && type != shoesCatType) ? userSelectType : '',
    shoes: (type != topCatType && type != bottomCatType) ? userSelectType : '', 
    image: !file ? '' : file.name, 
    color: userSeletColor
  }

  useEffect(() => {
    const reader = new FileReader();
    if(file) {
      reader.onload = () => {
        setPreviewURL(reader.result);
        
      };
      reader.readAsDataURL(file)
    } else {
      setPreviewURL(null)
    }
  }, [type, file])
 


  return (
    <Overlay onClick={() => {
      closeModal(false)
      console.log("clicked")
    
      
    }}>
    <ModalContainer onClick={(e) => {e.stopPropagation()}}>
    <ModalWrapper style={{height: previewURL ? "742px" : "509px"}}>
      <Title1>Add Item</Title1>
      
      <div style={{justifySelf: 'center',}}>

    
       {previewURL ? <img src={previewURL} style={{width: '152px', height: '213px', borderRadius: '20px'}}/> : <div></div>}
      </div>
     <UploadButtonLabel  >
      Upload Image 
      <input type="file"  style={{display: "none"}} ref={ref} onChange={(e) => {
          setFile(e.target.files[0])
        
        
      }}/>
      </UploadButtonLabel>

 

    <ClothWrapper>
    
    <Title2>Choose Cloth type</Title2>

      
        <form >
           <ChoiceWrapper>
          <input type="radio" name="type" value={clothType[0].value} onChange={() => (
            setType(topCatType) 
           
  )} checked={type === topCatType}/>
            <img src={clothType[0].icon} />
          <label for={clothType[0].id} ><Title2>{clothType[0].title}</Title2></label>

          <input type="radio" name="type" value={clothType[1].value} onChange={()=> (
            setType(bottomCatType) 
          )} checked={type === bottomCatType}/>
            <img src={clothType[1].icon} />
          <label for={clothType[1].id} ><Title2>{clothType[1].title}</Title2></label>

          <input type="radio" name="type" value={clothType[2].value} onChange={() => (
            setType(shoesCatType) 
          
  )} checked={type === shoesCatType}/>
            <img src={clothType[2].icon} />
          <label for={clothType[2].id} ><Title2>{clothType[2].title}</Title2></label>
          </ChoiceWrapper>
        </form>
        

    </ClothWrapper>
<CategoryWrapper>
<Title2>Choose Category </Title2>
     <Select 
     ref={selectRef}
    onMenuOpen={() => (
      setColorMenu(true)
)}
    onMenuClose={() => (
      setColorMenu(false)
)}

    onChange={handleType}
    options={type}
    
    />

</CategoryWrapper>
<CategoryWrapper>
<Title2>Choose color </Title2>
     <Select 
    
    
    onMenuOpen={() => (
      setMenuOpen(true)
)}
    onMenuClose={() => (
      setMenuOpen(false)
)}
      onChange={handleColor}
    options={colorData}
    />

</CategoryWrapper>


      <ButtonWrapper>
          <Button onClick={() => {
            closeModal(false)
            console.log("clicked")
          }}
          >CANCEL</Button>
          <Button onClick={console.log('item is', item)}>ADD</Button>
      </ButtonWrapper>
    </ ModalWrapper>
    </ModalContainer>

    </Overlay>
  )

  
}

const Overlay = styled.div`
position: absolute;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 20px;
width: 75%;
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

const ModalWrapper= styled.div`
display: grid;
grid-template-rows: repeat(5, auto);
gap: 20px;
padding: 20px;
background: #EEE9D6;
border: 1px solid #000000;
border-radius: 20px;
width: 412px;
justify-content: center;
transition: ease-in 0.3s;
`


const Icon = styled.img`
width: 25px;
height: 25px;
`
const Title1 = styled.p`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
justify-self: center;
`
const Title2 = styled.p`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
justify-content: center;
`

const UploadButtonLabel = styled.label`
font-family: "SF Pro Text";
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
display: grid;
grid-template-rows: auto;
align-items: center;
justify-self: center;
justify-content: center;
color: white;
width: 140px;
height: 38px;

background: #F27A7D;
border-radius: 14px;



  :hover {
    cursor: pointer;
    transition: ease-in 0.4s;   
    background: black;
  }

`
const ClothWrapper = styled.div`
display: grid;
grid-template-rows: repeat(4, auto);
gap: 15px;
align-items: start;
height: 138px;
width: 372px;
`

const ChoiceWrapper = styled.div`
display: grid;
grid-template-columns: 24px 24px auto;
gap: 10px;
height: 25px;
align-items: center;
`

const CategoryWrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
padding: 0px;
align-items: start;
gap: 15px;
width: 372px;
height: 73px;
`

const Button = styled.button`
color: white;

background: black;
border-radius: 14px;
padding: 10px 20px;
border: none;

:hover {
    cursor: pointer;
    transition: ease-in 0.4s;   
    background: #F27A7D;
    border: none;
  }
`

const ButtonWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
align-items: start;
gap: 198px;
height: 38px;


`