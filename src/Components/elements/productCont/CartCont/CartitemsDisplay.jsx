import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { PopUpWInModel } from "../../../component/PopUpWInModel"
import { FormatPrice } from '../../../../helper/FormatPrice';
import { FormatWeight } from '../../../../helper/FormatWeight';
import { MdDelete } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import Button1 from '../../buttons/Button1';
import { useColorContext } from '../../../../context/ColorContext';
import { SurverRequest } from '../../../../helper/SurverRequest';
import PopupProCard from '../PopupProCard';

import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from '../../../../redux/slices/productSlice';
import { AsyncMiddwear } from '../../../../helper/AsyncMiddwear';
import { deleteCart, userAllCart } from '../../../../redux/slices/cartSlice';



const CartitemsDisplay = ({ Data }) => {
    const { products } = useSelector((state) => state.product)
    const { user } = useSelector((state) => state.user)

    const dispatch = useDispatch();
    const { red, misty, green, purple, blue } = useColorContext()
    const [show, setshow] = useState(false);
    const [EditMode, setEditMode] = useState(false);


    useEffect(() => {
        if (!products) {
            const url = `${process.env.REACT_APP_SURVER_DOMAIN}/api/v1/products`;
            AsyncMiddwear(url, dispatch, setAllProducts)
        }
    }, [show])

    if (!Data) { return 0 }
    let { _id, Status, TItems, TPrice, cartID, Date } = Data
    let id = _id ? _id : cartID;
    const SendCartToSurver = (Data) => {
        let newCarturl = `${process.env.REACT_APP_SURVER_DOMAIN}/api/v1/cart/new`
        SurverRequest("POST", newCarturl, Data).then((res) => {
        }).then(() => { DeleteCartData(Data) })
    }


    const DeleteCartData = (Data) => {
        let DeleteCartid = Data.cartID;
        let remainingCart;
        let localcarts = JSON.parse(localStorage.getItem("Carts"));
        if (localcarts.length > 0) {
            remainingCart = localcarts.filter((cart) => {
                return cart.cartID !== DeleteCartid
            })
        } else {
            return
        }
        localStorage.setItem("Carts", JSON.stringify(remainingCart))
        dispatch(deleteCart(DeleteCartid))
    }

    return (
        <CartItem >
            {show ?
                <PopUpWInModel>
                    <div className="POPmodal"> <ShowCartProducts setEditMode={setEditMode} EditMode={EditMode} Data={Data} setshow={setshow} DeleteCartData={DeleteCartData} SendCartToSurver={SendCartToSurver} /></div>
                </PopUpWInModel> : <></>}
            <div className="Cartsdatas" onClick={() => setshow(true)}>

                <div className="CartData">
                    <p className='Cred' style={{ fontSize: "12px" }}>{id}</p>
                    <p className='Cblue'>{Date ? Date : 'Date'}</p>
                    <p className='Cblue'>{user ? user.Name : 'UserName'}</p>
                </div>
                <div className="subTotal">
                    <p className='Cgreen'>Total Price : <span className='Cblue'>{FormatPrice(TPrice)}</span></p>
                    <p className='Cgreen'>Total Items : <span className='Cblue'>{TItems ? TItems : "1"}</span></p>
                </div>
            </div>

            {Status.toUpperCase() === "NEW"
                ? <div className="actions">

                    <Button1 StyleData={{ h: "3rem", w: "98%", fs: "14px", fw: "600" }} value="Edit" onClick={() => { setshow(true); setEditMode(true) }} />
                    <Button1 StyleData={{ h: "3rem", w: "98%", fs: "14px", bg: green, fw: "600" }} value="Order" onClick={(e) => SendCartToSurver(Data)} />
                    <Button1 StyleData={{ h: "3rem", w: "98%", fs: "14px", bg: red, fw: "600" }} value="Delete" onClick={(e) => DeleteCartData(Data)} />

                </div>

                : <></>
            }






        </CartItem>
    )
}

