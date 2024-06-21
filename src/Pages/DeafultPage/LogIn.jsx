import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input1 from "../../Components/elements/Input1.jsx"
import Button1 from "../../Components/elements/buttons/Button1.jsx"
import { SurverRequest } from '../../helper/SurverRequest.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


let loginUrl = `${import.meta.env.REACT_APP_SURVER_DOMAIN}/api/v1/login`


const LogIn = () => {
    const navigate = useNavigate()
     let {isLogin}  = useSelector((state)=> state.user.userData)
    //  if user logged in then we need to navigate to Home page
    useEffect(()=>{        
     if(isLogin){
        navigate("/")
     }
    },[isLogin])
     
   
    let inltialstate = {
        Email: "",
        Password: "",
    }

    const [user, setuser] = useState(inltialstate);

    const veryfingUser = async () => {
        let User = SurverRequest("POST", loginUrl, user)
        User.then((data) => {
            if (data.success) {
                toast.success(data.message)
                navigate('/')
                window.location.reload();
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
            <div className="circle"></div>

            <div className="mainCont">
                <form className='grid grid-2-c' onSubmit={(e) => { e.preventDefault(); veryfingUser() }}>
                    <div className="formimage">
                        <img src="./images/login.svg" alt="signUp" />
                    </div>

                    <div className="inputFilds">
                        <div className="email inputeContener">
                            <label htmlFor="email">Email:</label>
                            <Input1 type="email" value={user.Email} height="4rem" width="70%" placeholder="Enter Email" name='Email' onChange={(e) => { hendleInpute(e) }} />

                        </div>
                        <div className="password inputeContener">
                            <label htmlFor="password">Password:</label>
                            <Input1 type="text" value={user.Password} height="4rem" width="70%" placeholder="Enter Password" name='Password' onChange={(e) => { hendleInpute(e) }} />

                        </div>
                        <div className="actionBtn" >
                            <Button1 type="button" StyleData={{ h: "4rem", w: "40%" }} value="Cancle" />
                            <Button1 type="Submit" StyleData={{ h: "4rem", w: "40%" }} value="Submit" />

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
         position: relative;
         /* .circle{
                height: 20rem;
                width: 20rem;
                border-radius: 50%;
                background: linear-gradient(203deg, #0ddda7, #0d8bdd);
                 background-size: 400% 400%;
                animation: BgChangeBlueToGreen 27s ease infinite,changeScale 10s ease infinite;
                position: absolute;
                top: 0;
                right: 20%;
              
            } */
        .mainCont{
            height:50vh;
            width:50vw;
            background-color: ${({ theme }) => theme.colors.white};

      

            border-radius: 1rem;
            box-shadow:${({ theme }) => theme.colors.shadowSupport} ;
            z-index: 2;
            form{
             height: inherit;
             width: inherit;
             padding: 2rem;
             justify-content: space-around;

             .formimage{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width:35rem;
                    height:35rem;
                } 
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
                    justify-content: space-between;

                    label{
                        width: fit-content;
                        color:  ${({ theme }) => theme.colors.demo};
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
            height:80%;
            width:90%;
            display: flex;
            align-items: center;
            justify-content: center;
           
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
export default LogIn