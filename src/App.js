import "./App.css";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState } from "react";
import AddItem from "./Components/AddItem/AddItem";

function App() {
  let [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")));

  const [newItem,setNewItem] = useState('')

  const setSaveItems = (newItems)=>{
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  }

  const addItem=(item)=>{
    const id = items?.length ? items[items.length-1].id+1 :1;
    const myNewItem = {id , checked:false, item}
    if(!items) items=[]
    // console.log(item);
    const listItems = [...items,myNewItem]
    setSaveItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((obj) =>
      obj.id === id ? { ...obj, checked: !obj.checked } : obj
    );
    setSaveItems(listItems)
  };

  const handleDelete = (id) => {
    const listItems = items.filter((obj) => obj.id !== id);
    setSaveItems(listItems)
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
       />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
