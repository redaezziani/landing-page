import './css/App.css'
import Header from './components/NavBar'
import Hero from './components/Hero'

function App() {

  return (
    <div
    className='w-full relative dark:bg-slate-700 min-h-screen overflow-x-hidden flex justify-center items-center gap-3 flex-col bg-white'
    >
    <Header/>
    <Hero/>
    </div>
  )
}

export default App
