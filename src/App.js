import { BrowserRouter ,Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Pages
import { Home , Contact} from "./pages"
//components
import { Header,Footer} from "./components"
//login
import { Login, Register,Reset} from "./pages"



function App() {
  return (
    
      <>
      <BrowserRouter>
      <ToastContainer/>
      <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
      </>
    
  );
}

export default App;
