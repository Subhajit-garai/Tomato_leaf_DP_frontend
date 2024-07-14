import React from 'react'
import { useSelector } from 'react-redux'
import Button1 from '../../Components/elements/buttons/Button1.jsx'
import { NavLink } from "react-router-dom";


const SurviceDisplay = () => {
  const { logo2, logo, bg } = useSelector((state) => state.color)
  let img1 = "./assets/images/pedictionpage-cutout.png"
  let img2 = "./assets/images/historyPage-cutout.png"
  let img3 = "./assets/images/historyPage-cutout.png"
  let line1 = "Discover the future of your tomato plants with our advanced leaf disease prediction."
  let line2 = "Explore our history page to view all predictions made, including those for tomato leaf diseases."
  let line3 = ""
  return (
    <section className=' my-4  md:flex md:flex-col md:gap-8 md:items-center' style={{ backgroundColor: bg }} >
      <Contaner img={img1} line={line1} to={"/predction"} />
      <Contaner img={img2} line={line2} to={"/history"} invert={true} />
    </section>
  )
}

export default SurviceDisplay

  
const Contaner = ({ img, invert, line,to }) => {

  const { logo2, logo, bg } = useSelector((state) => state.color)

  return (
    <section>
      <div className="cont h-[25rem] p-4 m-1 flex gap-4 md:gap-30 md:justify-between">

        {
          invert && invert ?
            <>
              <div className="flex flex-col gap-4 items-center  w-1/2 justify-center">
                <p className=' text-justify  font-medium'>{line}</p>
                <NavLink to={to}>
                  <Button1 type="button" StyleData={{
                    height: "4rem", width: `${window.innerWidth <= 426 ? "10rem" : "15rem"}`, bg: '#03f8f3',
                    fontWeight: 600
                  }} value={"GO TO"}  />
                </NavLink>
              </div>
              <div className="image w-1/2 rounded flex justify-center bg-white p-4 md:w-1/4 ">
                <img src={img} alt="image" className="rounded object-cover  " />
              </div>
              <div className="boder"></div>

            </>

            :
            <>
              <div className="image w-1/2 rounded flex justify-center bg-white p-4 md:w-1/4">
                <img src={img} alt="image" className="rounded object-cover  " />
              </div>
              <div className="boder"></div>

              <div className="flex flex-col gap-4 items-center  w-1/2 justify-center">
                <p className=' text-justify  font-medium'>{line}</p>
                <NavLink to={to}>
                  <Button1 type="button" StyleData={{
                    height: "4rem", width: `${window.innerWidth <= 426 ? "10rem" : "15rem"}`, bg: '#03f8f3',
                    fontWeight: 600
                  }} value={"GO TO"} />
                </NavLink>
              </div>
            </>
        }


      </div>
    </section>
  )
}

