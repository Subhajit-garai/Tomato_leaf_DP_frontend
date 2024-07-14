import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import HistoryCard from './HistoryCard.jsx';
import { getHistory } from '../../../helper/action/AsyncAction.js';
import Select1 from "../../../Components/elements/selection/Select1.jsx"
import Input1 from "../../../Components/elements/Input1.jsx"
import { updatefilteredhistory,filterupdateWithtime } from '../../../redux/Slices/appSlice.js';

const DataHistoryPage = () => {
  const { p1, b1,logo2, logo,bg, white } = useSelector((state) => state.color)

  const { history,filteredhistory } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!history.length) {
      getHistory(dispatch)
    }
  }, [])




  const [search, setsearch] = useState('');
  const [notify, setnotify] = useState(false);
  const [filersate, setfilersate] = useState('ALL');
  const [filerdate, setfilerdate] = useState('ALL');
  const [Gridview, setGridview] = useState(false);

// ok
  const searchChange = (e) => {
    setsearch(e);
    let productsCont = document.querySelectorAll(".historyitemcont")
    productsCont.forEach(ele => {      
      let productsdet = ele.querySelector(".historyiteminfo")
      let name = productsdet.querySelector(".historyClassname")
      if (name.innerHTML.toUpperCase().indexOf(e.toUpperCase()) !== -1) {
        ele.style.display = ""
      }
      else {
        ele.style.display = "none"
      }

    });
  };

  // const ChangeIconState = () => {
  //   let DGrid = document.querySelector(".DGrid")
  //   let DList = document.querySelector(".DList")
  //   if (Gridview) {
  //     DGrid?.classList.add("Active")
  //     DList?.classList.remove("Active")

  //   } else {
  //     DList?.classList.add("Active")
  //     DGrid?.classList.remove("Active")
  //   }

  // }

  // const ChangeDivClass = () => {
  //   let div = document.querySelector(".product-list")
  //   if (Gridview) {
  //     div?.classList.add("grideView")
  //   }
  //   else {
  //     div?.classList.remove("grideView")
  //   }
  //   // GridView?  div.classList.add("grid-Active"):  div.classList.remove("grid-Active")
  // }

  // useEffect(() => {
  //   ChangeIconState()
  //   ChangeDivClass()
  // }, [Gridview])



  useEffect(() => {
    dispatch(updatefilteredhistory(filersate))
  }, [filersate])
  useEffect(() => {
    dispatch(filterupdateWithtime(filerdate))
  }, [filerdate])

  // useEffect(() => {
  //   if (p.length > 0) {
  //     setnotify(true)
  //   }
  //   else {
  //     setnotify(false)
  //   }


  // }, [p])







  return (
    <section className='flex flex-col mb-44 lg:grid lg:grid-cols-5  mt-10 min-h-screen md:mb-10 '>
      <div className=" p-8 row-span-5 md:flex md:flex-col md:gap-4 ">

        <Input1 type="text" value={search} height="4rem" width="100%" placeholder="search input" name='serch' onChange={(e) => { searchChange(e.target.value) }} />
        <div className="optionsection flex gap-4 justify-around mt-4 md:flex-col ">
        <Select1 ID="dateInput" name="category" StyleData={{ h: "4rem", w: `${window.innerWidth <= 426 ? "8rem" : "100%"}`, fs: `${window.innerWidth <= 426 ? 15 : 16}px` }}
          value={filerdate} OptionArr={["Today ","ALL","Yesterday"]} onChange={(e) => {setfilerdate(e.currentTarget.value) }} />
         <Select1 ID="CatagoryInput"  name="category" StyleData={{ h: "4rem", w: `${window.innerWidth <= 426 ? "8rem" : "100%"}`, fs: `${window.innerWidth <= 426 ? 15 : 16}px` }}
          value={filersate} OptionArr={[
            "ALL",
            'Bacterial_spot',
            'Early_blight',
            'Late_blight',
            'Leaf_Mold',
            'Septoria_leaf_spot',
            'Spider_mites Two-spotted_spider_mite',
            'Target_Spot',
            'Tomato_Yellow_Leaf_Curl_Virus',
            'Tomato_mosaic_virus',
            'healthy']} onChange={(e) => { setfilersate(e.currentTarget.value)}} />
         </div>
        </div>
    
      <div className=" historydisplaycont flex gap-4 flex-col mt-4 min-h-full 
      md:flex-wrap md:flex-row md:gap-8 md:p-8  md:col-span-4 md:row-span-5  md:justify-center  items-center overflow-y-scroll  md:rounded-sm" style={{backgroundColor:bg}}>
        {
          filteredhistory.map((item, index) => (
            <HistoryCard key={index} prediction={item.prediction} imagePath={item.imageadd} />
          ))
        }
      </div>
    </section>
  )
}

export default DataHistoryPage
