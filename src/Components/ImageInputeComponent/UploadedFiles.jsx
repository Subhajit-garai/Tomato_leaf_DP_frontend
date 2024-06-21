import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FcImageFile } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";


export const UploadedFiles = ({ filename, size }) => {
  const { b1, p2, p3, p4 } = useSelector((state) => state.color)
  const { mainColor, imageArea } = useSelector((state) => state.appcustomizer)

  const dispatch = useDispatch()

  return (
    <Wrapper>
      <FcImageFile style={{ fontSize: "4rem", color: p2 }} />
      <div className="uploadedcont">
        <div className="uploadedinfo">
          <p style={{ fontSize: "14px", color: b1, fontWeight: 500 }}>{filename} uploaded</p>
          <p style={{ fontSize: "10px", color: p2, fontWeight: 500 }}>{size} mb</p>
        </div>
        <FaCheck style={{ fontSize: "1.8rem", color: mainColor.primary1 }} onClick={() => { dispatch(AppColorSet(["imageArea", "textColor", "green"])) }} />
      </div>

    </Wrapper>
  )
}


const Wrapper = styled.section`
    height: inherit;
    min-height: 5rem;
    border-radius: inherit;
    background-color: aquamarine;
    display: flex;
    align-items: center;
    padding: 0 .5rem;    
    gap: 1rem;
 &>.uploadedcont,
 &>.uploadingcont{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: .5rem;
}
 .uploadedcont .uploadedinfo,
 .uploadingcont .uploadedinfo{
    display: flex;
    flex-direction: column;
    width: 80%;
}


`