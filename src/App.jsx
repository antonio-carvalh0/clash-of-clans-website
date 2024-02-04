import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Town from './components/town/Town'
import Troops from './components/troops/Troops'
import Strategy from './components/strategy/Strategy'
import About from './components/about/About'



function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Town />
      <Troops />
      <Strategy />
      <About />

    </div>
  )
}

export default App
