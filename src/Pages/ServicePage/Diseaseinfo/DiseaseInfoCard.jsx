import React from 'react'
import { useSelector } from 'react-redux'

const DiseaseInfoCard = (props) => {
  const { p1, b1, logo2, logo, bg, white } = useSelector((state) => state.color)

  let { name, Cause, Symptoms, Treatment, Do, Do_Not, images } = props.info
  return (

    <div className=" diseaseinfoCont flex flex-col gap-4 md:h-max md:w-full md:bg-white md:p-16">
      <p className='diseaseName font-medium bg-white p-4 rounded-md'><span style={{ color: logo }}>Name: </span> {name}</p>

      <figure className='h-[20rem] flex overflow-x-scroll gap-4 p-4 bg-white'>
        {
          images && images.map((image, i) => {
            return <img key={i} src={image} alt={`${name} image`} className='w-full h-full' />
          })
        }
      </figure>

      <div className="info bg-white p-4">
        <p ><span className='font-medium' style={{ color: logo }}>Cause: </span>{Cause}</p>
        <p><span className='font-medium' style={{ color: logo }}>Symptoms: </span> {Symptoms}</p>
        <p><span className='font-medium' style={{ color: logo }}>Treatment: </span>{Treatment}</p>
        <p><span className='font-medium' style={{ color: logo }}>Do: </span>{Do}</p>
        <p><span className='font-medium' style={{ color: logo }}>Do_Not: </span>{Do_Not}</p>
      </div>
    </div>

  )
}

export default DiseaseInfoCard