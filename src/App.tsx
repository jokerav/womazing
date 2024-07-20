import './App.css';
import Header from './components/header/header';
import Hero from "./components/hero/hero";
import NewCollection from "./components/new collection/newCollection";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <NewCollection/>
        </div>
    );
}

export default App;
