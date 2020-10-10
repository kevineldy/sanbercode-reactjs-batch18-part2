import React from 'react';
import './App.css';
import Nama from './tampiltabel';
import Harga from './tampilharga';
import Berat from './tampilberat';

class TabelHargaBuah extends React.Component{
    render(){
        let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
        ]
        return(
            <>
            {dataHargaBuah.map(el=>{
                return(
                    <div>
                        <table style={{border:"1px solid", cellpadding:"10"}}>
                            <thead>
                                 <th>
                                    <td>Nama</td>
                                    <td>Harga</td>
                                    <td>Berat</td>
                                </th>
                            </thead>
                              
                            <tbody>
                                <tr>
                                    <td><Nama nama={el.nama}/></td>
                                    <td><Harga harga={el.harga}/></td>
                                    <td><Berat berat={el.berat}/></td>
                                </tr>
                                </tbody> 
                        </table>
                </div> 
                )
            })}
            </>
        )
    }
}

export default TabelHargaBuah