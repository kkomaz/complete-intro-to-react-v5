import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

// Will not load this code until later and required to render
// Dynamic import this from somewhere
// Code splits into a separate bundle
// Suspense will use fallback while loading
// If you are going to code split, its better to do it 30kb+
const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense fallback={<h1>Loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));