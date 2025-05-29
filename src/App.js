import { Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './pages/Page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Page /> } />
      </Routes>
    </div>
  );
}

export default App;
