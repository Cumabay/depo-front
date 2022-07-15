import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import Table from './components/Table';
import History from './components/History/History';
import Login from './auth/Login';



function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
