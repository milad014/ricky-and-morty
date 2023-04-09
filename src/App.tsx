import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Layout from './components/common/Layout ';


function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
