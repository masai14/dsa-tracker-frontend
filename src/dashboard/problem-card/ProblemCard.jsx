const ProjectCard = ({ datas }) => {

  // console.log(datas);

  // return null
  if (datas.length == 0) {
    return null
  }

  return datas.map(function (data) {
    let { title, topic, difficulty, platform, solved, updatedAt } = data;
    console.log(title, topic, difficulty, platform, solved, updatedAt);
    return (
      <>
        hello
        <div>
          <h1>{title}</h1>
          <h2>{topic}</h2>
          <h3>Difficulty Level: {difficulty}</h3>
          <h4>Updated on {updatedAt}</h4>
        </div>
        <div>
          {solved ? <h3>Solved</h3> : <h3>Not Solved Yet</h3>}
          <button>View details</button>
          <p>{platform}</p>
          <button>Attempt Problem</button>
        </div>
      </>
    );
  })
};

export default ProjectCard;
