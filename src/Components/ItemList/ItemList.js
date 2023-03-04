import React from "react";
import LinItems from "../LinItems/LinItems";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      {items ? (
        <ul>
          {items.map((item) => {
            return (
              <LinItems
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is Empty</p>
      )}
    </div>
  );
};

export default ItemList;
