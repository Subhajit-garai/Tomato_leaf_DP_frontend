import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"

const DataHistoryComponent = () => {

const color = useSelector(state => state.color)
const [Avlcolors,setAvlcolors] = useState(Object.values(color))
  return (
   <Wrapper>
     <h1>DataHistory</h1>
   {/*  changing color */}

   <div className="colorbox">
   {
    Avlcolors.map((color)=> <Colorboxelement color={color}/>)
   }

   </div>

   </Wrapper>
  )
}

export default DataHistoryComponent


const Wrapper = styled.section`
  
`