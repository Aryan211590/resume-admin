import React, { useState, useEffect, useCallback } from "react";
import FaqTable from "./FaqTable";
import { Link } from "react-router-dom";

const FaqIndex = () => {
  const [showFaq, setShowFaq] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = "token d536654c78a293cf1a96cbabf7bb5d201c10542f";

  const fetchfaqHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://resumeshelper.com/api/view_home_page_faq",
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

      setShowFaq(data.data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchfaqHandler();
  }, [fetchfaqHandler]);

  let content = <p>No FAQ FOund</p>;

  if (showFaq.length > 0) {
    content = <FaqTable showFaq={showFaq} />;
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
      <Link to="/add-faq">
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
            <th scope="col">question</th>
            <th scope="col">answer</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default FaqIndex;
