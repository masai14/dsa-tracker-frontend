import ProblemCard from "./problem-card/ProblemCard";

export default function Dashboard() {
  return (
    <div className="App">
      <ProblemCard
        title="Title"
        topic="Topic Name"
        difficulty="Easy"
        platform="leetcode"
        isSolved={true}
        updatedOn={Date()}
      />
    </div>
  );
}
