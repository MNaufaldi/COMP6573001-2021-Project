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
      <Route exact path='/' element={ <ListPage/> }/>

        <Route exact path='/books/:id' element={ <ShowPage/> }/>
        <Route exact path='/books' element={ <ListPage/> }/>

        <Route exact path='/foods/:id' element={ <ShowPage/> }/>
        <Route exact path='/foods' element={ <ListPage/> }/>

        <Route exact path='/cats/:id' element={ <ShowPage/> }/>
        <Route exact path='/cats' element={ <ListPage/> }/>
      </Routes>
    </Router>
   
  );
}

export default App;
