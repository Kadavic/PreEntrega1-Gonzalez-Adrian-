
import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    
    <div className="App">
      
      
      <NavBar/>
      <div className='mb-10'>
        <ItemListContainer greeting={'Games'}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
