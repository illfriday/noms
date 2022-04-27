import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavBar } from '../components';
import { ItemsList, ItemsInsert, ItemsUpdate, Home } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element= { <Home/> }/>
        <Route path="/items/list" exact element={ <ItemsList/> } />
        <Route path="/items/create" exact element={ <ItemsInsert/> } />
        <Route path="/items/update/:id" exact element={ <ItemsUpdate/> } />
      </Routes>
    </Router>
  )
}

export default App;
