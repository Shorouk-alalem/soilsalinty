import Statistics from './components/statistics';
import Graphs from './components/Graphs';
import LandingPage from './components/LandingPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
       <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/statistics" element={ <Statistics />} />
            <Route path="/graphs" element={<Graphs />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

