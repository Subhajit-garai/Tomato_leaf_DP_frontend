import React from 'react'
import { Audio, Bars, DNA, ProgressBar, TailSpin, ThreeDots } from "react-loader-spinner"
import { useSelector } from 'react-redux';

const selectLoader = (color, type) => {

  switch (type) {
    case 'bar': return <Bars
      height="80"
      width="80"
      color={color}
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />;
    case "dna": return <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />;
    case "progress": return <ProgressBar
      visible={true}
      height="80"
      width="80"
      color={color}
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />;
    case "tailspin": return <TailSpin
      visible={true}
      height="80"
      width="80"
      color={color}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />;
    case "threedots": return <ThreeDots
      visible={true}
      height="80"
      width="80"
      color={color}
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />;
    case "audio": return <Audio
      height="100"
      width="100"
      color={color}
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />;
    default: return <TailSpin
      visible={true}
      height="80"
      width="80"
      color={color}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />;
  }
}

const Loader = ({ color, type }) => {
  const { p1, b1, logo2, logo, lt_bg, white, p5 } = useSelector((state) => state.color)
  if (!color) {
    color = logo
  }

  return (
    <>
      {
        selectLoader(color, type)
      }
    </>
  )
}

export default Loader