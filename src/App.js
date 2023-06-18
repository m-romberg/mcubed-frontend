import './App.css';
import MccubedApi from './api/api';
import {useState} from "react";
import RoutesList from './routes-nav/RoutesList';
import ApiForms from './forms-api/ApiForms';

/**
 * App
 *
 * App => {RoutesList, ApiForms}
 */
function App() {


  let request;
  async function requests(data, method){
    console.log("requests", "data", data, "method", method)
    const endpoint="";
    request = await MccubedApi.request(endpoint,data,method);
  }


  return (
    <div className="App">
      <RoutesList submit={requests} />
    </div>
  );
}

export default App;
