import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FcImageFile } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";


export const UploadedFiles = ({ filename, size }) => {
  const { p1 ,p2,p3,p4,b1,r1,logo2 ,logo,white,lt_bg,p5} = useSelector((state) => state.color)

  const dispatch = useDispatch()

  return (
    <Wrapper style={{ background: p2,}}>
      <FcImageFile style={{ fontSize: "4rem" }} />
      <div className="uploadedcont">
        <div className="uploadedinfo">
          <p style={{ fontSize: "14px", color: b1, fontWeight: 500 }}>{filename} uploaded</p>
          <p style={{ fontSize: "10px", color: b1, fontWeight: 500 }}>{size} mb</p>
        </div>
        <FaCheck style={{ fontSize: "1.8rem", color: logo }} onClick={() => { }} />  
      </div>

    </Wrapper>
  )
}


const Wrapper = styled.section`
    height: inherit;
    min-height: 6rem;
    border-radius: inherit;
    display: flex;
    align-items: center;
    padding: 0 .5rem;    
    gap: 1rem;
 &>.uploadedcont{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: .5rem;
}

.uploadedcont .uploadedinfo{
  display: flex;
    flex-direction: column;
    width: 80%;
}



`