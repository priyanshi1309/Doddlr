import React from 'react'
import CanvasModel from './canvas/index'
import Customizer from './pages/Customizer'
import Home from './pages/Home'
import { ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <main className="app transition-all ease-in bg-inherit">
      <Home />
      <CanvasModel />
      <Customizer />
      <ToastContainer position="top-right" transition={Slide} autoClose={2000} />
    </main>
  )
}

export default App