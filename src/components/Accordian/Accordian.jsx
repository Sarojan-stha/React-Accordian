import data from "./data";
import React, { useState } from "react";
import "./accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleClick(id) {
    setSelected(id === selected ? null : id);
  }

  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div onClick={() => handleClick(dataItem.id)} className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : (
                  ""
                )}
              </div>
            ))
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
