import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FcImageFile } from "react-icons/fc";
import styled from "styled-components";


export const UploadingFiles = ({ filename, size, progress ,rate}) => {
    const { p1 ,p2,p3,p4,b1,r1,logo2 ,logo,white,lt_bg,p5} = useSelector((state) => state.color)

    const dispatch = useDispatch()
    if(rate === "NaN"){
        rate = 0;
    }

    return (
        <Wrapper style={{ background: p2,}}>
            <FcImageFile style={{ fontSize: "4rem" }} />
            <div className="uploadingcont" >
                <div className="uploadedinfo">
                    <div className="processbarCont">
                        <div className="processbar" style={{ background: logo, width: `${progress}%` }} ></div>
                    </div>
                    <span className="infospan">
                     <p style={{ fontSize: "14px", color: b1, fontWeight: 500 }}>{filename} uploading....</p>
                     <p style={{ fontSize: "14px", color: b1, fontWeight: 500 }}><span style={{color: r1,}}>{rate}</span> mb/s</p>
                    </span>

                </div>
                <p style={{ fontSize: "14px", color: logo, fontWeight: 700 }}>{progress}%</p>
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
    gap: .1rem;

 &>.uploadingcont{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: .5rem;
}
 .uploadingcont .uploadedinfo{
    display: flex;
    flex-direction: column;
    /* width: 80%; */
}

.uploadedinfo .processbarCont
{
    width: 100%;
    height: .4rem;
    background-color: #fff;
    border-radius: 1rem;

}

.processbarCont .processbar{
    height: 100%;
    border-radius: inherit;
}
.uploadedinfo .infospan{
    display: flex;
    gap: 1rem ;
}

`