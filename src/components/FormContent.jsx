import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Adress from './Adress'
import Region from './Region'
import MonthlySessions from './MonthlySessions'
import Payment from './Payment'


export default function FormContent() {


    // Yup Validation 

    const validationSchema = Yup.object({
        
        email: Yup.string().email("invalid email").required("Email is required"),
        name:Yup.string().min(3 , "Name must be at least 3 characters long").max(12 , "Name must be less than 12 characters long").required("Name is required")
    })
  
    // Custom Validation 

    // function validate(values) {
    // let errors = {};

    // // email Validation

    // if (!values.email) {
    //   errors.email = "Required";
    // } 
    // else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //   errors.email = "Invalid email address";
    // }

    // // name Validation
    
    // if(!values.name) {
    //     errors.name = "Required"
    // }
    // else if (values.name.length < 3) {
    //     errors.name = "Name must be at least 3 characters long";
    // }
    // else if (values.name.length > 12) {
    //     errors.name = "Name must be less than 12 characters long";
    // }

    // return errors;
   
    // }

  let formik = useFormik({
    initialValues: {
        email:"",
        name:""
    } , 
    validationSchema,
    onSubmit: ()=> console.log(formik.values)
  })

  
  

  return <>
  <section className=' bg-white p-5'>

    <h2 className='text-2xl font-bold py-2 text-center'>Registration & Booking at GoStudent</h2>
    <p className='text-center'>The leading Platform for Online tutoring</p>

   <form action="" onSubmit={formik.handleSubmit} className='mt-8'>


    <label htmlFor="parentPhone" >
        <p className='text-slate-400 mt-8 mb-2'>Login Phone Number <span className=" text-black">(prefered to be Parent's)</span></p>

        <PhoneInput type="tel"
       
        id="parentPhone"
        name="parentPhone" 
        country={"us"}
        inputProps={{ required: true}}
        inputStyle={{ width:"100%"}}
        className="w-full focus:border-emerald-400 focus:border-2" />
       
    </label>
  

    <label htmlFor="studentPhone" >
        <p className='text-slate-400 mt-8 mb-2'>Contact Phone Number <span className=" text-black">(prefered to be Student's)</span></p>

        <PhoneInput type="tel"
        id="studentPhone"
         name="studentPhone"
        country={"eg"}
        inputProps={{ required: true}}
        inputStyle={{  width:"100%" }}
        className="w-full focus:border-emerald-400 focus:border-2"  />
    </label>


    <label htmlFor="email">
        <p className='text-slate-400 mt-8 mb-2'>Contact Email Adress</p>
          
        <input type="email"
        value={formik.values.email}
        className="p-3 bg-slate-100 w-full border-1 focus:outline-0 rounded-md focus:border-emerald-400 focus:border-2" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} id='email' />
        
         {formik.errors.email && formik.touched.email?  <p className='text-red-600'>{formik.errors.email}</p> : "" }
    </label>

    <label htmlFor="name">
        <p className='text-slate-400 mt-8 mb-2'>Contact Name </p>
          
        <input type="name"
        value={formik.values.name}
        className="p-3 bg-slate-100 w-full border-1 focus:outline-0 rounded-md focus:border-emerald-400 focus:border-2" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} id='name' />
        
         {formik.errors.name && formik.touched.name?  <p className='text-red-600'>{formik.errors.name}</p> : "" }
    </label>

 


         <h1 className='text-slate-400 mt-8 mb-2'>Address</h1>
      
        <Adress /> 
      
        <Region />
       <h1 className='text-slate-400 mt-8 mb-2'>Monthly Sessions</h1>
       <MonthlySessions />
       <h1 className='text-slate-400 mt-8 mb-2'>Select Payment Methods</h1>
        <Payment/>
 

     {/* // if there is a Backend API */}
    {/* <button type='submit' className='bg-green-600 text-white px-5 py-2'>ok</button> */}

   </form>



  </section>

  
  </>
}
