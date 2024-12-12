import './App.css';
import CreateDocument from './components/CreateDocument';
import DocumentList from './components/DocumentList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/sidebar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/create"  element={<CreateDocument/>} />
        <Route path="/doclist"  element={<DocumentList/>} />

        </Routes>
        </Router>
      
    </div>
  );
}

export default App;
