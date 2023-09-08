import{BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Contact from '../pages/Contact';
import Navbar from '../pages/Navbar';
export default function Paginas(){
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Users" element={<Users />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </Router>
    )
}

//   <Pagina />