import React, { useState, useEffect, useCallback } from "react";
import ImageTable from "./ImageTable";
import { Link } from "react-router-dom";

const HomeImage = () => {
  const [showImg, setshowImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = "token d536654c78a293cf1a96cbabf7bb5d201c10542f";

  const fetchfaqHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://resumeshelper.com/api/home_resume_img",
        { headers: { Authorization: token } }
      );
      console.log("Response Faq", response);

      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log("dataaaaaaaaa", data);

      // const loadedfaqs = [];

      // for (const key in data) {

      //   loadedfaqs.push({
      //     id: key,
      //     question: data.question,
      //     answer: data.answer,
      //   });
      // }

      setshowImg(data.data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchfaqHandler();
  }, [fetchfaqHandler]);

  let content = <p>Data!! No FOund</p>;

  if (showImg.length > 0) {
    content = <ImageTable showImg={showImg} />;
  }

  if (error) {
    content = (
      <p>
        <h2>{error}</h2>
      </p>
    );
  }

  if (isLoading) {
    content = <p style={{ alignItems: "center" }}>Loading...</p>;
  }

  return (
    <div>
      <Link to="/home-image-create">
        {" "}
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginLeft: "89rem", marginBottom: "16px" }}
        >
          Add New
        </button>
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">resume_name</th>
            <th scope="col">image</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default HomeImage;
