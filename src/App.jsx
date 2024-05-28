import { Footer, Header } from "components";
import { Home, About, Subscription } from "pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Subscription />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
