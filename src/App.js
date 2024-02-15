import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../src/components/pages/Home';
import Company from '../src/components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from '../src/components/pages/NewProject';
import Projects from '../src/components/pages/Projects';


import Container from '../src/components/layout/Container';
import NavBar from '../src/components/layout/NavBar';
import Footer from '../src/components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}
export default App;
