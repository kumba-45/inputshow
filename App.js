import React, { useState } from "react";
import Adduser from "./Components/Adduser/Adduser";
import Userlist from "./Components/Adduser/Userlist";
const  App = () => {

const [userlist, setUserlist] = useState([]);

const addUserlisthandler = (uname, uage) =>{
  setUserlist((prevuserlist) => {
    return [...prevuserlist, {name : uname, age : uage , id: Math.random().toString()}]
  })
}

  return (
   
    <div>
      <Adduser onAdder={addUserlisthandler} />
      <Userlist users={userlist}/>

    </div>
  );
}

export default App;
