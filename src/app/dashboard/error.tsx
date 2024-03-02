"use client";
import React from "react";

const DashboardErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default DashboardErrorBoundary;
