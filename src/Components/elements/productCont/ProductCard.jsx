import React, { useState,useEffect } from 'react'
import styled from 'styled-components'

// icones
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

// admin items
import AdminDataAdd from '../../pages/admin/Acomponent/AdminDataAdd.jsx';
import Button1 from '../buttons/Button1.jsx';
import { SurverRequest } from "../../../helper/SurverRequest.js"

import { FormatPrice } from '../../../helper/FormatPrice.js';
import { FormatWeight } from '../../../helper/FormatWeight.js';
import { PopUpWInModel } from "../../component/PopUpWInModel.jsx"
import PopupProCard from "./PopupProCard.jsx"
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { factchProduct } from '../../../helper/action/AsyncAction.js';

const Productcard = ({ Pdata, displayAdminRoute }) => {
    let { brand, ispacked, image, name, category, price, weight } = Pdata

    let {isAdmin} = useSelector(state => state.user.userData)
    const [showModal, setShowModal] = useState(false);

    // admin routes
    let IsAdmin = false;

    if (displayAdminRoute) {
        IsAdmin = isAdmin;
    }


    const permitionToDelete = () => {
        let id = Pdata._id
        const delete_url = `${process.env.REACT_APP_SURVER_DOMAIN}/api/v1/product/${id}`
        window.confirm("you want to Delete This product fron Db")
            ? (SurverRequest("DELETE", delete_url).then((res) => { toast.success(res.message);factchProduct()}))
            : toast.info("Delete process suspend");
    }
   
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

   
    return (
        <Card className='productDisplay '>
        
            <div className="imgCont">
                <img src={image} alt={`${name} img`} />
                <div className="categortCont">
                    <p>{category}</p>
                </div>
                {ispacked ? (<div className="PKTCont">
                    <p>PKT</p>
                </div>)
                    : ""}
                {brand.length > 0 ? (<div className="BrandCont">
                    <p>{brand}</p>
                </div>)
                    : ""}
            </div>
            <div className="Product-data">
                <div className="PriceCont">
                    <p id='Pname'>{name}</p>
                    <p >{`${FormatPrice(price)}/${FormatWeight(weight)}`}</p>
                </div>
                {IsAdmin
                    ? <div className="actionIcon">
                        < HiMiniPencilSquare className='icon Cgreen' onClick={openModal} />
                        <MdDelete className='icon Cred' onClick={permitionToDelete} />
                    </div>
                    : //user Section 
                    <div className="actionIcon">
                        <FaPlus className='icon Cgreen' onClick={openModal} />
                        {/* <FaMinus className='icon Cred' /> */}
                    </div>}


            </div>

            {showModal && (IsAdmin
                ? <PopUpWInModel >
                    <div className="POPmodal">
                        <AdminDataAdd Pdata={Pdata} onClose={closeModal} />
                        <Button1 type="button" StyleData={{ h: "4rem" }} value="Cancle" onClick={closeModal} />
                    </div>
                </PopUpWInModel>
                : //user show model
                <PopUpWInModel  >
                    <h5>Enter Price or Weight</h5>
                    <PopupProCard Pdata={Pdata} onClose={closeModal} />
                </PopUpWInModel>
            )}


       

        </Card>
    )
}
const Card = styled.section`
/* min-height:30rem ; */
min-width:30rem ;
height: max-content;
background-color: ${({ theme }) => theme.colors.white};
padding: 1rem;
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
/* gap: 1rem; */

 &:hover{
  box-shadow: ${({ theme }) => theme.colors.shadowS1} ;
}



    .imgCont{
        display: flex;
        align-items: center;
        height: fit-content;
        width: fit-content;
        position: relative;
        img{
            height: 20rem;
            width: 30rem;
            border-radius: 1rem;
        }
        
        .categortCont{
            /* width: 12rem; */
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
            min-width: 6rem;
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

        .BrandCont{
            /* width: 10rem; */
            height: 3rem;
            border-radius: .5rem;
            position: absolute;
            bottom: 0;
            left: 0;
            margin-bottom: 1rem;
            margin-left: 2rem;
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
            display: flex;
            gap: 1rem;
            p{

                font-weight: 700;

            }
        }

     .actionIcon{
        display: flex;
        align-items: center;
        gap: 2rem;
        .icon{
            font-size: 19px;

        }  
     }

    
}

@media (max-width:${({ theme }) => theme.media.m}) {
min-width: fit-content;

.imgCont{
        display: flex;
        justify-content: center;
        img{
            height:18rem;    
            width: 27rem;
            border-radius: 1rem;
        }
    }
    .Product-data{

        display: flex;
        gap: .8rem;
        padding: .3rem;
        justify-content: space-evenly;
       
        .PriceCont{
            display: flex;
            gap: .7rem;
           p{
            font-weight: 700;
            font-size: medium;

           }
        }

     .actionIcon{
        display: flex;
        align-items: center;
        gap: 1rem;
        .icon{
            font-size: 19px;

        }  
     }

    }

}

    
`

export default Productcard