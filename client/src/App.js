import './App.css';
import AppContainer from './components/AppContainer/AppContainer';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <AppContainer />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
