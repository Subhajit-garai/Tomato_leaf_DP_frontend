import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { factchProduct } from '../../../helper/action/AsyncAction'
import Productcard from './ProductCard'
import _ from 'lodash';
import { NavLink } from 'react-router-dom'

const CommonProduct_list = () => {

    let { products } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    let [featureProduct,setfeatureProduct ]  =useState([])
    useEffect(() => {
        if (!products.length) {
            factchProduct(dispatch)
        }
        setfeatureProduct( _.sampleSize(products, 4))

    }, [])

    return (
        <>
            <COMMONProduct>
                <h6>FEATURE PRODUCTS</h6>
                <div className="_product_cont">
                    {
                         featureProduct.map((product,i) =>{

                            return (
                                <NavLink to={'/product'} ><Productcard Pdata={product} displayAdminRoute={false} key={i}/></NavLink>
                            )
                         })
                        
                    }

                </div>
            </COMMONProduct>

        </>
    )
}

const COMMONProduct = styled.div`
background-color: ${({ theme }) => theme.colors.bg};
min-height: 35rem;
width: 100%;
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h6{ 
    margin-bottom: 2rem;
}
._product_cont{
    height: 80%;
    gap: 3rem;
    display: flex;
}

@media (max-width:${({ theme }) => theme.media.m}) {
    /* overflow-x: auto; */
    ._product_cont{
       overflow-x: scroll;
    }
}
    

`

export default CommonProduct_list