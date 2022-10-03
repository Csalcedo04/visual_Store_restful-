import React from "react";
import {BrowserRouter as Router , Route,Routes } from "react-router-dom"
import {Stores} from "./components/Stores";
import {Add_store} from "./components/Add_store";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import 'bootswatch/dist/lux/bootstrap.min.css'

function App() {
  return (
      <Router>
          <Navbar/>
          <div className={"container p-4"}>
              <Routes>
                  <Route path='/Home' element={<Home/>}/>
                  <Route path='/store' element={<Stores/>}/>
                  <Route path='/add_Store' element={<Add_store/>}/>
                </Routes>
          </div>
      </Router>
  );
}

export default App;
