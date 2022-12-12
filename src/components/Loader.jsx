import React from "react";
import { BarLoader } from "react-spinners";

function Loader() {
  const styles ={
    display: "block",
    margin: " auto",
    marginTop: "250px",
    width: "200px",
  };
  return (
    <BarLoader
      color="#2274A5"
      cssOverride={styles}
      loading={true}
    ></BarLoader>
  );
}

export default Loader;