const CartItem = styled.div`
height: 15rem;
min-width: 30rem;
/* width: 32rem; */
background-color: ${({ theme }) => theme.colors.white};
border-radius: 1rem;
box-shadow:${({ theme }) => theme.colors.shadowSupport};
padding: 1rem;
display: flex;
/* grid-template-columns: 1fr .6fr; */
gap: 1rem;
p{
    font-weight: 600;
}
&:hover{
    box-shadow:${({ theme }) => theme.colors.shadowS1};

}
.Cartsdatas{
 /* width: 70%; */
 display: flex;
 flex-direction: column;
 gap: 1rem;
 justify-content: space-evenly;
 padding: 1rem;  

}

.actions{
 width: 30%;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 justify-content: space-evenly;
 padding: 1rem;
 border-left: 2px solid  ${({ theme }) => theme.colors.purple};
}

`
const ShowCartProducts = ({ setEditMode, EditMode, Data, setshow, DeleteCartData, SendCartToSurver }) => {

    const { products } = useSelector((state) => state.product)
    const { red, misty, green, purple } = useColorContext()
    const [editOption, seteditOption] = useState(false)
    const [productData, setproductData] = useState('')
    let { Status, TItems, TPrice, cartID, porcessBy } = Data

    const closeModal = () => {
        seteditOption(false);
    };
    const productdelete = (id) => {


    }
    const showContHide = () => {
        setshow(false)
    }


    return (
        <ShowCartProduct>
            {
                editOption ?
                    <PopUpWInModel  >
                        <h5>Update Price or Weight</h5>
                        <PopupProCard Pdata={productData} onClose={closeModal} />
                    </PopUpWInModel>
                    : <></>
            }
            <div className="cartitems" >
                {

                    Data.Products.map((product, ind) => {
                        let { id, name, price, qty, weight } = product;
                        let sp = products.filter((i) => i._id === id)[0]

                        return (<div className='item' key={ind}>

                            <div className="img">
                                <img src={sp?.image} alt={`${name} image `} />
                            </div>

                            <div className="ActionInfo">
                                <div className="productInfo">
                                    <p className='Cgreen'> <span style={{ color: purple }}> {name}  </span> || <span style={{ color: misty }}>{sp?.category}</span></p>
                                    <p className='Cgreen'> Price : <span className='Cblue'>{`${FormatPrice(sp?.price)}/${FormatWeight(sp?.weight)}`}</span></p>
                                    <p className='Cgreen '> Selected : <span className='Cblue'>{`${FormatPrice(price)}/${FormatWeight(weight)}`}</span></p>

                                </div>
                                {Status.toUpperCase() === "NEW" && EditMode ?
                                    <div className="action">
                                        <MdDelete style={{ fontSize: "25px" }} className='Cred' onClick={() => { productdelete(id) }} />
                                        < LuPenLine style={{ fontSize: "25px" }} className='Cgreen' onClick={() => { { seteditOption(true); setproductData(sp) } }} />
                                    </div>
                                    : <></>}

                            </div>
                        </div>)
                    })

                }
            </div>
            <div className="CartinfoMain">

                <div className="cartInfo">
                    <p className='Cblue'>Cart id : <span className='Cred'>{cartID}</span></p>
                    <p className='Cgreen'>Total Price : <span className='Cblue'>{FormatPrice(TPrice)}</span></p>
                    <p className='Cgreen'>Total Items : <span className='Cblue'>{TItems ? TItems : "1"}</span></p>
                    <p className='Cgreen'>Process By : <span className='Cblue'>{porcessBy ? porcessBy : "None"}</span></p>
                </div>
                <div className="actions">
                    {Status.toUpperCase() === "NEW"
                        ? <> {EditMode ? <Button1 StyleData={{ h: "3rem", w: "15%", fs: "14px", fw: "600" }} value="Save" onClick={() => { setshow(true); setEditMode(true) }} />
                            : <Button1 StyleData={{ h: "3rem", w: "15%", fs: "14px", fw: "600" }} value="Edit" onClick={() => { setshow(true); setEditMode(true) }} />}
                            <Button1 StyleData={{ h: "3rem", w: "15%", fs: "14px", bg: green, fw: "600" }} value="Order" onClick={(e) => { SendCartToSurver(Data); setEditMode(false) }} />
                            <Button1 StyleData={{ h: "3rem", w: "15%", fs: "14px", bg: red, fw: "600" }} value="Delete" onClick={(e) => { DeleteCartData(Data); setEditMode(false) }} />
                        </> : <></>}
                    <Button1 StyleData={{ h: "3rem", w: "15%", fs: "14px", bg: misty, fw: "600" }} value="Close" onClick={(e) => { showContHide(); setEditMode(false) }} />
                </div>
            </div>


        </ShowCartProduct>

    )
}

