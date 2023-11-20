
import './App.css'

import { Header } from './common/Header/Header'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile'

function App() {

  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <Login /> */}
      <Profile />
    </div>
  )
}

export default App
