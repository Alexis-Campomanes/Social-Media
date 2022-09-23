import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:'-18%', right: '0'}} ></div>
      <div className="blur" style={{top: '36%', left: '-3rem'}}></div>
      <Home />
    </div>
  );
}

export default App;
