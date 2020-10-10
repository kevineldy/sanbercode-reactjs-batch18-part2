import React from 'react';
import logo from '../logo.svg';
import './App.css';

class FormBuah extends React.Component{

    render() {
        const border = {width: "50%", height:"300px", border: "1px solid", color: "black", "border-radius": "10px", margin: "10px auto"}
        return (
            <div className="formBuah">
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
                <img src={logo} className="App-logo" alt="logo" />
                <div className="container" style={border}>
                    
                    <h1 style={{textAlign: "center"}}>Form Pembelian Buah</h1>
                    <form>
                    <label style={{padding: "20px"}}> Nama Pelanggan </label>
                    <input type= "text" name= "name" />
                    <br/>
                    <br/>
                    <input style={{"margin-left": "165px"}} type= "checkbox" /> <label>Semangka</label>
                    <br/>
                    <input style={{"margin-left": "165px"}} type= "checkbox" /> <label>Jeruk</label>
                    <br/>
                    <input style={{"margin-left": "165px"}} type= "checkbox" /> <label>Nanas</label>
                    <br/>
                    <input style={{"margin-left": "165px"}} type= "checkbox" /> <label>Salak</label>
                    <br/>
                    <label style={{"margin-left": "20px"}}>Daftar Item</label>
                    <input style={{"margin-left":  "65px"}} type= "checkbox" /> <label>Anggur</label>
                    <br/>
                    <br/>
                    <input style={{"margin-left": "20px", "border-radius": "10px"}} type= "submit" value= "Kirim" />
                    </form>
                </div>

            </div>
        );
    }

}

export default FormBuah;