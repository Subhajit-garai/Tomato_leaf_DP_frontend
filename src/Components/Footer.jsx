import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const Footer = () => {



  return (
    <Footer1>
      <div className="floting-cont"><h5>Thank you</h5></div>
      <div className="footer-cont ">
        <div className="footer-slogun">
          <h3>Hope you found !</h3>
          <p>Your Needs</p>
        </div>


        <div className="footer-info">
          <div className="cont">
            <h5>LINKS</h5>
            <p> <NavLink to={"/"}>Home</NavLink> </p>
            <p> <NavLink to={"/predction"}>Predction</NavLink></p>
            <p> <NavLink to={"/diseaseinfo"}>Diseaseinfo</NavLink></p>
            <p><NavLink to={"/history"}>History</NavLink></p>
          </div>

          <div className="cont">
            <h5>DEVELOP BY</h5>
            <a href="https://www.linkedin.com/in/subhajit-garai-9a6a26248/"><p>SUBHAJIT GARAI</p></a>

          </div>
        </div>
      </div>


    </Footer1>
  )
}
const Footer1 = styled.footer`
/* margin-top: 1rem; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1rem;

h5{   
     color: ${({ theme }) => theme.colors.hover1};
    }

.floting-cont{
  background-color: ${({ theme }) => theme.colors.bg};
  height: 30%;
  width: 60%;
  border-radius: 0.8rem;
  transform: translateY(50%);
  box-shadow: ${({ theme }) => theme.colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  h5{  
    font-size: 20px;
}

}
.footer-cont{
height: 40vh;
width: 100vw;
background-color: ${({ theme }) => theme.colors.footer_bg};
color: ${({ theme }) => theme.colors.white} ;
display: flex;
flex-direction: column;
gap: 2rem;



.footer-slogun{
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  h3{
    font-weight: 700;
    color: ${({ theme }) => theme.colors.hover1};
  }
  
}

.footer-info {
 display: flex;
 justify-content: space-around;
 padding: 0rem 15rem;
}



}
@media  (max-width:${({ theme }) => theme.media.t}){
  

}
@media  (max-width:${({ theme }) => theme.media.m}){

.footer-cont{
 
.footer-info {
 justify-content: space-between;

 display: flex;
 padding: 0rem 2rem;

}

}

}

`
export default Footer