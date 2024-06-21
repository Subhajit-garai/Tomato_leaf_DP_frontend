import React,{useState} from "react";
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
export const PopUpWInModel = ({ children }) => {
    return ReactDOM.createPortal(
      <>
        {children}
      </>,
      document.body
    );
  };