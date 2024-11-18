import React, { useContext, useEffect, useRef, useState } from 'react'
import CheckOut from './CheckOut'
import { DiscountContext } from '../context/DiscountContext';


export default function OrderOverview() {

  let { discount , setDiscount} = useContext(DiscountContext)

   const [selectedBox, setSelectedBox] = useState(null);
   const [isChecked, setIsChecked] = useState(false);

   
   const handleChecked = (e)=> {
      setIsChecked(e.target.checked);
      setDiscount(e.target.checked ? 5 : 0);
   }
   
   const handleSelected = (index) => {
     setSelectedBox(index);
   };
 
   const boxes = [
     "6 Months",
     "9 Months",
     "12 Months",
     "18 Months",
     "24 Months",
     "36 Months",
   ];

    
  return <>
  <h1 className='m-10 font-bold text-2xl'>Order Overview</h1>
  <div className="container w-9/12 mx-auto flex flex-wrap">
      {boxes.map((box, index) => (
        <div
          key={index}
          onClick={() => handleSelected(index)}
          className={`w-1/3 bg-white p-5 text-slate-300 border-2 cursor-pointer ${
            selectedBox === index
              ? "border-blue-500 text-blue-500 border-4 font-bold"
              : "border-slate-300"
          }`}
        >
          {box}
        </div>
      ))}
    </div>


    <div className='flex items-center justify-center w-full my-8'>
    
    <label htmlFor="check" className='bg-gray-100 cursor-pointer relative w-20 h-9 rounded-full border-black border-2'>
    <input  checked={isChecked} onChange={handleChecked} type="checkbox" id="check" className='sr-only peer' />
    <span className='w-2/5 h-4/5 bg-slate-300 absolute rounded-full left-1 top-1 peer-checked:bg-blue-400 peer-checked:left-11 transation-all duration-500'></span>
   
  </label>

  <div  className='ms-5 text-black'>Pay In Advance - EXTRA 5 $ DISCOUNT</div>
    </div>

    <CheckOut data={discount} />

  


  
  </>
}
