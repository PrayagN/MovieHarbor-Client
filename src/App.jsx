import { Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import NotFound from "./Screens/NotFound"
import MoviesPage from './Screens/Movies'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/movies" element={<MoviesPage/>}/>
    </Routes>
  )
}

export default App
