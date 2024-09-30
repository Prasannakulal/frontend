import './App.css';
import Banner from './components/Banner';
import Navbarr from './components/Navbarr';
import Textform from './components/Textform';


function App() {
  return (
   
    <>
    <Navbarr/>
    <div className="container">
    <Banner></Banner>
    </div>
    <div className="container"><Textform tittle='enter text here' /></div>
    
    
    
    </>
  );
}

export default App;
