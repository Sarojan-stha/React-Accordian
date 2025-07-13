import data from "./data";
import React, { useState } from "react";
import "./accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enabledMultiSelection, setEnabledMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    const indexOfId = cpyMultiple.indexOf(id);

    indexOfId === -1 ? cpyMultiple.push(id) : cpyMultiple.splice(indexOfId, 1);
    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => setEnabledMultiSelection(!enabledMultiSelection)}
        >
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={() =>
                    enabledMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enabledMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
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
