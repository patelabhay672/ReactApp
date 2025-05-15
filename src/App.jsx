import { use, useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kaamkarna hai", iscompleted: false },
  ]);

  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(false);
  const [gender, setgender] = useState("male");
  const [city,setcity]=useState("delhi")
  return (
    <div>
      <h1>
        Create task
      </h1>
      <form action="">
        <input
          type="text"
          value={title}
          placeholder="title" onChange={(e) => settitle(e.target.value)} />
        <br></br>

        <input type="checkbox" checked={completed} onChange={(e) => setcompleted(e.target.checked)} />completed
        <br></br>

        Male<input type="radio" value="male" onChange={e => setgender("male")} checked={gender == "male" && true} />
        <br></br>

        female<input type="radio" value="female" onChange={e => setgender("female")} checked={gender == "female" && true} />
      </form>
      <br /><br />
      <select onChange={e => setcity(e.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="kolkata">kolkata</option>
        <option value="mumbai">Mumbai</option>
      </select>

      <button>create todo</button>
    </div>
  );
}

export default App;
