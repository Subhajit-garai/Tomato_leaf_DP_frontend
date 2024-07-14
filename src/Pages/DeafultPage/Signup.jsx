import React, { useState } from 'react'
import styled from 'styled-components'
import { SurverRequest } from '../../helper/SurverRequest.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input1 from "../../Components/elements/Input1.jsx"
import Button1 from "../../Components/elements/buttons/Button1.jsx"
import { useSelector } from 'react-redux';

let registerUrl = "/api/v1/users/signup"
let signupimage ="./assets/images1/3.png"


const Signup = () => {
    const navigate = useNavigate()
    const {logo} = useSelector((state) => state.color)

    let inltialstate = {
        name: "",
        phone: "",
        email: "",
        password: "",
    }

    const [user, setuser] = useState(inltialstate);

    const veryfingUser = async () => {
       let User = SurverRequest("POST",registerUrl,user)
       User.then((data)=>{
        if(data.success){  
            toast.success(data.message)
            navigate('/login')
        }
        else{

            toast.error(data.message)
        }
       })
       
 
    }

    // take inpute from form
    const hendleInpute = (ele) => {
        let { name, value } = ele.currentTarget;
        setuser({
            ...user,
            [name]: value
        });
    }
    return (
        <Wrapper>
            <div className="mainCont">
                <form className='grid grid-2-c' action="#" onSubmit={(e) => { e.preventDefault(); veryfingUser() }}>
                    <div className="formimage">
                        <img src={signupimage} width="280rem" height="300rem" alt="signUp" />
                    </div>

                    <div className="inputFilds">
                        <div className="username inputeContener">
                            <label htmlFor="username">Name:</label>
                            <Input1 type="text" value={user.name} height="4rem" width="70%" placeholder="Enter Name" name='name' onChange={(e) => { hendleInpute(e) }} />
                        </div>
                        <div className="email inputeContener">
                            <label htmlFor="email">Email:</label>
                            <Input1 type="email" value={user.email} height="4rem" width="70%" placeholder="Enter Email" name='email' onChange={(e) => { hendleInpute(e) }} />

                        </div>
                        <div className="password inputeContener">
                            <label htmlFor="password">Password:</label>
                            <Input1 type="text" value={user.password} height="4rem" width="70%" placeholder="Enter Password" name='password' onChange={(e) => { hendleInpute(e) }} />

                        </div>
                        <div className="phone inputeContener">
                            <label htmlFor="phone">Phone:</label>
                            <Input1 type="number" value={user.phone} height="4rem" width="70%" placeholder="Enter Phone" name='phone' onChange={(e) => { hendleInpute(e) }} />
                        </div>
                        <div className="actionBtn" >
                            <Button1 type="button" StyleData={{ height: "4rem", width: "40%" ,bg:`${logo}`}} value="Cancle" />
                            <Button1 type="Submit" StyleData={{ height: "4rem", width: "40%" ,bg:`${logo}`}} value="Submit" />

                        </div>
                    </div>

                </form>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
         min-height:85vh;
         width:100vw;
         background-color: ${({ theme }) => theme.colors.bg};
         margin-top: 2rem;
         display: flex;
         align-items: center;
         justify-content: center;
        .mainCont{
            height:50vh;
            width:50vw;
            background-color: ${({ theme }) => theme.colors.white};
            border-radius: 1rem;
            box-shadow:${({ theme }) => theme.colors.shadowSupport} ;
            form{
             height: inherit;
             width: inherit;
             padding: 2rem;
             justify-content: space-around;

             .formimage{
                display: flex;
                justify-content: center;
                align-items: center;
             }
               
             .inputFilds{
                flex-direction: column;
                display: flex;
                justify-content: center;
                align-items: center;
                /* align-items: center; */
                 gap: 2rem;
                .inputeContener{
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    gap: 2rem;
                    justify-content: space-between;

                    label{
                        width: fit-content;
                        color:  ${({ theme }) => theme.colors.hover1};
                        font-size: large;
                        text-align:left ;
                    }

                }
                .actionBtn{
                 width: 100%;
                 display: flex;
                 justify-content: space-between;
               }

            }
           
            }
        }

        @media (max-width:${({ theme }) => theme.media.m} ) {
   
   .mainCont{
       height:100%;
       width:90%;
       display: flex;
       align-items: center;
       justify-content: center;
       .circle{
           height: 10rem;
           width: 10rem;
           top: 2%;
           right: -4%;
       }
       form{
        height: inherit;
        width: inherit;
        display: flex;
        flex-direction: column;
        padding:0.8rem;
        .formimage{
           display: flex;
           justify-content: center;
           align-items: center;
           img{
               width:30rem;
               height:30rem;
           } 
        }
        .inputFilds{
           width: 100%;
           gap: 1rem;
        }
       }
   }

}
     `
export default Signup