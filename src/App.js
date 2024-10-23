import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotels/Hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='hotels' element={<List />} />
          <Route path='hotels/:id' element={<Hotel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
