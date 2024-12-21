/* eslint-disable react/prop-types */
import axios from "axios"


const DeleteItems = ({ item, syncList }) => {

    const handleDelete = async() => {
        await axios.delete(`http://localhost:3000/list/${item.id}`); 
        syncList();
  }

  return (
    <button onClick={handleDelete}>Del</button>
  )
}

export default DeleteItems