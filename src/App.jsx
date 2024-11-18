

import './App.css'
import FormContent from './components/FormContent'
import OrderOverview from './components/OrderOverview'






function App() {


  return <>

  <section className='bg-slate-50'>

  <section className='container mx-auto py-10 flex flex-wrap'>
       <div className="w-full sm:mb-6 md:mb-6 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 shadow-xl">
     <FormContent />
       
       </div>
       <div className="w-full md:w-full sm:mb-6 md:mb-6 lg:w-1/2 xl:w-1/2 2xl:w-1/2  shadow-xl bg-slate-100">
      <OrderOverview />
       
       </div>

  </section>

  </section>
  </>
}

export default App
