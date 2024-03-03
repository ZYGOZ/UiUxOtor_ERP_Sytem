"use client";
import React from "react";

const StaffErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default StaffErrorBoundary;
