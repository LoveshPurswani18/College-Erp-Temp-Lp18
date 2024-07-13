import './App.css'
import { Button } from './components/ui/button' 
import {NavigationMenuDemo} from './components/ui/NavBar'


function App() {
  return (
    <>
    <div className="flex bg-[#0869D9] h-24 rounded-b-l m-0 ">
    <div className='flex'>
    <Button>Logo</Button>
    </div>
    <div className='flex ml-80'>
      <NavigationMenuDemo></NavigationMenuDemo>
      <Button>Click Me</Button>
      </div>
    </div>
    </>
  )
}

export default App

