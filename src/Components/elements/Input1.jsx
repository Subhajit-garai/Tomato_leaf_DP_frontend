import React from 'react'
import styled from 'styled-components'

const Input1 = ({ placeholder, value, onChange, type, name, height ,width}) => {
  const IStyle = {
    width: width,
    height: height
  };
  return (
    <Input1s style={IStyle} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    
  )
}
const Input1s = styled.input`
 border: 2px solid ${({ theme }) => theme.colors.helper};
 border-radius: 0.2rem;
 text-align: center;  
`


export default Input1