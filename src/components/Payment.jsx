import React from 'react'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
export default function Payment() {

  
  return <>
  
  <div className='flex flex-col'>
   
   <div  className="w-full border-2 border-gray-200 rounded-lg p-5 items-center flex">
       <input type="radio" name="payment" id="payment" className='size-5 border-gray-300 text-indigo-600 focus:ring-indigo-600' />
       <label htmlFor="payment" className='ml-2 text-blue-700 fw-bolder text-xl'>S<span className='text-amber-400'>€</span>PA</label>
   </div>

   <div className="w-full border-2 border-gray-200 rounded-lg p-5 flex flex-col">
      
      <div className='flex items-center'>

       <input type="radio" name="payment" id="payment" className='size-5 border-gray-300 text-indigo-600 focus:ring-indigo-600' />
       <label htmlFor="payment" className='ml-2 text-blue-700 fw-bolder text-xl flex gap-2'>
       <FaCcVisa className='text-3xl'/>
       <FaCcMastercard className='text-3xl' />
       <SiAmericanexpress className='text-3xl' />
       </label>
      </div>

      <div className='flex flex-col mt-6'>
      <label htmlFor="name">
        <input type="text"
        className="p-3 bg-slate-100 w-full border-1 focus:outline-0 rounded-md focus:border-emerald-400 focus:border-2 placeholder:text-slate-600" name="text"  id='name' placeholder='Card Holder' />
    </label>

    <label htmlFor="name">
        <input type="text"
        className="p-3 bg-slate-100 w-full border-1 focus:outline-0 rounded-md focus:border-emerald-400 focus:border-2 placeholder:text-slate-600 mt-5" name="text"  id='name' placeholder='Card Number' />
    </label>


      </div>
  
          
   </div>
  <p className='text-md text-slate-600 mt-5'>100% secure payment. All data is Encrypted</p>


  </div>
  
  
  </>
}
