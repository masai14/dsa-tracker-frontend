import ProblemCard from "./problem-card/ProblemCard";
// import { useState } from "react";

// const initialState = {

// }

// const [details, setDetails] = useState(initialState)

// const handleDetails = (e) => {
//     const { name, value } = e.target;

//     setDetails({
//         ...details,
//         [name]: value
//     })


//     console.log(details);
// }




import Navbar from "../navbar/Navbar";
import dashboard from "./Dashboard.module.css";
import AddProblem from "./add-problem/AddProblem";

export default function Dashboard({ datas }) {
    return (
        <>
            <Navbar />
            <div className={dashboard.Container}>
                <div className={dashboard.Filters}>
                    <div className={dashboard.FilterSort}>
                        <p>Sort by:</p>
                        <select>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
                <div className={dashboard.Problems}>
                    <AddProblem />

                    {
                        datas.map(function (data) {
                            let { title, topic, difficulty, platform, solved, updatedAt } = data;

                            if (platform.includes("leet")) {
                                platform = "leetcode";
                            } else if (platform.includes("geek")) {
                                platform = "geeksforgeeks"
                            } else if (platform.includes("chef")) {
                                platform = "codechef"
                            }
                            return (
                                <div className="App">
                                    <ProblemCard
                                        title={title}
                                        topic={topic}
                                        difficulty={difficulty}
                                        platform={platform}
                                        solved={solved}
                                        updatedAt={updatedAt}
                                    />
                                </div>
                            );
                        })
                    }


                </div>
            </div>
        </>
    );
}
