import problemCard from "./ProblemCard.module.css";

const title = "Title";
const topic = "Topic Name";
const difficulty = "Hard";
const platform = "leetcode";
const isSolved = false;
const updatedOn = "2020-05-05";
const ProjectCard = () => {
  return (
    <div className={problemCard.Container}>
      <div className={problemCard.LeftDiv}>
        <p className={problemCard.Title}>{title}</p>
        <div className={problemCard.CentreDiv}>
          <p className={problemCard.Topic}>{topic}</p>
          <p className={problemCard.Difficulty}>
            Difficulty Level:{" "}
            <span
              className={
                difficulty === "Hard"
                  ? problemCard.Hard
                  : difficulty === "Medium"
                  ? problemCard.Medium
                  : problemCard.Easy
              }
            >
              {difficulty}
            </span>
          </p>
        </div>

        <p className={problemCard.Date}>Updated on {updatedOn}</p>
      </div>
      <div className={problemCard.RightDiv}>
        {isSolved ? (
          <p className={problemCard.Solved}>Solved</p>
        ) : (
          <p className={problemCard.NotSolved}>Not Solved Yet</p>
        )}
        <div>
          <a href="deevanshu.dev" className={problemCard.Link}>
            View details
          </a>
          <div>
            <img
              src={platform === "leetcode" ? "icons/leetcode.svg" : ""}
              alt="platform_img"
            />
            <a href="deevanshu.dev" className={problemCard.Link}>
              Attempt Problem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
