import ProblemCard from "./problem-card/ProblemCard";
import Navbar from "../navbar/Navbar";
import dashboard from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className={dashboard.Container}>
        <div></div>
        <div className="App">
          <ProblemCard
            title="Title"
            topic="Topic Name"
            difficulty="Easy"
            platform="leetcode"
            isSolved={true}
            updatedOn="2020-05-05"
          />
          <ProblemCard
            title="Title"
            topic="Topic Name"
            difficulty="Hard"
            platform="leetcode"
            isSolved={false}
            updatedOn="2020-05-05"
          />
          <ProblemCard
            title="Title"
            topic="Topic Name"
            difficulty="Easy"
            platform="leetcode"
            isSolved={true}
            updatedOn="2020-05-05"
          />
          <ProblemCard
            title="Title"
            topic="Topic Name"
            difficulty="Hard"
            platform="leetcode"
            isSolved={false}
            updatedOn="2020-05-05"
          />
          <ProblemCard
            title="Title"
            topic="Topic Name"
            difficulty="Easy"
            platform="leetcode"
            isSolved={true}
            updatedOn="2020-05-05"
          />
          <ProblemCard
            title="Title"
            topic="Topic Name"
            difficulty="Hard"
            platform="leetcode"
            isSolved={false}
            updatedOn="2020-05-05"
          />
        </div>
      </div>
    </>
  );
}
