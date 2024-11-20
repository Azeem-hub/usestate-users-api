import React, { useState } from 'react';
import Main from './Card';
import {data} from './data';
function App() {
  let [users, setUsers] = useState(data);
   function removeUser(id){
     var filterData = users.filter((mereusers)=> mereusers.id!==id);
     setUsers(filterData);
   }

  return(
    <div className="container-xl">
        <h1 className="text-4xl font-bold text-center mt-10 mb-10">Git Hub Users ({users.length})</h1>
        <div className='users d-flex flex-wrap justify-center gap-2'>
         {users.map(meruserss=>{
          return <>
          <Main {...meruserss} removeUser={removeUser}/>
          {/* send data as a props using spread operator */}
          </>
         })}
        </div>
    </div>

  ); 

}
export default App;
