import React, { useState } from "react";

function App() {
 // Default way of achieving this
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  // const [click,checkClick] = useState("");

  function updateFname (event){
    setFname(event.target.value);
  }

  function updateLname (event){
    setLname(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {fname+" "+lname}</h1>
        <input name="fName" placeholder="First Name" onChange={updateFname}/>
        <input name="lName" placeholder="Last Name" onChange={updateLname}/>
        <button>Submit</button>
    </div>
  );
}




  //Second Way of achieving this
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
      
    

  


  


 

