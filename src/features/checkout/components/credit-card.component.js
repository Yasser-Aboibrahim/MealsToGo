import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

export const CreditCardInput = ({ name }) => {
    const onChange = (formData) => {
      const { values, status } = formData;
      const isIncomplete = Object.values(status).includes("incomplete");
      console.log(isIncomplete);
      const expiry = values.expiry.split("/");
      console.log(expiry);
      const card = {
        number: values.number,
        exp_month: expiry[0],
        exp_year: expiry[1],
        cvc: values.cvc,
        name: name,
      };
      console.log(values);
    };
    return <LiteCreditCardInput onChange={onChange} />;
  };