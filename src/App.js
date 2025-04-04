import './App.css';
import { Navbar } from './components/Navbar';
import { Counter } from './components/Counter';
import { Products } from './components/Products';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import Login from './components/Login';
import { AuthProvider } from './auth/Authenticate';
function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>

      <Routes>
        <Route path=''  element = {<Home/>}/>
        <Route path='products' element = { <Products/>}/>
        <Route path='counter' element = { <Counter/>}/>
        <Route path='product/:id' element = {<Product/>}/>
        <Route path='login' element ={ <Login/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
      
    </>

  );
}

export default App;
