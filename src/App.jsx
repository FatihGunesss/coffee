import { Footer, Header } from "components";
import { Home, About, Subscription } from "pages";
import { Routes, Route } from "react-router-dom";
import "assets/allstyles/all.css";
import "assets/allstyles/fonts.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Subscription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
