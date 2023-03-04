import ItemList from "../ItemList/ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Content;
