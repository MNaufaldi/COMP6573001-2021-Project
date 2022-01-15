import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BListPage from "./Components/Books/BListPage";
import BShowPage from "./Components/Books/BShowPage";
import CListPage from "./Components/Cats/CListPage";
import CShowPage from "./Components/Cats/CShowPage";
import FListPage from "./Components/Foods/FListPage";
import FShowPage from "./Components/Foods/FShowPage";

import ListPage from "./ListPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={ <ListPage/> }/>

        <Route exact path='/books/:id' element={ <BShowPage/> }/>
        <Route exact path='/books' element={ <BListPage/> }/>

        <Route exact path='/foods/:id' element={ <FShowPage/> }/>
        <Route exact path='/foods' element={ <FListPage/> }/>

        <Route exact path='/cats/:id' element={ <CShowPage/> }/>
        <Route exact path='/cats' element={ <CListPage/> }/>
      </Routes>
    </Router>
   
  );
}

export default App;
