
const App = () => {

  const clickHandler = () => {
    alert('Hello, World!');
  }
  const clickHandler2 = (name) => {
    alert(`Hello, World! ${name}`);
  }

  return (
    <div>
      <h2>{5+3}</h2>
      <h1>My React App</h1>
      <h2>
        This is a simple React application that uses Vite for development and
        build. this is demo . so it can be used for testing and learning purposes.
      </h2>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={() => clickHandler2('John')}>Click Me 2</button>
    </div>
  );
}

export default App;
