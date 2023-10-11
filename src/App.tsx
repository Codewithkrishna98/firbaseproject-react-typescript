import './App.css'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {Home} from "./pages/main/Home"
import {Login}from "./pages/Login"
import {Navbar} from "./Components/navbar"
import { CreatePost } from './pages/create-post/createpost'
function App() {
 

  return (
    <>
      <div>
        <Router>
          <Navbar/>
<Routes>

  <Route   path='/'   element={<Home/>}   />
  <Route   path='/login'   element={<Login/>}   />
  <Route   path='/createpost'   element={<CreatePost/>}   />
  
</Routes>

        </Router>
      </div>
     
    </>
  )
}

export default App
