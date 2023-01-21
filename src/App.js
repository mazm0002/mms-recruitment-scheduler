// import logo from './logo.svg';
import './App.css';
import Scheduler from './components/Scheduler';
import NameForm from './components/NameForm';
import { Route, Routes } from "react-router-dom"

function App() { 
  return (
  <Routes>
    <Route path="/" element={<Scheduler />}/>
    <Route path="/mms-recruitment-scheduler" element={<NameForm />}/>
    <Route exact path="/schedule/:name" element={<Scheduler />}/>
  </Routes>
  );
}

export default App;
