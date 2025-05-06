import './App.css'
import { Aside } from './aside'
import { Header } from './header'
import { Main } from './main-container'

function App() {

  return (
    <div className='app-container'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <div className='aside'>
          <Aside />
        </div>
        <div className='main'>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App
