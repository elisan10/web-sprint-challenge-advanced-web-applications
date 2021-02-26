import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [toggle, setToggle] = useState(false);

  //Task List:
  //1. Make an axios call to retrieve all color data and push to state on mounting.

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => console.log("Error in get request for colors", err));
  }, [toggle]);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        setToggle={setToggle}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
