/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

const InputItem = ({syncList, address}) => {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit =async (e) => {
        e.preventDefault();
        let newItem = {item,price:parseInt(price)}
        await axios.post(address, newItem);
      syncList();
      setItem('');
      setPrice('');
    }


  return (
      <form onSubmit={handleSubmit}>
          <input placeholder='Item' value={item} onChange={(e) => setItem(e.target.value)}></input>
          <input type='number' placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
          <button disabled={!item || !price} type='submit'>Add</button>
    </form>
  )
}

export default InputItem;