import { BrowserRouter,Routes,Route } from "react-router-dom/cjs/react-router-dom.min";
import Home  from "./components/Home";
import Login from "./components/Login";
import  Notfound  from "./components/Notfound";
import AccountDetails  from "./components/AccountDetails";
import Popular  from "./components/Popular";


const App = ()=>(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/account-details" element={<AccountDetails/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
  </BrowserRouter>
)



export default App