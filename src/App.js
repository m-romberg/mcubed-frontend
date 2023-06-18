import './App.css';
import MccubedApi from './api/api';
import {useState} from "react";
import RoutesList from './routes-nav/RoutesList';
import Navigation from './routes-nav/Navigation';
// import ApiForms from './forms-api/ApiForms';

/**
 * App
 *
 * App => {RoutesList, ApiForms}
 */
function App() {

  let questions = [];
  let request;
  async function requests(data, method){
    console.log("requests", "data", data, "method", method)
    const endpoint="";
    request = await MccubedApi.request(endpoint,data,method);
    console.log("request", request);
  }


  return (
    <div className="App">
    <Navigation />
      <RoutesList submit={requests} questions={questions} />
    </div>
  );
}

export default App;
