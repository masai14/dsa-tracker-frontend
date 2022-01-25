import { useState, useEffect } from "react";
import Dashboard from "../dashboard/Dashboard";

export const FetchDashboard = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let url = "https://dsa-tracker-api.herokuapp.com/question/user/";
    let id = "61ea54a135620144f048f7f7";
    fetch(url + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setDatas(response);
      });
  }, []);

  return (
    <div className="App">
      <Dashboard datas={datas} />
    </div>
  );
};