import addProblem from "./AddProblem.module.css";

const AddProblem = () => {
  return (
    <div className={addProblem.Container}>
      <div>
        <h1>My Problems</h1>
      </div>
      <div>
        <p className={addProblem.Button}>
          <strong>+ Add a new Problem</strong>
        </p>
      </div>
    </div>
  );
};

export default AddProblem;
