import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import Recipe from './components/Recipe';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createRecipe" element={<CreateRecipe />} />
          <Route exact path="/recipe/:id" element={<Recipe/>}/>
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
