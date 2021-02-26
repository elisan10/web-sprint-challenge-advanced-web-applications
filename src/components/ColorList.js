import React, { useState } from "react";

import EditMenu from "./EditMenu";
import axiosWithAuth from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const ColorList = ({ colors, updateColors, setToggle }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = (color) => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = (e) => {
    //Task List:
    //1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        console.log("RES in POST request", res);
        setToggle((toggle) => !toggle);
      })
      .catch((err) => console.log({ err }));
  };

  //2. Complete the deleteColor functions by making a delete request for deleting colors.
  const deleteColor = (color) => {
    axiosWithAuth()
      .delete(`/api/colors/${color.id}`, color)
      .then((res) => {
        console.log("RES in the delete", res);
        setToggle((toggle) => !toggle);
      });
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map((color) => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <EditMenu
          colorToEdit={colorToEdit}
          saveEdit={saveEdit}
          setColorToEdit={setColorToEdit}
          setEditing={setEditing}
        />
      )}
    </div>
  );
};

export default ColorList;
