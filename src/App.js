import React, { useState } from "react";

import Information from './info-json'

export default function App() {
  
  const [filterObj, setFilterObj] = useState({name:'', age:'', keywords:''}),
        onFilter = ({target:{name, value}}) => 
          setFilterObj({...filterObj, [name]: value})
  return (
    <div>
      <label>Name</label>
      <input name="name" value={filterObj.name} onChange={onFilter} />
      <label>Keywords</label>
      <input name="keywords" value={filterObj.keywords} onChange={onFilter} />
      <label>Age</label>
      <input type="number" name="age" value={filterObj.age} onChange={onFilter} />
      <ul>
        {
          Information.map(({id, name, age, keywords}) => {
            const match = (name.toLowerCase().includes(filterObj.name.toLowerCase()) || !filterObj.name) &&
                    (`${age}`.includes(filterObj.age) || !filterObj.age) &&
                    (keywords.some(w => w.toLowerCase().includes(filterObj.keywords.toLowerCase())) || !filterObj.keywords)
             return match && <li key={id}>{name}, {age} ({keywords.join(', ')})</li>
          })
        }
      </ul>
    </div>
  )
}
