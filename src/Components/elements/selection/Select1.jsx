import React from 'react'
import styled from 'styled-components';

const Select1 = (props) => {
    let {key,name,value,ID,OptionArr,onChange,StyleData}=props;
    let IStyle = {
      width:  StyleData ? StyleData.w :"fit-content",
      height: StyleData ? StyleData.h :"fit-content",
      fontSize: StyleData ? StyleData.fs :"16px"
    };
  
  return (
    <>
      <Section1S style={IStyle} name={name} id={ID}  onChange={onChange} value={value}>
             {OptionArr.map((ele)=>(<option key={ele} value={ele}>{ele}</option>))}
         
        </Section1S>
    </>
  )
}

const Section1S= styled.select`
border: none;
padding: 0 .5rem;
`

export default Select1