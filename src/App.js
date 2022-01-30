import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mahasiswa from './Components/Mahasiswa'
import axios from 'axios';

function App() {

  const [formulir, setFormulir] = useState({})
  const [mahasiswa, setMahasiswa] = useState([])

  function getDataMahasiswa() { 
    axios.get('https://gdscmahasiswa.herokuapp.com/api/mahasiswa')
      .then(function (res) {
        console.log(res);
        setMahasiswa(res.data)
      })
  }
  
  function uploadDataMahasiswa() {
    axios.post('https://gdscmahasiswa.herokuapp.com/api/mahasiswa', formulir)
      .then(res => {
        console.log(res)
        setFormulir({nama:'', jenis_kelamin:'', nim:'', alamat:''})
      })
  }

  return (
    <div>
      <h1>Hello World</h1>

      <button onClick={getDataMahasiswa}> Ambil data mahasiswa </button>

      <br />
      <br />

      <input value={formulir.nama} onChange={function(e){setFormulir({...formulir, nama:e.target.value})}}  />
      <input value={formulir.nim} onChange={function(e){setFormulir({...formulir, nim:e.target.value})}}  />
      <input value={formulir.jenis_kelamin} onChange={function(e){setFormulir({...formulir, jenis_kelamin:e.target.value})}}  />
      <input value={formulir.alamat} onChange={function(e){setFormulir({...formulir, alamat:e.target.value})}}  />
      <button onClick={uploadDataMahasiswa}>Upload data mahasiswa</button>
      
      {mahasiswa.map((m) => (
        <Mahasiswa jk={m.jk} nama={m.nama} />
      ))}     
      

    </div>
  );
}
export default App;
