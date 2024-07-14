import React from 'react'
import Button1 from '../../../Components/elements/buttons/Button1.jsx'
import { NavLink } from 'react-router-dom'

const HistoryCard = ({ imagePath, prediction }) => {


  const Diseaseinforeq = () => { }
  const Treatmentsinforeq = () => { }


  return (
    <div className='historyitemcont w-[300px]  min-h-max mt-8 bg-white  shadow-md hover:scale-105 duration-500  rounded-lg p-6 flex-col md:w-1/4' >

      <figure className=' rounded flex justify-center'>
        <img src={imagePath} alt="" className='rounded object-cover' />
      </figure>


      <div className="  historyiteminfo info flex flex-col gap-1 justify-around mt-2 mb-2 ">
        {/* historyiteminfo info flex flex-col gap-1 justify-around mt-2 mb-2 */}
        <div className="cont flex justify-between px-10">
          <label htmlFor="historyClassname">Class</label>
          <p className='historyClassname '>{prediction.class}</p>
        </div>
        <div className='flex justify-between px-10'>
          <label htmlFor="confidence">confidence</label>
          <p className='confidence'>{Math.floor(prediction.confidence)} %</p></div>
      </div>


      <div className="actionbtn h-20 w flex gap-8 justify-center md:gap-4 md:justify-between items-center  mt-2" >
        <NavLink to='/diseaseinfo'>
        <Button1 type="button" StyleData={{ height: "4rem", width: `${window.innerWidth <= 426 ? "10rem" : "100%"}`, bg: "red" }} value={"Disease info"} onClick={(e) => { }} />

        </NavLink>
        <NavLink to='/diseaseinfo'>
          <Button1 type="button" StyleData={{ height: "4rem", width: `${window.innerWidth <= 426 ? "10rem" : "100%"}`, bg: "green" }} value={"Treatments"} onClick={(e) => { }} />

        </NavLink>
      </div>
    </div>
  )
}

export default HistoryCard