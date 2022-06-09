import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Bell from "./components/Bell/Bell";
import Chart from "./components/Chart/Chart";
import Discount from "./components/Discount/Discount";
import Home from "./components/Home/Home";
import Mail from "./components/Mail/Mail";
import Settings from "./components/Settings/Settings";
import obj from "./Object";

const allCategories = ["All", ...new Set(obj.map((item) => item.foodType))];

function App() {
  const [save, setsave] = useState([]);

  let [menuItems, setMenuItems] = useState(obj);

  const foodHandler = (food) => {
    let temp = save.filter((item) => item.id == food.id);
    food.num = temp.length + 1;
    setsave([...save, food]);
  };

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
              setsave={setsave}
              setMenuItems={setMenuItems}
            />
          }
        />
        <Route path="/discount" element={<Discount
             save={save}
             setsave={setsave}
        />}/>
        <Route path="/chart" element={<Chart
             save={save}
             setsave={setsave}
        />}/>
        <Route path="/mail" element={<Mail
             save={save}
             setsave={setsave}
        />}/>
        <Route path="/bell" element={<Bell
             save={save}
             setsave={setsave}
        />}/>
         <Route path="/setting" element={<Settings
             save={save}
             setsave={setsave}
             menuItems={menuItems}
             setMenuItems={setMenuItems}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
