import Header from "./Components/Header/Header";
import Content from "./Components/Subheader/Subheader";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      /* Aca va a ir el icono de wpp */ 
      <Content />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
