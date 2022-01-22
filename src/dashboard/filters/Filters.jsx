import filters from "./Filters.module.css";

const Filters = () => {
  return (
    <div>
      <div className={filters.FilterSort}>
        <p>Sort by:</p>
        <select className={filters.Select}>
          <option value="" default>
            {" "}
            -- select --{" "}
          </option>
          <option value="">Latest First</option>
          <option value="">Oldest First</option>
          <option value="">Easy to Hard</option>
          <option value="">Hard to Easy</option>
        </select>
      </div>
      <div className={filters.Checkbox}>
        <p>Difficulty:</p>
        <div>
          <input type="checkbox" id="easy" name="easy" value="easy" />
          <label for="easy">Easy</label>
        </div>
        <div>
          <input type="checkbox" id="medium" name="medium" value="medium" />
          <label for="medium">Medium</label>
        </div>
        <div>
          <input type="checkbox" id="hard" name="hard" value="hard" />
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
        <div>
          <input type="radio" id="all" name="status" value="all" checked />
          <label for="all">All</label>
        </div>
        <div>
          <input type="radio" id="solved" name="status" value="solved" />
          <label for="solved">Solved</label>
        </div>
        <div>
          <input type="radio" id="unsolved" name="status" value="unsolved" />
          <label for="unsolved">Unsolved</label>
        </div>
      </div>
      <div className={filters.Footer}>masai14 Team © 2022</div>
    </div>
  );
};
export default Filters;
