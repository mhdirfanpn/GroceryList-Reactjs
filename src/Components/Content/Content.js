import ItemList from "../ItemList/ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Content;
