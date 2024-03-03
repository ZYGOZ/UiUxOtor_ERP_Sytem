"use client";
import React from "react";

const TotalApplicationsErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default TotalApplicationsErrorBoundary;