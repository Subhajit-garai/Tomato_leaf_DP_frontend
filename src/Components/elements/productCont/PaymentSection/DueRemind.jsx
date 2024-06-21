import React from 'react'
import styled from 'styled-components'

const DueRemind = () => {
    return (
        <Wrapper>
            <div className="menuIcon">
                <ul>
                    <li className='Active Cblue'>Total Due</li>
                    <li className='Cblue'>Paid Billes</li>
                    <li className='Cgreen'>Paid</li>
                    <li className='Cred'>Unpaid</li>
                </ul>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.nav`
margin-top: 4rem;
height: 16rem;
width: 90%;
background-color: ${({ theme }) => theme.colors.bg};
border-radius: 1rem;

.Active{
    border-bottom: 2px solid tomato;
}
.menuIcon{
     height: 6rem;
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
    
`
export default DueRemind