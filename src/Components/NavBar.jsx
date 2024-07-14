import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from "react-icons/gi";
import { Logout } from "../helper/Logout.js";
import { SlArrowRightCircle } from "react-icons/sl";
import { useSelector } from "react-redux";
import { FaHistory } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";






export let Nav = () => {
  const {userData} = useSelector(state => state.user)

  const [active, setactive] = useState(false)

  const toggleMenu = () => {
    let Element = document.querySelector(".manuIcon")
    Element?.classList.toggle("active")
    setactive(false)
  }
  return (
    <NavBar>
      <div className="menuCont">
        {active ? <SlArrowRightCircle className="menu" onClick={() => { toggleMenu(); }} />
          : <GiHamburgerMenu className="menu" onClick={() => { toggleMenu(); setactive(true) }} />}
      </div>

      <div className=" manuIcon">
        <ul>
          <li> <NavLink to={"/"} onClick={() => toggleMenu()}>Home</NavLink> </li>
          {/* {userData.isAdmin?<li> <NavLink to={"/admin"}onClick={() => toggleMenu()}>Admin</NavLink> </li>:<> </> */}
          {/* } */}
          <li> <NavLink to={"/predction"} onClick={() => toggleMenu()}>Prediction</NavLink></li>
          <li> <NavLink to={"/diseaseinfo"} onClick={() => toggleMenu()}>Disease Info</NavLink></li>

          {/* <li><NavLink to={"/contuct"}onClick={() => toggleMenu()}>Contuct</NavLink></li> */}
          <li><NavLink to={"/history"} onClick={() => toggleMenu()}>History</NavLink></li>
          {
            userData.isLogin
              ? <li><NavLink  className="hoverRed" to={"#"} onClick={() => { toggleMenu(); Logout(); }}>Logout</NavLink></li>
              : <>
                <li><NavLink to={"/login"} onClick={() => toggleMenu()}>Login</NavLink></li>
                <li><NavLink to={"/signup"} onClick={() => toggleMenu()}>Signup</NavLink></li>
              </>
          }


        </ul>
      </div>

    </NavBar>

  );
};

const NavBar = styled.nav` 
display: flex;
align-items: center;
/* width: 100%; */
gap: 1rem;
animation: slideIn-right;
animation-duration: 3s;



.menuCont{
     display: none;
     }
  .manuIcon{
    margin-right: 10rem;
    display: flex;
    /* align-items: flex-end; */
    ul{
      display: flex;
      gap: 6rem;

      li{
        text-decoration: none;
        list-style: none;
        .hoverRed:hover{
         color: red;
}
        a{
          font-size: 20px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.heading};
          transition: all 0.1s linear;
          
        }
        a:hover{
            color: ${({ theme }) => theme.colors.hover1};
          }
          .HistoryIcon{
            font-size: 22px;
            
          }
      }
    }
  }


  @media (max-width:${({ theme }) => theme.media.t}) {
    
  }

  @media (max-width:${({ theme }) => theme.media.m}) {
    
    .manuIcon{
      
      width: 100%;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.bg};
      z-index: 90;
      position: absolute;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: center;

      /* transtation */
      transform: translateX(100%);
      transition: all 0.5s linear;
      opacity: 0;
      visibility: hidden;
      
      ul{
        flex-direction: column;
        gap: 3rem;

      }
      
    }
    .active{
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto; 
  }
    .menuCont{
      display: flex;
      margin-right: 2rem;
      .menu{
        font-size: 25px;
        z-index: 99;
        
      }
    }
  }
  
  `