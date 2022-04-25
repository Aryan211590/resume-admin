import React, { useState, useEffect } from "react";
import { CCol } from "@coreui/react";
import { CWidgetDropdown } from "@coreui/react";
import ChartLineSimple from "../charts/ChartLineSimple";

import PaymentData from "./PaymentData";

const PaymentSuccessful = () => {
  const [totalPaidSubscriber, setTotalPaidSubscriber] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = "token d536654c78a293cf1a96cbabf7bb5d201c10542f";

  const fetchfaqHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://resumeshelper.com/api/total_paid_subscriber",
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
      //     message: data[key].message,
      //     data: data[key].message,
      //   });
      // }

      setTotalPaidSubscriber(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchfaqHandler();
  }, []);

  let content = <p>No successful Payments</p>;

  console.log("this id totalPaidSubscriber.data", totalPaidSubscriber.data);

  if (totalPaidSubscriber.length > 0) {
    content = totalPaidSubscriber;
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
    <CCol sm="6" lg="3">

      <CWidgetDropdown
        color="gradient-primary"
        header={totalPaidSubscriber.data}
        text={totalPaidSubscriber.message}
        footerSlot={
          <ChartLineSimple
            pointed
            className="c-chart-wrapper mt-3 mx-3"
            style={{ height: "70px" }}
            dataPoints={[65, 59, 84, 84, 51, 55, 40]}
            pointHoverBackgroundColor="primary"
            label="Members"
            labels="months"
          />
        }
      ></CWidgetDropdown>

    </CCol>
  );
};

export default PaymentSuccessful;
