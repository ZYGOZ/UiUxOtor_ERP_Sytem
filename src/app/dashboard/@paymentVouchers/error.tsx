"use client";
import React from "react";

const PaymentVouchersErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default PaymentVouchersErrorBoundary;
