import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Button1 from "../elements/buttons/Button1.jsx";

// icons 
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

  const { p1, b1,logo2, logo, lt_bg, white, p5 } = useSelector((state) => state.color)

  const [uplodingFileName, setuploadingFileName] = useState('')
  const [uplodingProgress, setuplodingProgress] = useState(0)
  const [uplodingRate, setuplodingRate] = useState(0)
  const [uplodedFile, setuploadFile] = useState([])

  

  async function uploadFile() {
    let fileData = inputeRef.current.files[0]
   
    const formData = new FormData();
    formData.append("file", fileData)
    let url = "/api/v1/models/upload"


    let responce = await axios.post(url, formData, {
      onUploadProgress: (process) => {
        setuplodingProgress(Math.floor((process.progress) * 100))
        setuplodingRate((process.rate / (1024 * 1024)).toFixed(2))  // build a data unit formater
      }
    })

    let uploadedfile = {
      size: (fileData.size / (1024 * 1024)).toFixed(2),
      name: uplodingFileName,
    }

    setuploadFile((prevstete) => [...prevstete, uploadedfile])

    setuploadingFileName('')
    setuplodingProgress(0)
    setuplodingRate(0)
  }

  const prediction = () => {
    let url = "/api/v1/models/predict"
    let res = axios.get(url).then((response) => { console.log(response.data) })
  }

  useEffect(() => {

    // References to DOM elements
    let instance1 = imgRef.current;
    let instance2 = imgcontRef.current;
  
    // Handle click to trigger file input click
    const handleClick = () => {
      inputeRef.current.click();
    };
  
    // Handle file load
    const LoadFile = (e) => {
      console.log("fireed");

      const file = e.target.files[0];
      if (!file) return;
  
      // Set image source to the selected file
      instance1.src = URL.createObjectURL(file);
  
      // Add active class to the container
      instance2.classList.add("active");
  
      // Format the file name
      let image = file.name.split('.');
      let name = formatfilename(image[0]);
      let ext = image[image.length - 1];
      image = `${name}.${ext}`;
  
      // Set the uploading file name
      setuploadingFileName(image);
    };
  
    // Add event listeners
    instance2.addEventListener("change", LoadFile);
    instance2.addEventListener("click", handleClick);
  
    // Cleanup event listeners on component unmount
    return () => {
      instance2.removeEventListener('change', LoadFile);
      instance2.removeEventListener('click', handleClick);
    };
  }, []);
  

  useEffect(() => {
    if (uplodedFile.length > 0 || uplodingFileName) {
      filecontRef.current.style.display = "flex";
    } else {
      filecontRef.current.style.display = "none";
    }
  },
    [uplodedFile, uplodingFileName])

 
  return (
    <Wrapper className="ImageInpute" style={{ backgroundColor: lt_bg, }}>
      <div className="imagecont " style={{ borderColor: p1, }} ref={imgcontRef}>
        <img src="./assets/upload.svg" alt="Leaf Img" ref={imgRef} />
        <form encType="multipart/form-data"><input type="file" name="" id="" hidden ref={inputeRef} onChange={uploadFile} /></form>
        <p style={{ color: logo2, fontWeight: 500 }}>upload image here</p>
      </div>

      <div className="FileCont" style={{ backgroundColor: white, }} ref={filecontRef}>

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
        <Button1 type="button" StyleData={{ height: "5rem", width: "100%", fontSize: "20px", bg: b1 }} value={"Predict disies"} onClick={() => { prediction() }} />
      }


      <div className="informationCont">

      </div>


    </Wrapper>
  )
}

const Wrapper = styled.div`
    min-height: 20rem;
    min-width: 35rem;
    max-width: 40rem;
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
