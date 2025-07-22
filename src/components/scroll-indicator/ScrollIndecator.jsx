import React, { useEffect, useState } from "react";
import "./styles.css";

const ScrollIndecator = () => {
  const [loading, setLoading] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const url = "https://dummyjson.com/quotes";

  async function fetchQuotes() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuotes(data.quotes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, [url]);

  function handleScroll() {
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    console.log(document.documentElement.clientHeight);

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(scroll + "%");
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="container">
      <div className="scroll-bar">
        <h1>scroll bar indicator</h1>
        <div className="bg-scroll">
          <div
            className="scroll-indicator"
            style={{ "--scroll-Percentage": scrollPercentage }}
          >
            scrollbar
          </div>
        </div>
      </div>
      <div className="quotes">
        Quotes
        {quotes && quotes.length
          ? quotes.map((item) => {
              return (
                <div className="quote">
                  <p>{`"${item.quote}"`}</p>
                  <p className="author">{`AUTHOR: ${item.author}`}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ScrollIndecator;
