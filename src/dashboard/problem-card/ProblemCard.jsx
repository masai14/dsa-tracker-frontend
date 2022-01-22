
import problemCard from "./ProblemCard.module.css";

const ProblemCard = ({ title, topic, difficulty, platform, solved, updatedAt }) => {

  console.log(title, topic, difficulty, platform, solved, updatedAt);

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

        <p className={problemCard.Date}>Updated on {updatedAt}</p>
      </div>
      <div className={problemCard.RightDiv}>
        <div className={problemCard.SolvedDiv}>
          {solved ? (
            <p className={problemCard.Solved}>Solved</p>
          ) : (
            <p className={problemCard.NotSolved}>Not Solved Yet</p>
          )}
        </div>

        <div className={problemCard.BottomDiv}>
          <a
            href="deevanshu.dev"
            className={problemCard.Link + " " + problemCard.DetailsLink}
          >
            View details
          </a>
          <div className={problemCard.Attempt}>
            <img
              src={platform === "leetcode" ? "icons/leetcode.svg" : ""}
              alt="platform_img"
            />
            <a
              href="deevanshu.dev"
              className={problemCard.Link + " " + problemCard.AttemptLink}
            >
              Attempt Problem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  // >>>>>>> 1acb68b305cdcf0d76b99a51022ae2109da2e6b4
};

export default ProblemCard;
