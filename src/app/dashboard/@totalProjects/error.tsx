"use client";
import React from "react";

const TotalProjectsErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default TotalProjectsErrorBoundary;