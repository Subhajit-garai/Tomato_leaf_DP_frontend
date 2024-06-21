import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/DeafultPage/LogIn';
import HomePage from './Pages/DeafultPage/HomePage';
import Signup from './Pages/DeafultPage/Signup';
import Header from "./Components/Header.jsx";

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.jsx';

import PredctionPage from './Pages/DeafultPage/PredctionPage.jsx';
import DataHistoryPage from './Pages/ServicePage/DataHistory/DataHistoryPage.jsx';



const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    demo: "#4477CE",
    purple: "#7743DB",
    misty: "#F875AA",
    text: "rgb(24 24 29)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    hr: "#ffffff",
    gradient: "linear-gradient(0deg,rgb(132 144 255 ) 0% rgb(98 189 252) 100%",
    shadow: "rgb(0,0,0,0.02) 0px 1px 2px 3px 0px ,  rgba(27 ,31 ,35, 0.15) 0px 0px 0px 1px",
    shadowS1: "0px 0px 10px 1px rgba(0,0,0,0.16)",
    shadowSupport: "rgba(0,0,0,0.16)0px 1px 4px",
  },

  media: { m: "426px", t: "769px" },
}

function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/logout" element={<Home />} /> */}
        <Route path="/predction" element={<PredctionPage />} />
        <Route path="/history" element={<DataHistoryPage/>} />
      </Routes>
     </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App
