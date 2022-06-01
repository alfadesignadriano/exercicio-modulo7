import './App.css'
import { MainRoutes } from './routes/MainRoutes'

function App() {

  return (
    <div className="px-4">
      <header>
      <h1 className='text-xl font-bold py-2'>Galeria de fotos</h1>
      </header>
      <hr className="py-2"/>
      <div >
        <MainRoutes />
      </div>
      <hr />
    </div>    
  )
}

export default App
