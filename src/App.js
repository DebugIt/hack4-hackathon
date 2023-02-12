
import Nav from './Components/Nav';

import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Sign from './Components/Sign';
import B4sign from './Components/B4sign';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Upload from './Components/Upload';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Wordrobe from './Components/Wordrobe';
import Casual from './Components/Casual';
import Formal from './Components/Formal';
import Occassional from './Components/Occassional';
import Sport from './Components/Sport';
import LoveUsr from './Components/LoveUsr';


function App() {
  return (
    <>
      <Router>
      <Nav />
        <Routes>
          <Route path='/' element={<B4sign />} />
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/signin' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/wordrobe' element={<Wordrobe />} />
          <Route path='/casual' element={<Casual />} />
          <Route path='/formal' element={<Formal />} />
          <Route path='/occas' element={<Occassional />} />
          <Route path='/sport' element={<Sport />} />
          <Route path='/usr' element={<LoveUsr />} />

        </Routes>
      <Footer />
      </Router>

      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action=".." method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
       */}
    </>

  );
}

export default App;
