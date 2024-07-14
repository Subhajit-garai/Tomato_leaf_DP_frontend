import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button1 from '../elements/buttons/Button1'
import { SurverRequest } from '../../helper/SurverRequest'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { sendCartToLocalDb } from '../../redux/slices/cartSlice';



const NotifyCont = ({ closeModal }) => {
    const { carts, cartID } = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const SendCartData = async () => {
        let newCarturl = `${process.env.REACT_APP_SURVER_DOMAIN}/api/v1/cart/new`
       


        // SurverRequest("POST", newCarturl, Cart).then((res) => {
        //     toast.success("`")
        // })
    }



    return (
        <Wrapper>
            <div className='notifyCont'>
                <p>Submit Current Cart</p>
                { }
                <Button1 type="button" StyleData={window.innerWidth < 600 ? { h: "3rem", w: "6rem" } : { h: "4rem", w: "10rem" }} value="Cancle" onClick={() => { closeModal(false) }} />
                <Button1 type="button" StyleData={window.innerWidth < 600 ? { h: "3rem", w: "5rem" } : { h: "4rem", w: "10rem" }} value="Drft" onClick={() => { sendCartToLocalDb(); closeModal(false) }} />
                <Button1 type="button" StyleData={window.innerWidth < 600 ? { h: "3rem", w: "6rem" } : { h: "4rem", w: "10rem" }} value="Submit" onClick={() => { SendCartData(); closeModal(false) }} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    right: 5%;
    bottom:0;
    width: fit-content;    
    height: fit-content;
    gap: 1rem;
    margin-bottom: 5rem;
    padding: 1rem;
    .notifyCont{
        display: flex;
        gap: 1rem;
        height: 6rem ;
        border-radius: 1rem;
        width: fit-content;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.hover1};
        padding: 1rem;
        align-items: center;
        justify-content: center;
        box-shadow:${({ theme }) => theme.colors.shadowS1} ;
        p{
            font-size: 18px;
            padding: 1rem;
            font-weight: 600;
        }
        button{
            transition: all 0.1s linear;
        }
        button:hover{
            transform: scale(1.1);
        }

    }
    @media (max-width: ${({ theme }) => theme.media.m} ){
    right: 5%;
    bottom:0;
    gap: .5rem;
    margin-bottom: 5rem;
    padding: .5rem;
    .notifyCont{
        display: flex;
        gap: .5rem;
        height: 6rem ;
        border-radius: 1rem;
        width: fit-content;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.hover1};
        padding: 1rem;
        p{
            font-size: 14px;
            padding: .5rem;
            font-weight: 600;
        }

    }
    }
 `

export default NotifyCont