import problemCard from "./ProblemCard.module.css";

const ProblemCard = ({
  title,
  topic,
  difficulty,
  platform,
  isSolved,
  updatedOn,
}) => {
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
        <div className={problemCard.SolvedDiv}>
          {isSolved ? (
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
};

export default ProblemCard;
