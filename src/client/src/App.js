import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ListPage from "./Components/ListPage";
import ShowPage from "./Components/ShowPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/list_books' element={ <ShowPage/> }/>
        <Route exact path='/' element={ <ListPage/> }/>

      </Routes>
    </Router>
   
  );
}

export default App;
