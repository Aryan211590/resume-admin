import React, { useState, useEffect } from "react";
import HvideoTable from "./HvideoTable";


const HomeIntroVideo = () => {
  const [showVideo, setShowVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = "token d536654c78a293cf1a96cbabf7bb5d201c10542f";

  const fetchfaqHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://resumeshelper.com/api/view_home_page_video",
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

      setShowVideo(data.data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchfaqHandler();
  }, []);

  let content = <p>No Videos Found</p>;

  if (showVideo.length > 0) {
    content = <HvideoTable showVideo={showVideo} />;
  }

  if (error) {
    content = (
      <p>
        <h2>{error}</h2>
      </p>
    );
  }

  if (isLoading) {
    content = (
      <p style={{ alignItems: "center" }}>
       Loading...
      </p>
    );
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">video_file_name</th>
            <th scope="col">videofile</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default HomeIntroVideo;
