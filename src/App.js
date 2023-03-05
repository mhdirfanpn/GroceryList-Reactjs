import "./App.css";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import AddItem from "./Components/AddItem/AddItem";
import SearchItem from "./Components/SearchItem/SearchItem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "  http://localhost:3500/items";

  let [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false)
      }
    };
    setTimeout(()=>{
      (async () => await fetchItems())();
    },1000)
   
  }, []);

 
  const addItem = async(item) => {
    const id = items?.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
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

      <main>
        {isLoading && <div class="loader"></div>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
