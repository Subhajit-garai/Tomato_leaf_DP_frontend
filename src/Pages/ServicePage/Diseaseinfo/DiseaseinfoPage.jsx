import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getalldiseaseinfo, getHistory } from '../../../helper/action/AsyncAction'
import Select1 from '../../../Components/elements/selection/Select1'
import Input1 from '../../../Components/elements/Input1'
import DiseaseInfoCard from './DiseaseInfoCard.jsx'

let imagePath = './assets/images/6.jpg'




const DiseaseinfoPage = () => {


  const { p1, b1, logo2, logo, bg, white } = useSelector((state) => state.color)

  const { diseaseinfos } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!diseaseinfos.length) {
      getalldiseaseinfo(dispatch)
    }
  }, [])


  const [search, setsearch] = useState('');
  const [notify, setnotify] = useState(false);
  const [filersate, setfilersate] = useState('ALL');
  const [Gridview, setGridview] = useState(false);

  // not ok
  const searchChange = (e) => {
    setsearch(e);
    let productsCont = document.querySelectorAll(".diseaseinfoCont")
    productsCont.forEach(ele => {
      let name = ele.querySelector(".diseaseName")
      if (name.innerHTML.toUpperCase().indexOf(e.toUpperCase()) !== -1) {
        ele.style.display = ""
      }
      else {
        ele.style.display = "none"
      }

    });
  };


 

  // useEffect(() => {
  //   dispatch(updatefilteredhistory(filersate))
  // }, [filersate])

      

  return (
    <section className=' flex flex-col mb-44 lg:grid lg:grid-cols-5  mt-10 min-h-screen md:mb-10'>

      <div className=" p-8 row-span-5 md:flex md:flex-col md:gap-4 ">
        <Input1 type="text" value={search} height="4rem" width="100%" placeholder="search input" name='serch' onChange={(e) => { searchChange(e.target.value) }} />

        <Select1 ID="CatagoryInput" name="category" StyleData={{ h: "3.5rem", w: `${window.innerWidth <= 426 ? "8rem" : "100%"}`, fs: `${window.innerWidth <= 426 ? 12 : 16}px` }}
          value={filersate} OptionArr={[
            "Type",
            'Bacterial_spot',
            'Early_blight',
            'Late_blight',
            'Leaf_Mold',
            'Septoria_leaf_spot',
            'Spider_mites Two-spotted_spider_mite',
            'Target_Spot',
            'Tomato_Yellow_Leaf_Curl_Virus',
            'Tomato_mosaic_virus',
            'healthy']} onChange={(e) => { setfilersate(e.currentTarget.value) }} />
      </div>
      <div className="  flex flex-wrap gap-8 p-8  col-span-4 row-span-5 justify-center items-center overflow-y-scroll rounded-sm" style={{ backgroundColor: bg }}>
        {
          diseaseinfos.map((info, index) => (
            <DiseaseInfoCard key={index} info={info} />
          ))
        }
      </div>
    </section>

  )
}

export default DiseaseinfoPage