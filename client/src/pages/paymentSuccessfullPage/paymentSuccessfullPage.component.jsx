import React from "react";
import "./paymentSuccessfullPage.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
const paymentSuccessfullPage = ({ history }) => {
  console.log(history);
  return (
    <div className="payment-success">
      <h1>
        Thank you for shopping from our store! We have recieved your order and
        will contact you soon for further information
      </h1>
      <CustomButton onClick={() => history.push("/")}>
        Back to Home Page
      </CustomButton>
    </div>
  );
};

export default paymentSuccessfullPage;
