"use client";
import React from "react";

const MemoErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default MemoErrorBoundary;