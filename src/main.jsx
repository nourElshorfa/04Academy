
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SessionsContextProvider from './context/SessionsContext.jsx'
import DiscountContextProvider from './context/DiscountContext.jsx'
// import CounterContextProvider from './Context/CounterContext.js'


createRoot(document.getElementById('root')).render(
  <DiscountContextProvider>

  <SessionsContextProvider>
   <App/>
  </SessionsContextProvider>
  </DiscountContextProvider>


)
