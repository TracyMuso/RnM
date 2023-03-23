import { Route, Routes } from 'react-router';
import './App.css';
import CharactersList from './pages/CharactersList';
import CharacterList from './pages/CharactersList';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" component={CharactersList} />
          <Route exact path = "/:id" component={CharactersList} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
    </div>
  );
}

export default App;
