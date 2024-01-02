
import { data } from '../../../data';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  // The `filter` function is a built-in function in JavaScript that is used on arrays. It creates a new array with all elements that pass a test implemented by the provided function. The test is a function that runs on each item in the array and returns `true` or `false`. If the function returns `true`, the item is included in the new array. If it returns `false`, the item is not included.
  const removeItem = (id) => {
    // console.log(id)
    const newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }

  const clearAllItems = () => {
    setPeople([])
  }
 
  // console.log(people);

  //The `removeItem` function requires an `id` parameter to work properly. If you write `onClick={removeItem}`, you are not providing the `id` parameter that the function needs to remove the correct item from the array. 
  return <div>
    {people.map((person) => {
      // console.log(person);
      const { id, name } = person;
      return (
        <div key={id}>
          <h4 style={{marginBottom: '0px'}}>{name}</h4>
          <button type='button' style={{cursor: 'pointer'}} onClick={() => removeItem(id)}>Remove</button>
        </div>
      )
    })}

    <button type='button' className='btn' style={{marginTop: '2rem'}} onClick={() => clearAllItems}>Clear Items</button>
  </div>
};

export default UseStateArray;
