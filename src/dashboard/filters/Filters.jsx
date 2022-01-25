import filters from "./Filters.module.css";

const Filters = ({ handleMed, handleHard, handleEasy, handleSolved, handleUnsolved, handleSort }) => {
  return (
    <div>
      <div className={filters.FilterSort}>
        <p>Sort by:</p>
        <select className={filters.Select} onChange={function (e) {
          handleSort(e.target.value)
        }}>
          <option value="null">
            {" "}
            -- select --{" "}
          </option>
          <option value="1" >Latest First</option>
          <option value="2" >Oldest First</option>
          <option value="3">Easy to Hard</option>
          <option value="4" >Hard to Easy</option>
        </select>
      </div>
      <div className={filters.Checkbox}>
        <p>Difficulty:</p>
        <div>
          <input type="checkbox" id="easy" name="easy" value="easy" onChange={handleEasy} />
          <label for="easy">Easy</label>
        </div>
        <div>
          <input type="checkbox" id="medium" name="medium" value="medium" onChange={handleMed} />
          <label for="medium">Medium</label>
        </div>
        <div>
          <input type="checkbox" id="hard" name="hard" value="hard" onChange={handleHard} />
          <label for="hard">Hard</label>
        </div>
      </div>
      <div className={filters.Checkbox}>
        <p>Platform:</p>
        <div>
          <input type="checkbox" id="oj" name="oj" value="oj" />
          <label for="oj">Online Judge</label>
        </div>
        <div>
          <input type="checkbox" id="lc" name="lc" value="lc" />
          <label for="lc">Leetcode</label>
        </div>
        <div>
          <input type="checkbox" id="hr" name="hr" value="hr" />
          <label for="hr">Hackerrank</label>
        </div>
      </div>
      <div className={filters.Checkbox}>
        <p>Status:</p>
        {/* <div>
          <input type="checkbox" id="all" name="status" value="all" onChange={clear} />
          <label for="all">All</label>
        </div> */}
        <div>
          <input type="checkbox" id="solved" name="status" value="solved" onChange={handleSolved} />
          <label for="solved">Solved</label>
        </div>
        <div>
          <input type="checkbox" id="unsolved" name="status" value="unsolved" onChange={handleUnsolved} />
          <label for="unsolved">Unsolved</label>
        </div>
      </div>
      <div className={filters.Footer}>masai14 Team © 2022</div>
    </div>
  );
};
export default Filters;
