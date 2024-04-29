import { Footer, Header, Card} from 'components';
import { Home, About} from 'pages';
import "assets/allstyles/all.css";
import "assets/allstyles/fonts.css"

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      
      <Footer/> 
    </div>
  );
}

export default App;
