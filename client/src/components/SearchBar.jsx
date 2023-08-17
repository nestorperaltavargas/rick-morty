import { useState } from "react";

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const onChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <input type='search' onChange={onChange} value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
