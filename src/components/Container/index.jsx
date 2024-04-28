// import React from "react";

const Container = ({ className, children }) => {
  return (
    <section
      className={`w-[100vw] flex justify-center lg:items-center ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
