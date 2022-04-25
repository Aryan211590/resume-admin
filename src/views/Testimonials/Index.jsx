import React, { useState, useEffect, useCallback } from "react";
import Table from "./Table";
import LoadingSpinner from "../Loader/LoadingSpinner";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [showTest, setShowTest] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = "token d536654c78a293cf1a96cbabf7bb5d201c10542f";

  const fetchfaqHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://resumeshelper.com/api/view_home_page_testimonials",
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

      setShowTest(data.data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchfaqHandler();
  }, [fetchfaqHandler]);

  let content = <p>No Testimonials Found</p>;

  if (showTest.length > 0) {
    content = <Table showTest={showTest} />;
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
      <Link to="/add-testomonials">
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
            <th scope="col">Name</th>
            <th scope="col">Review</th>
            <th scope="col">Created At</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default Testimonials;
