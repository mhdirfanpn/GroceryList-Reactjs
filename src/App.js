import "./App.css";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState,useEffect } from "react";
import AddItem from "./Components/AddItem/AddItem";
import SearchItem from "./Components/SearchItem/SearchItem";

function App() {
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList") || [])
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");


 

  const setSaveItems = (newItems) => {
    setItems(newItems);
   
  };

  useEffect(()=>{
      localStorage.setItem("shoppingList", JSON.stringify(items))
  },[items])

  const addItem = (item) => {
    const id = items?.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }; 
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((obj) =>
      obj.id === id ? { ...obj, checked: !obj.checked } : obj
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((obj) => obj.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem search={search} setSearch={setSearch} />

      <Content

        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
