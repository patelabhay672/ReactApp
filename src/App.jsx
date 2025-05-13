import { useState } from "react";

const App = () => {

  const [ username, setusername ] = useState("Abhay")
  const clickHandler = () => {
    alert('Hello, World!');
  }
  const clickHandler2 = (name) => {
    alert(`Hello, World! ${name}`);
  }

  const profile = [
    { name: "Abhay", age: 32 },
    { name: "devi", age: 21 },
    { name: "Sita", age: 22 }
  ]

  const updatedprofile = profile.map((profile, index) => {
    return (
      <li>
        <span>Name: {profile.name}</span><br></br>
        <span>Age: {profile.age}</span>
      </li>
    )
  })

  const [fullname,setfullname]=useState("")

  const changehandler=(e)=>{
    setfullname(e.target.value)
  }
  console.log(fullname)

  return (
    <div>
      <h2>{5 + 3}</h2>
      <h1>My React App</h1>
      <h2>
        This is a simple React application that uses Vite for development and
        build. this is demo . so it can be used for testing and learning purposes.
      </h2>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={() => clickHandler2('John')}>Click Me 2</button>
      <ol>{updatedprofile}</ol>
      <h2>{username}</h2>
      <button onClick={()=>setusername("Aditya")}>change name</button>

      <input onChange={changehandler}  type="text" placeholder="fullname"/>
    </div>
  );
}

export default App;
