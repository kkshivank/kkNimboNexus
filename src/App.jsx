import { useEffect } from 'react'
import './App.css'
import InServices from './Components/InServices'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, [])

  return (
    <>
      <Home></Home>
      <About></About>
      <InServices></InServices>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App