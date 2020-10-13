import React from "react";
import './style.css';

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group p-3 mb-2 insert">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search by book title"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-info float-right"
          style={{margin: "16px"}}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
