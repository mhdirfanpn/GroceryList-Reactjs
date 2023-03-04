import React from "react";
import { AiOutlineDelete } from "react-icons/ai";


import "./LineItems.css";

const LinItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <div>
      <li className="item">
        <input
          type="checkbox"
          onChange={() => {
            handleCheck(item.id);
          }}
          checked={item.checked}
        />

        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => {
            handleCheck(item.id);
          }}
        >
          {item.item}
        </label>
        <AiOutlineDelete
          onClick={() => {
            handleDelete(item.id);
          }}
          rol="button"
          tabIndex="0"
        />
   
      </li>
    </div>
  );
};

export default LinItems;
