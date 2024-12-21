/* eslint-disable react/prop-types */

const DisplayTotal = ({list}) => {
  
  let value = () => {
    return !list
      ?  0
      : list.reduce((acc, item) => {
        return acc += item.price
      }, 0)
  }
  


  return (
    <div>Total : ${value()} </div>
  )
}

export default DisplayTotal;