
import React from "react";
import {
  CWidgetDropdown,

} from "@coreui/react";
import ChartLineSimple from "../charts/ChartLineSimple";


const PaymentData = (props) => {
  console.log("props payment",props)
  return (
    <CWidgetDropdown
    color="gradient-primary"
    header={props.totalPaidSubscriber.data}
    text={props.totalPaidSubscriber.message}
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
  )
}

export default PaymentData
