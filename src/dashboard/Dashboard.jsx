import ProblemCard from "./problem-card/ProblemCard";
import Navbar from "../navbar/Navbar";
import dashboard from "./Dashboard.module.css";
import AddProblem from "./add-problem/AddProblem";

export default function Dashboard() {
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
