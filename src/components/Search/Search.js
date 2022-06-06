import React from "react";
import obj from "../../Object"

function Search(props) {
  let temp = [];
  const searchHandler = (e) => {
    obj.forEach((item, index) => {
      if (
        item.title
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      ) {
        temp.push(item);
      }
    });
    props.setMenuItems(temp);
  };
  return (
    <div className="home__input-div">
      <i className="bx bx-search home__icon"></i>
      <input
      onChange={searchHandler}
        className="home__input"
        type="text"
        placeholder="Search for food, coffe, etc.."
      />
    </div>
  );
}

export default Search;
