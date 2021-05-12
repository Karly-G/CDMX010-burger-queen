import React from "react";
import './firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './components/Order'
import Select from './components/Select'


function App() {
  return (
    <div>
      <Select/>
      <Order/>
    </div>
  );
}

export default App;
