import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import obj from "./Object";

const allCategories = ["All", ...new Set(obj.map((item) => item.foodType))];

function App() {
  const [save, setsave] = useState([]);
  const [count, setcount] = useState(0);

  const foodHandler = (food) => {
    setcount(count + 1);
    if (save.indexOf(food) !== -1) return;
    setsave([...save, food]);
    console.log(save);
  };

  let [menuItems, setMenuItems] = useState(obj);
  let [foodType, setCategories] = useState(allCategories);

  const filterItems = (foodType) => {
    if (foodType === "All") {
      setMenuItems(obj);
      return;
    }
    const newitems = obj.filter((item) => {
      return item.foodType === foodType;
    });
    setMenuItems(newitems);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filterItems={filterItems}
              foodType={foodType}
              menuItems={menuItems}
              foodHandler={foodHandler}
              save={save}
              setSaved={setsave}
              count={count}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
