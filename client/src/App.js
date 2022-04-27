import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';

function App() {
  // const dispatch=useDispatch()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/createRecipe" element={<CreateRecipe/>}/>
          {/* <Route path="/home/:id" element={<Detail/>}/>
          <Route path="/create-recipe" element={<Form/>}/>
          <Route path="/update-recipe/:id" element={<Form/>}/>
          <Route path="/aboutme" element={<About/>}/>  */}
          <Route path="*" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
