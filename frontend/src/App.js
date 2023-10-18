import './App.css';
import {useEffect, useState} from "react";


function App() {

  const [message, setMessage] = useState('');


  useEffect( () => {
    fetch("https://supreme-enigma-6469gj9w7x25v5x-3123.app.github.dev/")
      .then(res => res.json())
      .then(data => setMessage(data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>Sallad</h1>
      <p>Hello from frontend</p>
      <p>{message.message}</p>
    </div>
  );
}

export default App;
