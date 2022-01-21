const title = "deev";
const topic = "deev";
const difficulty = "deev";
const platform = "deev";
const isSolved = "deev";
const updatedOn = "deev";
const projectCard = () => {
  return (
    <>
      hello
      <div>
        <h1>{title}</h1>
        <h2>{topic}</h2>
        <h3>Difficulty Level: {difficulty}</h3>
        <h4>Updated on {updatedOn}</h4>
      </div>
      <div>
        {isSolved ? <h3>Solved</h3> : <h3>Not Solved Yet</h3>}
        <button>View details</button>
        <p>{platform}</p>
        <button>Attempt Problem</button>
      </div>
    </>
  );
};

export default projectCard;
