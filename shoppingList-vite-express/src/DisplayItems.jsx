/* eslint-disable react/prop-types */

import DeleteItems from "./DeleteItems"

const DisplayItems = ({list, syncList, address}) => {
  return (
    <div className="list-container">
      {
        (!list)
        ? <p> List is currently Empty</p>
        : list.map((item)=>(
          <div className="item-row" key={item.id}>
            <p className="item">{item.item}</p>
            <p className="item">${item.price}</p>
            <DeleteItems item={item} syncList={syncList} list={list} address={address} />
          </div>
      ))
      }
    </div>
  )
}

export default DisplayItems