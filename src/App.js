import { Route, Routes } from 'react-router';
import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path = "/:id" element={<Character />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
    </div>
  );
}

export default App;
