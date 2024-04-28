const MainContainer = ({ children, className }) => {
  return <div className={`w-full p-5 ${className}`}>{children}</div>;
};

export default MainContainer;
