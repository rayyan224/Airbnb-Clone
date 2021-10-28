import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* Always have default "/" on the bottom */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/* Banner */}
      {/* Cards  */}
      {/* Footer */}
      {/* Search */}
      {/* ... */}
    </div>
  );
}

export default App;
