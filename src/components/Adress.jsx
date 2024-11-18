import React from 'react'

export default function Adress() {
  return <>
  <div className="flex mt-2 ">
    <div class="w-9/12">
        
        <div class="mt-2">
          
          <input type="text" placeholder='Address' autocomplete="address-level2"  className="p-3 bg-slate-100 w-11/12 border-1 focus:outline-0 rounded-md placeholder:text-slate-600 text-sm focus:border-emerald-400 focus:border-2"/>
        </div>
      </div>

      <div class="w-3/12">
      <div class="mt-2">
          <input type="text" placeholder='Nr' autocomplete="address-level2"  className="p-3 bg-slate-100 w-full border-1 focus:outline-0 rounded-md placeholder:text-slate-600 focus:border-emerald-400 focus:border-2"/>
        </div>
        
      </div>
    </div>
       
  </>
}
