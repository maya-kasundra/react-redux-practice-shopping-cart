


import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Cards from './component/Cards';
import CardsDetails from './component/CardsDetails';
import Header from './component/Header';
import './App.css';



function App() {
  return (
    <>
    <Header/>
     <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart' element={<CardsDetails />} />
    
   </Routes>
    </>
  
  
  )
}

export default App;
