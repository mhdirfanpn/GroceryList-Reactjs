import React,{useRef} from "react";
import { IoMdAdd } from "react-icons/io";
import "./AddItems.css";


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem" html>
        Add Item
      </label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e)=>{setNewItem(e.target.value)}}
      />
      <button onClick={()=>inputRef.current.focus()} type="submit" aria-label="Add Item">
        <IoMdAdd />
      </button>
    </form>
  );
};

export default AddItem;
