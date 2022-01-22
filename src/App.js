import "./App.css";
import ProjectCard from "./dashboard/problem-card/ProblemCard";
import { useState, useEffect } from 'react'





// let arr = fetchData()

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {


    let url = "https://dsa-tracker-api.herokuapp.com/question/user/"
    let id = "61ea54a135620144f048f7f7"
    fetch(url + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setDatas(response)
      })



  }, [])
  // setDatas(arr)

  return (
    <div className="App">


      <ProjectCard datas={datas} />


    </div>
  );
}

export default App;
