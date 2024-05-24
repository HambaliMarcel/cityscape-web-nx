import { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    console.log("JavaScript loaded");
    // Your JavaScript code here
  }, []);

  return <div>{/* Your component JSX here */}</div>;
};

export default Content;