const ShowCartProduct = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    height:90%;
    width: 40%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    p{
    font-weight: 600;
}
    .cartitems{
        height:80%;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        width: 96%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        gap: 1rem;
        .item{
            width: 95%;
            border-radius: 4px;
            height: 12rem;
            background-color: ${({ theme }) => theme.colors.white};
            transition: 500ms;
            box-shadow:${({ theme }) => theme.colors.shadowSupport} ;
            display: flex;
            gap: 1rem;
            hr{
                background-color: ${({ theme }) => theme.colors.hover1};
                width: .3rem;
            }
            .img{
                width: 14rem;
                display: flex;
                justify-content: center;
                padding: .5rem;
                img{
                    height:9rem;
                    width: 13rem;
                    border-radius: 4px;
                }
          
            }
          
         .ActionInfo{
             width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 1rem;
              .productInfo{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

              }
              .action{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
             }
            }
        }
        .item:hover{
            box-shadow:${({ theme }) => theme.colors.shadowS1} ;
            transform: scale(1.03);
        }

    }
   .CartinfoMain {
    width:90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    .cartInfo{
        display: flex;
        gap: 2rem;

    }
    .actions{
        width: 90%;
        display: flex;
        gap: 1rem;
        justify-content: space-evenly;
        padding: .4rem;
    }
   }

   @media (max-width: ${({ theme }) => theme.media.t}){
    height:90%;
    width: 95%;
    margin-top: 4rem;
    border-radius: 1rem;
    gap: 1rem;
    /* span,p{font-size:14px} */
    .cartitems{
        height:80%;
        padding: 1rem 0;
        gap: 1rem;
        .item{
            width: 95%;
            height: 10rem;
            gap: 1rem;    
    }
}

   }
    

   @media (max-width: ${({ theme }) => theme.media.m}){
    height:90%;
    width: 95%;
    margin-top: 4rem;
    border-radius: 1rem;
    gap: 1rem;
    span,p{font-size:14px}
    .cartitems{
        height:80%;
        padding: 1rem 0;
        gap: 1rem;
        .item{
            width: 95%;
            height: 10rem;
            gap: 1rem;
            .img{
                width: 14rem;
                padding: .5rem;
                img{
                    height:9rem;
                    width: 13rem;
                    border-radius: 4px;
                }
          
            }
          
         .ActionInfo{
             width: 100%;
              padding: 1rem;
              .productInfo{
                height: 100%;
              }
              .action{
                height: 100%;
             }
            }
        }
        .item:hover{
            box-shadow:${({ theme }) => theme.colors.shadowS1} ;
            transform: scale(1.03);
        }

    }
   .CartinfoMain {
    width:98%;
    gap: 1rem;
    .cartInfo{
        gap: 1rem;
        padding: 0.2rem;
        P{
            font-size: 12px;
        }
    }
    .actions{
        width: 100%;
        gap: .1rem;
        padding: .1rem;
    }
   }


   }
    
`
export default CartitemsDisplay