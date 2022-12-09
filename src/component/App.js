import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";

import Title from "./Title";
import NavBar from "./NavBar";

import Sub from "./Sub";
import Library from "./Library";
import AddTerm from "./AddTerm";
import Cohort from './Cohort';




function App() {
  const [page, setPage] = useState("/")

  return (
    <div className="app">
     <Title />
     <NavBar onChangePage={setPage} />
      <Routes> 
         <Route path="/sub" element={<Sub/>}/>

         <Route path= "/library" element={<Library/>}/>
       
         <Route path="/cohort" element={<Cohort/>}/>
           
         <Route path="/addTerm" element={<AddTerm/>}/>
           
         <Route path= "*" element={<h1> Not Found </h1>}/>
        
      </Routes>   
         

    </div>
  );
}

export default App;
