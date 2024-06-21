import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Button1 from "../elements/buttons/Button1.jsx";

// icons 
import { AppColorSet } from "../../redux/Slices/appcustomizerSlice";
import { formatfilename } from "../../helper/filenameRex";
import { UploadedFiles } from "./UploadedFiles.jsx";
import { UploadingFiles } from "./UploadingFiles.jsx";
import styled from "styled-components";


const ImageInpute = () => {

  const imgcontRef = useRef()
  const imgRef = useRef()
  const inputeRef = useRef()
  const filecontRef = useRef()

  const dispatch = useDispatch()

  const { p1, p2, p3, p4 } = useSelector((state) => state.color)
  const { mainColor, imageArea } = useSelector((state) => state.appcustomizer)

  const [uplodingFileName, setuploadingFileName] = useState('')
  const [uplodingProgress, setuplodingProgress] = useState(0)
  const [uplodingRate, setuplodingRate] = useState(0)
  const [uplodedFile, setuploadFile] = useState([])

  async function uploadFile() {
    let fileData = inputeRef.current.files[0]
    let RenamedFile = new File([fileData], uplodingFileName, {
      type: fileData.type,
      lastModified: fileData.lastModified,
    })

    const formData = new FormData();
    formData.append("file", RenamedFile)
    let url = "/api/v1/model/upload"


    let responce = await axios.post(url, formData, {
      onUploadProgress: (process) => {
        setuplodingProgress(Math.floor((process.progress) * 100))
        setuplodingRate((process.rate / (1024 * 1024)).toFixed(2))  // build a data unit formater
      }
    })

    let uploadedfile = {
      size: (fileData.size / (1024 * 1024)).toFixed(2),
      name: uplodingFileName,
      path: responce.data.path,
    }

    setuploadFile((prevstete) => [...prevstete, uploadedfile])

    setuploadingFileName('')
    setuplodingProgress(0)
    setuplodingRate(0)  
  }

  const prediction = () => {
    let url = "/api/v1/model/predict"
    let res = axios.get(url).then((response) => { console.log(response.data) })
  }

  useEffect(() => {
    const handleClick = () => {
      inputeRef.current.click();
    };

    const LoadFile = (e) => {
      const file = e.target.files[0]
      if (!file) { return }
      imgRef.current.src = URL.createObjectURL(file);
      imgcontRef.current.classList.add("active")
      let image = file.name.split('.')
      let name = formatfilename(image[0])
      let ext = image[image.length - 1]
      image = `${name}.${ext}`
      setuploadingFileName(image)
    };


    imgcontRef.current.addEventListener("click", handleClick)
    inputeRef.current.addEventListener("change", LoadFile)


    return () => {
      if (imgcontRef) {
        imgcontRef.current.removeEventListener('click', handleClick);
        inputeRef.current.removeEventListener('change', LoadFile);
      }
    }

  }, [])

  useEffect(() => {    
    if (uplodedFile.length > 0 || uplodingFileName) {
      filecontRef.current.style.display = "flex";
    } else {
      filecontRef.current.style.display = "none";
    }
  },
  [uplodedFile,uplodingFileName])
  
// *&&&&&&&&&&&&&&&&&&&&&&
useEffect(() => {
  uplodedFile.forEach((file)=>{
    console.log(file.name, file.size, file.path);
    
  })
},[uplodedFile])
  return (
    <Wrapper className="ImageInpute" style={{ backgroundColor: p1, }}>

      <div className="imagecont " style={{ borderColor: p3, }} ref={imgcontRef}>
        <img src="./assets/upload.svg" alt="Leaf Img" ref={imgRef} />
        <form encType="multipart/form-data"><input type="file" name="" id="" hidden ref={inputeRef} onChange={uploadFile} /></form>
        <p style={{ color: imageArea.textColor, fontWeight: 500 }}>upload image here</p>
      </div>

      <div className="FileCont" style={{ backgroundColor: p2, }} ref={filecontRef}>

        {uplodingFileName &&
          <UploadingFiles filename={uplodingFileName ? uplodingFileName : "Image.jpg"} progress={uplodingProgress} rate={uplodingRate} />
        }
        
        {
          uplodedFile.map((file, indx) => {
            return (
              <UploadedFiles filename={file.name} size={file.size} key={indx} />
            )
          })
        }

      </div>
       {uplodedFile.length > 0 &&
       <Button1 type="button" StyleData={{ height: "5rem", width: "100%", fontSize: "20px", bg: p4 }} value={"Predict disies"} onClick={() => { prediction() }} />
       }


      <div className="informationCont">

      </div>


    </Wrapper>
  )
}

const Wrapper = styled.div`
    min-height: 20rem;
    min-width: 35rem;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  .imagecont{
    height: 20rem;
    width: 100%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: #ffff;
    border: 2px dashed ;
    }
    .imagecont.active {
    border: none;
    }
    .imagecont.active p{
    display: none;
    }
.imagecont.active img{
    height: 100%;
    width: 100%;
}

.imagecont img{
    height: 50%;
    width: 50%;
    border-radius: inherit;
}

.informationCont{
    display: none;
}

.FileCont{
    padding:.6rem;
    max-height: 20rem;
    width: 100%;
    border-radius: .5rem;
    display: none;
    flex-direction: column;
    gap: .6rem;
    overflow-y: auto;
    scroll-behavior: smooth;
}
.FileCont::-webkit-scrollbar{
    width: 0;
}


  
`
export default ImageInpute
