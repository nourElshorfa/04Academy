import React, { useContext,  useRef,  useState } from 'react'
import { SessionsContext } from '../context/SessionsContext'



export default function CheckOut(props) {

//  console.log(props.data);
 
 let myBtn = useRef(null);
let {selectedValue} = useContext(SessionsContext)


const [isChecked , setIsChecked] = useState(false);

const total = 248 - props.data
const handleChange = (e)=> {

   setIsChecked(e.target.checked);
   myBtn.current.removeAttribute('disabled');

}
  return <>
  
  <div className='container mx-auto w-7/12 mt-12'>
    <div className="flex justify-between flex-wrap">

        <div className="content flex justify-between w-full mb-7">
        <p  className='uppercase text-slate-500'>Number of sessions P.m</p>
         <p>{selectedValue}</p>
        </div>

        <div className="content flex justify-between w-full mb-7">
        <p className='uppercase text-slate-500'>Regular Price</p>
         <p className='line-through'>299</p>
        </div>

        <div className="content flex justify-between w-full mb-7">
        <p className='uppercase text-slate-500'> Your Price</p>
         <p>248</p>
        </div>

        <div className="content flex justify-between w-full mb-7">
        <p className='uppercase text-slate-500'>DISCOUNT 5 $</p>
         <p>{props.data}</p>
        </div>

        <div className='border-white border-2 w-full my-5'></div>

        <div className="content flex justify-between w-full mb-7">
        <p className='uppercase text-slate-500'>Setup Fee</p>
         <p>00.00</p>
        </div>

        <div className="content flex justify-between w-full mb-7">
        <p className='uppercase text-slate-500'>Total P.M</p>
         <p>{total}</p>
        </div>
        
    </div>
    <div className='flex items-start  p-5'>

        <input checked={isChecked} onChange={handleChange}   type="checkbox" name="check" id="" className='size-12'/>
        <p className='ms-4'>I agree to the <span className='text-blue-600'>Terms & Conditions</span>  and understand my right to <span className='text-blue-600'>withdraw my consent</span>  that I have read the Privacy Policy and the Cookies Policy and I consent to the use of cookies</p>
    </div>
  <button ref={myBtn} disabled className='disabled:bg-blue-200 bg-blue-600 px-5 py-2 my-7 text-white text-center w-full rounded-xl'>Order Now</button>
  </div>



  
  </>
}
