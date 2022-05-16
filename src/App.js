import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "boxicons";
import ScrollUp from "./ScrollUp";
// import Preloader from "./Preloader";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./themes/theme";

function App() {
  const [theme, setTheme] = useState("light");
   return (
    <>
      {/* {loading === false ? (
      ) : (
        <Preloader />
      )} */}
      <ThemeProvider theme={themes[theme]}>
        <Apps>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home theme={theme} setTheme={setTheme} />
                <ScrollUp />
              </Route>
            </Switch>
          </Router>
        </Apps>
      </ThemeProvider>
    </>
  );
}

export default App;

const Apps = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
`;
