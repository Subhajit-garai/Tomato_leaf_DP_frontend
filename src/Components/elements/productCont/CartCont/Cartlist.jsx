import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CartitemsDisplay from "./CartitemsDisplay"

const Cartlist = ({Carts,action}) => {

    let [Data ,setData] = useState();
    const ChangeCarts = (option) => {    
        setData( Data = Carts.filter((cart )=>{
        return cart.Status.toLocaleLowerCase() === option.toLocaleLowerCase()
      })  ) 
    }
    useEffect(() => {
      ChangeCarts(action); 
    }, [Carts,action])
    
    return (
        <Wrapper>
            <div className="cartListCont">
                {Data && Data.length > 0
                    ? <>
                    {Data.map((data,indx)=>(
                        <CartitemsDisplay key={indx} Data={data} />
                    ))}
                    </>
                    :(<p>No Cart Avalable</p>)
                }
            </div>
        </Wrapper>

    )
}
const Wrapper = styled.section`
margin-top: 4rem;
height: 50rem;
width: 90%;
background-color: ${({ theme }) => theme.colors.bg};
border-radius: 1rem;
overflow: auto;
.cartListCont{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
}
@media (max-width:${({theme})=>theme.media.m}) {
min-height: 55rem;
.cartListCont{
    width: 100%;
    flex-direction: column;
    align-items: center;

}

}
    
`


export default Cartlist