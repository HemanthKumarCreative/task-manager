import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ width, height, borderRadius, marginBottom }) => {
  const style = {
    "--width": width,
    "--height": height,
    "--borderRadius": borderRadius,
    "--marginBottom": marginBottom,
  };

  return <div className="skeleton-wrapper skeleton-custom" style={style}></div>;
};

export default SkeletonLoader;
