import Header from './Header'
import { HashRouter,Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>

      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route></Route>
          <Route></Route>
        </Routes>

      </HashRouter>
    </>
  )
}

export default App
