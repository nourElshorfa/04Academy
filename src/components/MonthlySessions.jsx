import React, {  useContext } from 'react'
import { SessionsContext } from '../context/SessionsContext';



export default function MonthlySessions() {


 let {handleChange , selectedValue} = useContext(SessionsContext); 


  return <>
  
  <select value={selectedValue} onChange={handleChange} name="monthlySessions" id="monthlySessions" className='p-3 bg-slate-100 w-11/12 border-1 focus:outline-0 rounded-md placeholder:text-slate-600 text-sm focus:border-emerald-400 focus:border-2'>
        <option value="1">1 Session</option>
        <option value="2">2 Sessions</option>
        <option value="3">3 Sessions</option>
        <option value="4">4 Sessions</option>
        <option value="5">5 Sessions</option>
        <option value="6">6 Sessions</option>
        <option value="7">7 Sessions</option>
        <option value="8">8 Sessions</option>
        <option value="9">9 Sessions</option>
        <option value="10">10 Sessions</option>
        <option value="11">11 Sessions</option>
        <option value="12">12 Sessions</option>

     </select>
  </>
}
