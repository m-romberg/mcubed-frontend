import './App.css';
import MccubedApi from './api/api';
import {useState} from "react";

function App() {

  const [questions, setQuestions] = useState("")
  const endpoint = "";
  const data = {"action":"donothing"};
  const method = "post";

  let request;
  async function requests(){
    request = await MccubedApi.request(endpoint,data,method);
    console.log("request", request);
    setQuestions(request);
  }


  return (
    <div className="App">
      <button onClick={requests}>
      Click me!
      </button>
      <p>{questions}</p>

    </div>
  );
}

export default App;
