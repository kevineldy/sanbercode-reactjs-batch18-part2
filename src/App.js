import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const border = {width: "50%", height:"300px", border: "1px solid", color: "black", "border-radius": "10px", margin: "10px auto"}
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <div className="container" style={border}>
            <h1>Form Pembelian Buah</h1>
            <form>
              <label style={{"margin-right": "10px"}}> Nama Pelanggan </label>
              <input type= "text" name= "name" />
              <br/>
              <br/>
              <input style={{"margin-left": "55px"}} type= "checkbox" /> <label>Semangka</label>
              <br/>
              <input style={{"margin-left": "20px"}} type= "checkbox" /> <label>Jeruk</label>
              <br/>
              <input style={{"margin-left": "26px"}} type= "checkbox" /> <label>Nanas</label>
              <br/>
              <input style={{"margin-left": "18px"}} type= "checkbox" /> <label>Salak</label>
              <br/>
              <label style={{"margin-left": "-100px"}}>Daftar Item</label>
              <input style={{"margin-left": "55px"}} type= "checkbox" /> <label>Anggur</label>
              <br/>
              <br/>
              <input style={{"margin-left": "-260px", "border-radius": "10px"}} type= "submit" value= "Kirim" />
            </form>
        </div>

    </div>
  );
}

export default App;
