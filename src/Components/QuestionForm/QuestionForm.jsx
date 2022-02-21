import styles from "./QuestionForm.module.css";
export const QuestionFrom = () => {
  return (
    <div className={styles.create_question_form_container}>
      <div className={styles.top_row}>
        <i id="close-btn" className="fas fa-times"></i>
      </div>
      <div className={styles.mid_row}>
        <h2>Quick Create</h2>
        <p>Add a new problem by filling the details below</p>

        <form className={styles.create_question_form}>
          <div className={styles.form_group}>
            <label for="problem-title">Title</label>
            <p>Provide a suitable title matching the problem statement</p>
            <input
              type="text"
              name="problem-title"
              id="problem-title"
              className="form-control"
            />
          </div>
          <div className={styles.form_group}>
            <label for="problem-link">URL</label>
            <p>Link of the problem from platforms like Leetcode, Hackerrank</p>
            <input type="text" name="problem-link" id="problem-link" />
          </div>
          <div className={styles.form_group}>
            <label for="problem-difficulty">Difficulty</label>
            <p>Select the difficulty level of the problem</p>
            <select
              name="problem-difficulty"
              id="problem-difficulty"
              className="form-control"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className={styles.form_group}>
            <label for="problem-intuition">Intuition</label>
            <p>Jot down the approach or intuition behind this problem</p>
            <textarea
              name="problem-intuition"
              id="problem-solution"
              cols="70"
              rows="4"
              className="form-control"
            ></textarea>
          </div>
          <div className={styles.form_group}>
            <label for="problem-topics">Topics</label>
            <p>
              Mention upto 3 relevant topics the problem belongs to seperated by
              commas.
            </p>
            <input type="text" name="problem-topics" id="problem-topics" />
          </div>
          <div className={styles.form_group_checkbox}>
            <div className="solved-checkbox">
              <input type="checkbox" id="isSolved" />
              <label for="isSolved">Mark as Solved?</label>
            </div>
            <div className="fav-checkbox">
              <input type="checkbox" id="isFav" />
              <label for="isFav">Add to Favourites?</label>
            </div>
          </div>
          <div className={styles.form_group_submit}>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
      {/* 
      <div className="bot-row"></div> */}
    </div>
  );
};
