import { useState, useEffect } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleTabClick(index) {
    setCurrentIndex(index);
    onChange(index);
    console.log("clicked");
  }

  return (
    <div className="container">
      <div className="wrapper">
        {tabsContent &&
          tabsContent.map((tab, index) => (
            <div key={tab.label}>
              <span onClick={() => handleTabClick(index)}>{tab.label}</span>
            </div>
          ))}
      </div>
      <div className="Tab-content">
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
      </div>
    </div>
  );
}
