import './App.css';
import Container from './components/container/container';
import Header from './components/header/header';
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="App">
      {/*<Container>*/}
        <Header />
          <Hero/>
      {/*</Container>*/}

    </div>
  );
}

export default App;
