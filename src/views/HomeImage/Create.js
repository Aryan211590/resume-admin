import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const [resumeName, setResumeName] = useState("");
  const [image, setImage] = useState({});
  console.log(image);

  const token = "token d9c3830189b164fb84a1995058def327c9084c7f";

  const nameHandler = (event) => {
    setResumeName(event.target.value);
  };

  const handleImg = (event) => {
    setImage(event.target.files[0].name);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(`https://resumeshelper.com/api/add_home_resume`, {
      method: "POST",
      headers: {
        "content-type": "application/json",

        Authorization: token,
      },
      body: JSON.stringify({
        name: resumeName,
        resume_img: image,
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
    history.push("/home-resume-image");
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Resume name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputresumename"
              aria-describedby="resumename"
              placeholder="Enter Resume name"
              onChange={nameHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputimage">Image</label>
            <input
              type="file"
              className="form-control"
              id="exampleInputimage"
              placeholder="image"
              onChange={handleImg}
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
