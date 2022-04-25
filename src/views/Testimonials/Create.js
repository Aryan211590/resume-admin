import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const [enteredName, setenteredName] = useState("");
  const [enteredReview, setenteredReview] = useState("");

  const token = "token d9c3830189b164fb84a1995058def327c9084c7f";

  const nameHandler = (event) => {
    setenteredName(event.target.value);
  };

  const reviewHandler = (event) => {
    setenteredReview(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(`https://resumeshelper.com/api/add_home_page_testimonials`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name: enteredName,
        review: enteredReview,
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


    history.push("/testimonials");
  };

  return (
    <div>
    <div className="container">
      <form onSubmit={submitHandler}>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputname"
            aria-describedby="name"
            placeholder="Enter name"
            onChange={nameHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputimage">Review</label>
          <textarea
            rows={5}

            className="form-control"
            id="exampleInputimage"
            placeholder="Enter review"
            onChange={reviewHandler}
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
