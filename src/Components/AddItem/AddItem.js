import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./AddItems.css";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem" html>
        Add Item
      </label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e)=>{setNewItem(e.target.value)}}
      />
      <button type="submit" aria-label="Add Item">
        <IoMdAdd />
      </button>
    </form>
  );
};

export default AddItem;
