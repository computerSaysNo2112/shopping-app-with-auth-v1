/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import InputItem from './InputItem';
import DisplayItems from './DisplayItems';
import DisplayTotal from './DisplayTotal';
import Login from './Login'

function App() {
  const [list, setList] = useState([]);
  const [displayLogin, setDisplayLogin] = useState(true);
  let address = "http://localhost:3000/list";

  const syncList = async() => {
    let response = await axios.get(address);
    setList(response.data.list);
  }

  useEffect(() => {
    syncList();
  }, [])
  


  return (
    <>
      {
        displayLogin
          ?
          <Login displayLogin={displayLogin} setDisplayLogin={setDisplayLogin} />
          :
          <div className='app'>
          <h2>🛍️ Shopping List</h2>
          <InputItem list={list} syncList={syncList} address={address} />
          <DisplayItems list={list} syncList={syncList} address={address}/> 
          <DisplayTotal list={list} />
        </div>
    }

    </>

  )
}

export default App
