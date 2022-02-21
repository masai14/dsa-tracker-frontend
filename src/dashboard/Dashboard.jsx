import ProblemCard from "./problem-card/ProblemCard";
import Navbar from "../navbar/Navbar";
import dashboard from "./Dashboard.module.css";
import AddProblem from "./add-problem/AddProblem";
import Filters from "./filters/Filters"
import { useState } from "react"



export default function Dashboard({ datas }) {
    const [easy, setEasy] = useState(false);
    const [medium, setMedium] = useState(false);
    const [hard, setHard] = useState(false);
    const [solved, setSolved] = useState(false);
    const [unsolved, setUnsolved] = useState(false);
    const [sort, setSort] = useState(null)
    // const [sortTime, setSortTime] = useState(null)

    function handleEasy() {
        setEasy(!easy)
    }
    function handleMed() {
        setMedium(!medium)
    }
    function handleHard() {
        setHard(!hard)
    }
    function handleSolved() {
        setSolved(!solved);
    }
    function handleUnsolved() {
        setUnsolved(!unsolved);
    }
    function handleSort(value) {
        setSort(value)
        console.log(value);

    }

    function reverse() {
        datas.reverse()
    }





    return (
        <>
            <Navbar />
            <div className={dashboard.Container}>
                <div className={dashboard.Filters}>
                    <div className={dashboard.FilterSort}>
                        <Filters handleHard={handleHard} handleMed={handleMed} handleEasy={handleEasy} handleSolved={handleSolved} handleUnsolved={handleUnsolved} handleSort={handleSort} />
                    </div>
                </div>
                <div className={dashboard.Problems}>
                    <AddProblem />


                    {
                        datas
                            .filter(function (el) {
                                return medium && hard && easy ? true : medium && hard ? el.difficulty === "medium" || el.difficulty === "hard" : medium && easy ? el.difficulty === "medium" || el.difficulty === "easy" : easy && hard ? el.difficulty === "easy" || el.difficulty === "hard" : easy ? el.difficulty === "easy" : medium ? el.difficulty === "medium" : hard ? el.difficulty === "hard" : true
                            })
                            .filter(function (el) {
                                return solved && unsolved ? true : solved ? el.solved === true : unsolved ? el.solved === false : true
                            })
                            .sort(function (a, b) {
                                return sort == 3 ? a.difficulty - b.difficulty : sort == 4 ? b.difficulty - a.difficulty : sort == 1 ? b.updatedAt.localeCompare(a.updatedAt) : sort == 2 ? a.updatedAt.localeCompare(b.updated) : a == b;
                            })
                            .map(function (data) {
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
