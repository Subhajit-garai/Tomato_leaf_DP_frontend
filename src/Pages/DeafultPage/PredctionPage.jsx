import React from 'react'
import styled from 'styled-components'
import ImageInpute from "../../Components/ImageInputeComponent/ImageInpute.jsx"
const PredctionPage = () => {
  return (
    <Wrapper className='predictionPage'>
        <ImageInpute/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
width: 100%;
height: 100%;
`

export default PredctionPage