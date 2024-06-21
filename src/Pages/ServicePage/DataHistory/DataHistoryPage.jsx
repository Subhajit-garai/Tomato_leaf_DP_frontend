import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"

const DataHistoryPage = () => {

const color = useSelector(state => state.color)
const [Avlcolors,setAvlcolors] = useState(Object.values(color))
  return (
   <Wrapper>
     <h1>DataHistory</h1>
   {/*  changing color */}



   </Wrapper>
  )
}

export default DataHistoryPage


const Wrapper = styled.section`
  
`