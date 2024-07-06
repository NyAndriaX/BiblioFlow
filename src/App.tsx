import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App:React.FC = () => {
  return (
    <div>
      <button className='btn btn-primary'>test</button>
      <ToastContainer position="top-right" />
    </div>
  )
}
export default App