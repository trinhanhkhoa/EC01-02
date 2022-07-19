import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact"
import Login from "./component/login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={< Home/>}></Route>
            <Route exact path='/about' element={< About/>}></Route>
            <Route exact path='/contact' element={< Contact/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
