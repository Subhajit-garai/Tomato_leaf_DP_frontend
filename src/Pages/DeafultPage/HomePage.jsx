import React, { useEffect, useState } from 'react'
import Herosection from '../../Components/herosection/Herosection'
import SurviceDisplay from '../../Components/herosection/SurviceDisplay.herosection.jsx'

let heading = ["Welcome to LeafCare AI","About LeafCare AI","How It Works","Why Choose LeafCare AI","Why Choose LeafCare AI"]
let line = ["Your go-to solution for diagnosing tomato leaf diseases with the power of AI.",
"LeafCare AI is a cutting-edge web application designed to help farmers and gardeners quickly identify and manage tomato leaf diseases. Our AI-powered tool analyzes images of your tomato plants and provides accurate diagnoses and treatment recommendations.",
"Simply upload a photo of your tomato plant’s leaves, and our advanced AI algorithms will analyze the image to detect any signs of disease. Within seconds, you'll receive a detailed report with information about the identified disease and practical advice on how to treat it.",
"Quick and easy diagnosis of tomato leaf diseases .Accurate and reliable AI-powered analysis",
" Comprehensive treatment recommendations .Supports sustainable and healthy tomato farming",
]



const HomePage = () => {
  const [ number, Setnumber] = useState(0)
  const [ image, Setimage] = useState('')
  useEffect(() => {
   
   let generateRandomNumber = () =>{
    let num = Math.floor(Math.random() *heading.length)   
    let image = `./assets/images1/${num+1}.png`;
    Setnumber(num)
    Setimage(image)
   }
    const intervalId = setInterval(generateRandomNumber, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [])
  return (
    <section className='h-fit mb-4'>
      <Herosection image={image} line={line[number]} heading={heading[number]} />
      <SurviceDisplay />
    </section>
  )
}



export default HomePage