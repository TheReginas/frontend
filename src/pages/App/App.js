import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login';


function App() {
  return (  
    <>
    <header>
      <h1>Work Well</h1>
    </header>

    <main>
    <Routes>
      <Route path= '/login' element= { <Login /> } />
    </Routes>

    </main>


   

    </>
  );
}

export default App;
