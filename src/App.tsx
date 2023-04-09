import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Layout from './components/common/Layout ';


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
