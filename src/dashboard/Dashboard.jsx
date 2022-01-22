import ProblemCard from "./problem-card/ProblemCard";
import { useState } from "react";

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

export default function Dashboard({ datas }) {
    console.log("this is the array", datas);
    return datas.map(function (data) {
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
