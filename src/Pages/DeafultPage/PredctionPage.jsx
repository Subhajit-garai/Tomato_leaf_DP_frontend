import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageInpute from "../../Components/ImageInputeComponent/ImageInpute.jsx"
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Components/elements/loader/Loader.jsx'
const PredctionPage = () => {

  const {  isloading } = useSelector((state) => state.app)
  const dispatch = useDispatch();

  useEffect(() => {

  }, [isloading])
  return (
    <Wrapper className='predictionPage '>
      {
        isloading 
        ?<Loader type={"bar"} />
        : <ImageInpute />
      }

       

    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
width: 100%;
min-height: 100vh;
`

export default PredctionPage