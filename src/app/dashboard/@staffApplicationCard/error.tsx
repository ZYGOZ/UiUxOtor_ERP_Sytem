"use client";
import React from "react";

const StaffApplicationsCardErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default StaffApplicationsCardErrorBoundary;
