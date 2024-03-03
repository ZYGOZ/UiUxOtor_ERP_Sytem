"use client";
import React from "react";

const StaffNumberErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default StaffNumberErrorBoundary;