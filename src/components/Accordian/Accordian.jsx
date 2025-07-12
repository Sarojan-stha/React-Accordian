import data from "./data";
import React, { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleClick(id) {
    setSelected(id === selected ? null : id);
  }

  return (
    <>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={() => handleClick(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {selected === dataItem.id ? <h3>{dataItem.answer}</h3> : ""}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </>
  );
};

export default Accordian;
