import React, { useEffect, useState } from 'react';
import { Nav } from './NavBar';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';





const Header = () => {
    const LogoUrl = "./logo/logo.png";
 
    return (
        <Header1>
            <div className="logo">
                <picture>
                    <NavLink to={"/"}> <img src={LogoUrl} alt="logo here" /></NavLink>
                </picture>
                <p>IMAGE AI</p>
            </div>
            
            <Nav/>
        </Header1>
    )
}

const Header1 = styled.header`
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    /* width: 100vw; */
    min-height: 12%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;

  
    
    .logo{
        display: flex;
        align-items: center; 
        picture{
            display: flex;
            align-items: center;
            img{
                padding: 0rem 2rem;
                width: 100px;
                border-radius: 51%;

            }
        }
        p{
        font-size: 16px;
        font-weight: 700;
        animation-name: slideIn-left;
        animation-duration: 3s;
        position: relative;
       
    }
       }
     
       @media (max-width:${({ theme }) => theme.media.m}) {
        .logo{
          picture{
             img{
              padding: 0rem 1rem;
              max-width: 8rem;
        }}}
        
       }
   
    `

export default Header