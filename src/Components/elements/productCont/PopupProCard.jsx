import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormatPrice } from '../../../helper/FormatPrice';
import Input1 from '../Input1'
import { FaMinus, FaPlus } from "react-icons/fa";
import Button1 from '../buttons/Button1';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addproductIntoNewCart } from '../../../redux/slices/cartSlice';


const PopupProCard = ({ Pdata, onClose }) => {
    let { ispacked, image, name, category, price, weight } = Pdata
    const dispatch = useDispatch()
    const [cprice, setcprice] = useState(price);
    const [PktQT, setPktQT] = useState(1);
    const [cweight, setcweight] = useState(weight);

    const addtocart = (price, weight, PktQT, Pdata) => {
        dispatch(addproductIntoNewCart(price, weight, PktQT, Pdata)
        )
        toast.success("Product added", { autoClose: 500 })
    }

    function handleInputPrice(e) {
        setcprice(e.target.value);
        let newWeight = ((weight / price) * e.target.value).toFixed(2);
        setcweight(newWeight);
    };
    const handleInputWeight = (e) => {
        setcweight(e.target.value);
        let newPrice = ((price / weight) * e.target.value).toFixed(2);
        setcprice(newPrice)
    };

    useEffect(() => {
        setcprice(price * PktQT);
    }, [PktQT, price, weight])



    return (
        <Wrapper className='POPmodal'>
            <div className='product-main-cont'>
                <div className="porductData">
                    <div className="imgCont">
                        <img src={image} alt={`${name} img`} />
                        <div className="categortCont">
                            <p>{category}</p>
                        </div>
                        {ispacked == "PKT" ? (<div className="PKTCont">
                            <p>PKT</p>
                        </div>)
                            : ""}
                    </div>
                    <div className="Product-data">
                        <h5 id='Pname'>{name}</h5>
                        <p className='PriceCont'>{FormatPrice(price)}</p>

                    </div>
                    {ispacked === "PKT"
                        ? <div className="inputsPdataName">
                            <p>Select pkt qt.</p>
                        </div>


                        : <div className="inputsPdataName">
                            <p >Price(<span>Rs.</span>)</p>
                            <p >weight(<span>g.</span>)</p>
                        </div>

                    }
                    {ispacked === "PKT"
                        ?
                        <div className="PktIndata">
                            <div className="PriceValue ">
                                <p>Price <span>Rs.</span>{price}</p>
                            </div>
                            <div className="Inc_Dec ">
                                <FaMinus className='icon Cred' onClick={() => { PktQT >= 2 ? setPktQT(PktQT - 1) : setPktQT(PktQT) }} />
                                <Input1 type="text" value={PktQT} height="3rem" width="20%" placeholder="Enter Weight" name='PpktQt' onChange={(e) => { handleInputWeight(e) }} />
                                <FaPlus className='icon Cgreen' onClick={() => { setPktQT(PktQT + 1) }} />
                            </div>
                        </div>
                        :

                        <div className="inputsPdata">
                            <Input1 type="text" value={cprice} height="3rem" width="40%" placeholder="Enter Price" name='Pprice' onChange={(e) => { handleInputPrice(e) }} />
                            <Input1 type="text" value={cweight} height="3rem" width="40%" placeholder="Enter Weight" name='Pweight' onChange={(e) => { handleInputWeight(e) }} />
                        </div>
                    }
                    <div className="actionButton">
                        <Button1 type="button" StyleData={{ h: "3rem", w: "40%" }} value="Cancel" onClick={() => { onClose() }} />
                        <Button1 type="Submit" StyleData={{ h: "3rem", w: "40%" }} value="Add" onClick={() => { addtocart(cprice, cweight, PktQT, Pdata); onClose() }} />
                    </div>



                </div>
            </div>
        </Wrapper >
    )
}

const Wrapper = styled.section`
.product-main-cont{
height: fit-content;
background-color: ${({ theme }) => theme.colors.white};
padding: 2rem;
border-radius: 1rem;
.porductData{
    display: flex;
    width: 30rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .imgCont{
        height: fit-content;
        width: fit-content;
        position: relative;
        img{
            height: 20rem;
            width: 30rem;
            border-radius: 1rem;
        }
        .categortCont{
            width: 12rem;
            height: 3rem;
            border-radius: .5rem;
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 1rem;
            margin-right: 2rem;
            background-color: ${({ theme }) => theme.colors.white};
            box-shadow:${({ theme }) => theme.colors.shadowSupport} ;
            display: flex;
            justify-content: center;
            align-items: center;
            
            /* background-color: green; */
            p{
                padding: 1rem;
                color:${({ theme }) => theme.colors.hover1} ;
                font-weight: 700;
            }
        }
        .PKTCont{
            width: 8rem;
            height: 3rem;
            border-radius: .5rem;
            position: absolute;
            bottom: 0;
            right: 0;
            margin-bottom: 1rem;
            margin-right: 2rem;
            background-color: ${({ theme }) => theme.colors.white};
            box-shadow:${({ theme }) => theme.colors.shadowSupport} ;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                padding: 1rem;
                color:${({ theme }) => theme.colors.misty} ;
                font-weight: 700;
                
            }
        }
    }
    .Product-data{
        width: 100%;
        display: flex;
        gap: 1rem;
        padding: 1rem;
        justify-content: space-evenly;
        .PriceCont{
            font-weight: 700;
            /* font-family: Verdana; */
        }

    }

    .inputsPdataName{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        p{
        font-size: 18px; 
        font-weight :600 ;
        span{
            color:${({ theme }) => theme.colors.hover1}
        }
        }
    }

    .inputsPdata{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
     
      
     }

     .PktIndata{
        display: flex;
        align-items: center;
        /* justify-content: space-evenly; */
        /* gap: 1rem; */
        .Inc_Dec{
            width:50%;
            display: flex;
            align-items: center;
            justify-content: space-evenly; 
            .icon{
            font-size: 18px;

         }  

            }
        .PriceValue{
            display: flex;
            width:50%;
            justify-content: center;
            p{
                font-weight: 600;
                span{
                    color:${({ theme }) => theme.colors.hover1};
                    font-weight: 600;
                }
            }
        }
            
     }

    .actionButton{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

     

    
}}
    
`
export default PopupProCard