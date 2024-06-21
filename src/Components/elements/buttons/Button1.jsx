import React from 'react'
import styled from 'styled-components'

const Button1 = (props) => {
    let {type,value,onClick,StyleData,CN}=props

    let IStyle = {
      width:  StyleData.width ? StyleData.width :"fit-content",
      height: StyleData.height ? StyleData.height :"fit-content",
      fontSize: StyleData.fontSize ? StyleData.fontSize :"20px",
      backgroundColor : StyleData.bg? StyleData.bg: '#8490ff',
      color : StyleData.color? StyleData.color: 'white',
      fontWeight:  StyleData.fontWeight?StyleData.fontWeight :"",
    };
   
    
  
  return (
    <Btn className={CN?CN:""} style={IStyle } type={type} onClick={onClick}>{value}</Btn>
  )
}

const Btn =styled.button`
     border:  none;
     border-radius: .5rem;
     padding: .2rem;
     transition: 600ms;
     &:hover{
      transform: scale(1.02);
      cursor:pointer;
     }
`

export default Button1