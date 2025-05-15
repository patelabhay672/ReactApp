import { nanoid } from "nanoid/non-secure";
import { use, useState } from "react";

const App = () => {

    const [todos, settodos] = useState([
    { id: 1, title: "kaamkarna hai", iscompleted: false },
  ]);

  const [title, settitle] = useState("");


  const submitHandler=(e)=>{
    e.preventDefault();
    const newtodo={
      id:nanoid(),
      title,
      iscompleted:false
    }
    console.log(newtodo);
    
  }

  return (
    <div>
      <h1>
        Create task
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          placeholder="title" onChange={(e) => settitle(e.target.value)} />
        <br></br>


        <button>create todo</button>
      </form>
    </div>
  );
}

export default App;
