


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";
import Partnerships from "./pages/Partnerships";
import OurApproach from "./pages/OurApproach";
import Activities from "./pages/Activities";  
import News from "./pages/News";  

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/partnerships" element={<Partnerships/>}/> 
          <Route path="/approach" element={<OurApproach/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/news" element={<News/>}/> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
