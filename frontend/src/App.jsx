import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Practice from './pages/Practice';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<PrivateRoute element={Practice} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
