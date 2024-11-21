import { Routes,Route } from "react-router-dom"
import Counter from './Counter'
const App=()=>{
  return(
    <div>
      {/* <h1>ABES Engineering College, Ghaziabad</h1> */}
      <Routes>
        <Route path="/Counter" element={<Counter/>}></Route>
        <Route path="/" element={<h1>home page</h1>}></Route>
        <Route path="/login" element={<h1>loginpage</h1>}></Route>
        <Route path="/logout" element={<h1>logoutpage</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}
// export default App
export default App