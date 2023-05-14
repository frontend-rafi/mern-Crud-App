import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Nav/>
  <Routes>
    <Route exact path='/' element={<Create/>}/>
    <Route path='/read' element={<Read/>}/>
    <Route path='/:id' element={<Update/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
