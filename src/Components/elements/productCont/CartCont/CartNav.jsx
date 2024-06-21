import React from 'react'
import styled from 'styled-components'
import { toggleClass } from '../../../../helper/DoumentHelper'
import { CartStatusoptions } from '../../../pages/DefaultPage/Cart'


const CartNav = ({ChangeStata}) => {

 
    return (
        <Wrapper>
            <div className="menuIcon">
                <ul>
                    <li className='Active Cblue' onClick={(e) => { ChangeStata(e.target.innerHTML); toggleClass(".menuIcon", e, "Active") }}>{CartStatusoptions[0]}</li>
                    <li className='' onClick={(e) => { ChangeStata(e.target.innerHTML);toggleClass(".menuIcon", e, "Active") }}>{CartStatusoptions[1]}</li>
                    <li className='Cblue' onClick={(e) => { ChangeStata(e.target.innerHTML); toggleClass(".menuIcon", e, "Active") }}>{CartStatusoptions[2]}</li>
                    <li className='Cgreen' onClick={(e) => { ChangeStata(e.target.innerHTML); toggleClass(".menuIcon", e, "Active") }}>{CartStatusoptions[3]}</li>
                    <li className='Cred' onClick={(e) => { ChangeStata(e.target.innerHTML);toggleClass(".menuIcon", e, "Active") }}>{CartStatusoptions[4]}</li>
                </ul>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.nav`
margin-top: 4rem;
height: 6rem;
width: 90%;
background-color: ${({ theme }) => theme.colors.bg};
border-radius: 1rem;

.Active{
    border-bottom: 2px solid tomato;
}
.menuIcon{
    height: inherit;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    ul{
    display: flex;
    gap: 4rem;
    li{
        list-style: none;
        font-size: large;
        font-weight: 600;
    }
    }
}

@media (max-width: ${({ theme }) => theme.media.m}){
    width: 100%;
.menuIcon{
    ul{
    gap: 2rem;
    li{
        list-style: none;
        font-size: 14px;
        font-weight: 600;
    }
    }
}
}

    
`
export default CartNav