import React from 'react'
import styled from 'styled-components'
import {  useSelector } from "react-redux";


  const HeroSection = ({image,line,heading}) => {
    const {logo2 ,logo} = useSelector((state) => state.color)
  
    return (
      <Herosectioncom className='grid grid-2-c'>
        <div className="heroImg">
          <img src={image} alt="" />
        </div>
        <div className="heroTitle">
          <h3 style={{color:logo}}>{heading}</h3>
          <p>{line}</p>
        </div>
      </Herosectioncom>
    )
  }
  
  const Herosectioncom = styled.section`
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0rem  10rem;
  margin-top: 1rem;
  
  .heroImg{
    display:flex;
    align-items: center;
    justify-content: center;
    animation: slideIn-top;
    animation-duration: 3s;
    
    img{
      height:35rem;
  
    }
  }
  .heroTitle{
    animation: slideIn-right;
    animation-duration: 5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    h3{
      font-size: 24px;
      font-weight: 700;
    }
    p{
      font-weight: 600;

    }
  }
  @media  (max-width : ${({theme})=>theme.media.t}){ 
   gap: 3rem;
   .grid{
      justify-items: center;
     }
   .heroTitle{
    justify-content:center;
  
   }
    }
  
    /* mobile */
  @media  (max-width : ${({theme})=>theme.media.m}){ 
    padding: 0rem  0rem;
    &.grid{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0rem;
  }
    .heroImg{
    img{
      height:85vw;
    }
  }
  .heroTitle{
    display:flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    padding: 0rem 1rem ;
    
    h3{
      font-size: 20px;
      font-weight: 600;
    }
    p{
 text-align: justify;
    }
  }
  
    
    .grid-2-c{
      grid-template-columns:1fr;  
  }
   
  }
  `
  
  export default HeroSection
