import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const [enteredQuestion, setenteredQuestion] = useState("");
  const [enteredAnswer, setenteredAnswer] = useState("");

  const token = "token d9c3830189b164fb84a1995058def327c9084c7f";

  const questionHandler = (event) => {
    setenteredQuestion(event.target.value);
  };

  const answerHandler = (event) => {
    setenteredAnswer(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(`https://resumeshelper.com/api/add_home_page_faq`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        question: enteredQuestion,
        answer: enteredAnswer,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log("res", response);
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    history.push("/faq");
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Question</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputquetion"
              aria-describedby="question"
              placeholder="Enter question"
              onChange={questionHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputanswer">Answer</label>
            <textarea
              rows={5}
              className="form-control"
              id="exampleInputanswer"
              placeholder="Enter answer"
              onChange={answerHandler}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
