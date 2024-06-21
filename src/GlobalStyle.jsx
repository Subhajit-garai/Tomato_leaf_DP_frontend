import { createGlobalStyle } from "styled-components";

export  const GlobalStyle =createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
}
html{
    font-size: 62.5%;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100vh;
    width: 100vw;
}


#root{
    height: 100vh;
    width: 100vw;
    margin: 0;
    display: flex;
    flex-direction: column;  
    overflow-x: hidden;
}


.POPmodal{
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}


h1{
    color: ${({theme})=>theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
}
h2{
    color: ${({theme})=>theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 600;
    text-align: center;
    white-space: normal;
}
h3{
    font-size: 1.8rem;
    font-weight: 300;
}


a{
    text-decoration: none;
    
}
li{
    list-style: none;
}

.grid{
    display: grid;
    

} 
.grid-2-c{
   grid-template-columns:repeat(2,1fr);
}

.grid-2-c-r{
   grid-template-columns:repeat(2,1fr);
   grid-template-rows:repeat(2,1fr);
}
.grid-3-c{
   grid-template-columns:repeat(3,1fr);
}
.grid-4-c{
   grid-template-columns:repeat(4,1fr);
}

.padding-2{
    padding: 2rem;
}

.Cgreen{
color: green;
}
.Cred{
color: red;
}
.Cblue{
    color: ${({theme})=>theme.colors.demo};
}
`